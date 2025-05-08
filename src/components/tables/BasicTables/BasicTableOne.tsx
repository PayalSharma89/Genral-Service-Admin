import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../ui/table";
import Badge from "../../ui/badge/Badge";

import { users } from "../../../utils/apis";

interface Document {
  id: string;
  status: string;
  name: string;
  type: string;
  file: string;
}

interface Order {
  id: number;
  user: {
    image: string;
    name: string;
    role: string;
  };
  Email: string;
  phonenumber: string;
  status: string;
  Date: string;
  userDocs: Document[];
}

const initialTableData: Order[] = [
  {
    id: 1,
    user: {
      image: "/images/user/user-17.jpg",
      name: "Lindsey Curtis",
      role: "Web Designer",
    },
    Email: "lindsey@gmail.com",
    phonenumber: "986544653",
    Date: "01 Jan 2025 ",
    status: "Active",
    userDocs: [
      {
        id: "1",
        status: "approved",
        name: "doc1",
        type: "auth",
        file: "1746621000247.jpg",
      },
      {
        id: "2",
        status: "pending",
        name: "doc2",
        type: "bill",
        file: "1746621000247.pdf",
      },
    ],
  },
];

export default function BasicTableOne() {
  const [tableData, setTableData] = useState<Order[]>([]);
  const [selectedUser, setSelectedUser] = useState<Order | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleAllUser = async () => {
      try {
        const response = await users(); // assume response.data.payload is the user array
        const apiData = response.data.payload;
        console.log(apiData, "apiData");

        const formattedData: Order[] = apiData.map(
          (user: any, index: number) => {
            const imageUrl = user.profilePicture
              ? `${user.profilePicture}`
              : "https://via.placeholder.com/40"; // fallback image

            return {
              id: index + 1,
              user: {
                image: imageUrl,
                name: `${user.name} ${user.surname || ""}`,
                role: user.userWorkProfile?.des || "",
              },
              Email: user.email,
              phonenumber: user.phoneNumber || "N/A",
              Date: user.profile === "COMPLETED" ? "Completed" : "Pending",
              status: user.profile === "COMPLETED" ? "Provider" : "User",
              userDocs: user.userDocs || [],
            };
          }
        );

        setTableData(formattedData);
      } catch (error) {
        console.log(error, "Error fetching users");
      }
    };

    handleAllUser();
  }, []);

  const handleViewDocuments = (user: Order) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleApproveDocument = (documentId: string) => {
    const updatedDocs = selectedUser?.userDocs.map((doc) =>
      doc.id === documentId ? { ...doc, status: "approved" } : doc
    );
    if (selectedUser) {
      setSelectedUser({ ...selectedUser, userDocs: updatedDocs || [] });
    }
  };

  const handleRejectDocument = (documentId: string) => {
    const updatedDocs = selectedUser?.userDocs.map((doc) =>
      doc.id === documentId ? { ...doc, status: "rejected" } : doc
    );
    if (selectedUser) {
      setSelectedUser({ ...selectedUser, userDocs: updatedDocs || [] });
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <Table>
          {/* Table Header */}
          <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
            <TableRow>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                User
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Email
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Phone Number
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Role
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Document Verification
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
            {tableData.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="px-5 py-4 sm:px-6 text-start">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 overflow-hidden rounded-full">
                      <img
                        width={40}
                        height={40}
                        src={`https://woqqy.juanosorio.dev/uploads/${order.user.image}`}
                        alt={order.user.name}
                        crossOrigin="anonymous"
                      />
                    </div>
                    <div>
                      <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                        {order.user.name}
                      </span>
                      <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
                        {order.user.role}
                      </span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {order.Email}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {order.phonenumber}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  <Badge
                    size="sm"
                    color={
                      order.status === "Provider"
                        ? "success"
                        : order.status === "User"
                        ? "warning"
                        : "error"
                    }
                  >
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell className="px-4 py-3 text-start text-theme-sm">
                  <Badge
                    size="sm"
                    color={
                      order.Date === "Completed"
                        ? "success"
                        : order.status === "Pending"
                        ? "warning"
                        : "error"
                    }
                  >
                    {order.Date}
                  </Badge>
                </TableCell>
                <TableCell className="px-4 py-3 text-start text-theme-sm">
                  <button
                    className="text-yellow-600 hover:underline font-semibold"
                    onClick={() => handleViewDocuments(order)}
                  >
                    View Document
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Modal for viewing documents */}
      {isModalOpen && selectedUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-50">
          <div
            className="bg-white p-6 rounded-lg w-1/2 max-w-md border-2"
            style={{ borderColor: "#cccccc" }}
          >
            <h2 className="text-lg font-bold mb-4">
              Documents for {selectedUser.user.name}
            </h2>

            {selectedUser.userDocs && selectedUser.userDocs.length > 0 ? (
              selectedUser.userDocs.map((doc) => (
                <div key={doc.id} className="mb-4">
                  <div className="flex justify-between items-center">
                    <span>
                      {doc.name} ({doc.type})
                    </span>
                    <div>
                      <span
                        className={`badge ${
                          doc.status === "approved"
                            ? "bg-green-500"
                            : doc.status === "rejected"
                            ? "bg-red-500"
                            : "bg-yellow-500"
                        } px-2 py-1 text-white`}
                      >
                        {doc.status}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <a
                      href={`https://woqqy.juanosorio.dev/uploads/${doc.file}`}
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Document
                    </a>
                    {doc.status === "pending" && (
                      <div>
                        <button
                          className="bg-green-500 text-white px-4 py-2 rounded-lg mr-2"
                          onClick={() => handleApproveDocument(doc.id)}
                        >
                          Approve
                        </button>
                        <button
                          className="bg-red-500 text-white px-4 py-2 rounded-lg"
                          onClick={() => handleRejectDocument(doc.id)}
                        >
                          Reject
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600">No documents found.</p>
            )}

            <button
              onClick={handleCloseModal}
              className="mt-4 bg-gray-500 text-white px-4 py-2 rounded-lg w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// import { useState, useEffect } from "react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHeader,
//   TableRow,
// } from "../../ui/table";

// import Badge from "../../ui/badge/Badge";
// import axios from "axios";
// import { users } from "../../../utils/apis";

// interface Order {
//   id: number;
//   user: {
//     image: string;
//     name: string;
//     role: string;
//   };
//   Email: string;
//   phonenumber: string;
//   status: string;
//   Date: string;
// }

// // Define the table data using the interface
// const initialTableData: Order[] = [
//   {
//     id: 1,
//     user: {
//       image: "/images/user/user-17.jpg",
//       name: "Lindsey Curtis",
//       role: "Web Designer",
//     },
//     Email: "lindsey@gmail.com",
//     phonenumber: "986544653",
//     Date: "01 Jan 2025 ",
//     status: "Active",
//   },
//   {
//     id: 2,
//     user: {
//       image: "/images/user/user-18.jpg",
//       name: "Kaiya George",
//       role: "Project Manager",
//     },
//     Email: "kaiya2gmail.com",
//     phonenumber: "986544653",
//     Date: "22 Feb 2024",
//     status: "Pending",
//   },
//   {
//     id: 3,
//     user: {
//       image: "/images/user/user-17.jpg",
//       name: "Zain Geidt",
//       role: "Content Writing",
//     },
//     Email: "Zain@gmail.com",
//     phonenumber: "986544653",
//     Date: "12 March 2024",
//     status: "Active",
//   },
//   {
//     id: 4,
//     user: {
//       image: "/images/user/user-20.jpg",
//       name: "Abram Schleifer",
//       role: "Digital Marketer",
//     },
//     Email: "Abram@gmail.com",
//     phonenumber: "986544653",
//     Date: "22 Feb 2025",
//     status: "Cancel",
//   },
//   {
//     id: 5,
//     user: {
//       image: "/images/user/user-21.jpg",
//       name: "Carla George",
//       role: "Front-end Developer",
//     },
//     Email: "Carla@gmail.com",
//     phonenumber: "986544653",
//     Date: "31 March 2025",
//     status: "Active",
//   },
// ];

// export default function BasicTableOne() {
//   // const [tableData, setTableData] = useState<Order[]>(initialTableData);
//   const [tableData, setTableData] = useState<Order[]>([]);

//   //  useEffect(() => {

//   //   const handleAllUser = async () =>{
//   //     try{
//   //       const response = await users();
//   //       console.log(response.data.payload ,"users=-=-=-=users-=-=-=users0=-=-=-=");
//   //       //setTableData(response.data.payload);

//   //     }catch(error){
//   //       console.log(error, "=-=-=-=-=-=-=-=-=-=-=-");
//   //     }

//   //   }

//   //   handleAllUser()

//   //   }, [])

//   useEffect(() => {
//     const handleAllUser = async () => {
//       try {
//         const response = await users(); // assume response.data.payload is the user array
//         const apiData = response.data.payload;

//         console.log(apiData , "-=-=-=-=-=-=-=-");
//         const formattedData: Order[] = apiData.map(
//           (user: any, index: number) => ({
//             id: index + 1,
//             user: {
//               image: "/images/user/default.jpg", // replace with actual image URL if available
//               name: `${user.name} ${user.surname || ""}`,
//               role: user.userWorkProfile?.des || "N/A",
//             },
//             Email: user.email,
//             phonenumber: user.phoneNumber || "N/A",
//             Date: user.profile === "COMPLETED" ? "Completed" : "Pending",
//             status: user.profile === "COMPLETED" ? "Provider" : "User",
//           })
//         );

//         setTableData(formattedData);
//       } catch (error) {
//         console.log(error, "Error fetching users");
//       }
//     };

//     handleAllUser();
//   }, []);

//   const handleDelete = (id: number) => {
//     // Filter out the order with the given ID
//     const updatedData = tableData.filter((order) => order.id !== id);
//     setTableData(updatedData);
//   };

//   return (
//     <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
//       <div className="max-w-full overflow-x-auto">
//         <Table>
//           {/* Table Header */}
//           <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
//             <TableRow>
//               <TableCell
//                 isHeader
//                 className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
//               >
//                 User
//               </TableCell>
//               <TableCell
//                 isHeader
//                 className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
//               >
//                 Email
//               </TableCell>
//               <TableCell
//                 isHeader
//                 className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
//               >
//                 Phone Number
//               </TableCell>
//               <TableCell
//                 isHeader
//                 className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
//               >
//                 Role
//               </TableCell>
//               <TableCell
//                 isHeader
//                 className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
//               >
//                 Document Verification
//               </TableCell>
//               <TableCell
//                 isHeader
//                 className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
//               >
//                 Actions
//               </TableCell>
//               {/* <TableCell
//                 isHeader
//                 className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
//               >
//                 Actions
//               </TableCell> */}
//             </TableRow>
//           </TableHeader>

//           {/* Table Body */}
//           <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
//             {tableData.map((order) => (
//               <TableRow key={order.id}>
//                 <TableCell className="px-5 py-4 sm:px-6 text-start">
//                   <div className="flex items-center gap-3">
//                     <div className="w-10 h-10 overflow-hidden rounded-full">
//                       <img
//                         width={40}
//                         height={40}
//                         src={order.user.image}
//                         alt={order.user.name}
//                       />
//                     </div>
//                     <div>
//                       <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
//                         {order.user.name}
//                       </span>
//                       <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
//                         {order.user.role}
//                       </span>
//                     </div>
//                   </div>
//                 </TableCell>
//                 <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
//                   {order.Email}
//                 </TableCell>
//                 <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
//                   <div className="flex -space-x-2">{order.phonenumber}</div>
//                 </TableCell>
//                 <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
//                   <Badge
//                     size="sm"
//                     color={
//                       order.status === "Provider"
//                         ? "success"
//                         : order.status === "User"
//                         ? "warning"
//                         : "error"
//                     }
//                   >
//                     {order.status}
//                   </Badge>
//                 </TableCell>
//                 <TableCell className="px-4 py-3 text-start text-theme-sm"
//                 >
//                   <Badge
//                     size="sm"
//                     color={
//                       order.Date === "Completed"
//                         ? "success"
//                         : order.status === "Pending"
//                         ? "warning"
//                         : "error"
//                     }
//                   >

//                   {order.Date}
//                   </Badge>
//                 </TableCell>
//                 <TableCell className="px-4 py-3 text-start text-theme-sm">
//                   <button
//                     className="text-yellow-600 hover:underline font-semibold"
//                     onClick={() =>
//                       console.log("Viewing document for", order.user.name)
//                     }
//                   >
//                     View Document
//                   </button>
//                 </TableCell>

//                 {/* <TableCell className="px-4 py-3 text-start">
//                   <button
//                     onClick={() => handleDelete(order.id)}
//                     className="text-red-500 hover:text-red-700"
//                   >
//                     Delete
//                   </button>
//                 </TableCell> */}
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </div>
//     </div>
//   );
// }
