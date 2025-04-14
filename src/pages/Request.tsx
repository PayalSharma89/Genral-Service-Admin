import PageBreadcrumb from "../components/common/PageBreadCrumb";
import PageMeta from "../components/common/PageMeta";

const requests = [
  {
    requestId: "1ee96daf-c035-4067-ae80-273b989fb679",
    title: "Check 1",
    description: "Shh",
    location: "Sector 16 C, Dwarka, New Delhi, Delhi, 110078, India",
    status: "Pending",
    city: "Delhi",
    service: { name: "Doctor" },
    postulations: "false",
    images: ["1743490822262_0.png"],
    user: {
      email: "rajputabhishek1215225@gmail.com",
      firstName: "ABHISHEK",
      fullName: "ABHISHEK THAKUR",
      image: "ACg8ocKFQ9mCz1ianEBqP-w5weeSFNawQiMpxTp6gyOYdxs1rsAVaq6G=s96-c",
      lastName: "THAKUR",
      phone: "54554",
    },
    userId: "7404a93d-536a-4839-b6f1-23bbe0a2c0fe",
  },
  {
    requestId: "2d8e9d4f-bad8-47fe-bf7f-e9d13edcf85a",
    title: "Request 2",
    description: "Please assist with consultation",
    location: "Sector 20, Dwarka, New Delhi, Delhi, 110077, India",
    status: "Completed",
    city: "Delhi",
    service: { name: "Consultation" },
    postulations: "true",
    images: ["1743490822262_1.png"],
    user: {
      email: "johndoe@example.com",
      firstName: "JOHN",
      fullName: "JOHN DOE",
      image: "https://example.com/johndoe.jpg",
      lastName: "DOE",
      phone: "98765",
    },
    userId: "9dbe273d-d5f6-41b7-8bb4-8b219a896b6a",
  },
  {
    requestId: "3f8b9c7a-a736-4f26-ae6b-bd54f6a7cd90",
    title: "Request 3",
    description: "Looking for an appointment with a specialist",
    location: "Sector 15, Rohini, New Delhi, Delhi, 110085, India",
    status: "Pending",
    city: "Delhi",
    service: { name: "Specialist" },
    postulations: "true",
    images: ["1743490822262_2.png"],
    user: {
      email: "janedoe@example.com",
      firstName: "JANE",
      fullName: "JANE DOE",
      image: "https://example.com/janedoe.jpg",
      lastName: "DOE",
      phone: "45321",
    },
    userId: "c1251c39-4f7d-46f2-9ff6-d1e9a8a9e6d7",
  },
  {
    requestId: "4c2fa5f7-e4c4-45cd-b9ac-c0f56b8f812b",
    title: "Request 4",
    description: "Medical checkup request",
    location: "Sector 12, Dwarka, New Delhi, Delhi, 110078, India",
    status: "In Progress",
    city: "Delhi",
    service: { name: "Medical Checkup" },
    postulations: "false",
    images: ["1743490822262_3.png"],
    user: {
      email: "rahulkumar@example.com",
      firstName: "RAHUL",
      fullName: "RAHUL KUMAR",
      image: "https://example.com/rahulkumar.jpg",
      lastName: "KUMAR",
      phone: "23451",
    },
    userId: "bafeb631-02f4-45f4-b12b-9eeb4a2c12ad",
  },
  {
    requestId: "5d7a8a99-d399-4a8a-b038-02ccefa760b8",
    title: "Request 5",
    description: "Seeking a follow-up consultation",
    location: "Sector 18, Vasant Kunj, New Delhi, Delhi, 110070, India",
    status: "Pending",
    city: "Delhi",
    service: { name: "Follow-up" },
    postulations: "true",
    images: ["1743490822262_4.png"],
    user: {
      email: "pavansharma@example.com",
      firstName: "PAVAN",
      fullName: "PAVAN SHARMA",
      image: "https://example.com/pavansharma.jpg",
      lastName: "SHARMA",
      phone: "67890",
    },
    userId: "67fc7c55-dca9-4965-81f4-5c229e74c8cd",
  },
];

export default function RequestList() {
  return (
    <div>
      <PageMeta title="Woqqy" description="Woqqy Admin Panel - List" />
      <PageBreadcrumb pageTitle="Manage Requests List" />
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <div className="mx-auto w-full max-w-[1300px]">
          <h3 className="mb-4 font-semibold text-gray-800 text-theme-xl dark:text-white/90 sm:text-2xl">
            Requests
          </h3>

          <p className="text-sm text-gray-500 dark:text-gray-400 sm:text-base mb-4">
            Below is the list of Requests with their details. You can manage
            their status, contact info, and more.
          </p>

          {/* Request Table */}
          <div className="overflow-x-auto rounded-lg shadow-md">
            <table className="w-full table-auto text-left">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="py-3 px-4 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Title
                  </th>
                  <th className="py-3 px-4 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Description
                  </th>
                  <th className="py-3 px-4 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Location
                  </th>
                  <th className="py-3 px-4 text-sm font-medium text-gray-700 dark:text-gray-300">
                    City
                  </th>
                  <th className="py-3 px-4 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Service
                  </th>
                  <th className="py-3 px-4 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Status
                  </th>
                  <th className="py-3 px-4 text-sm font-medium text-gray-700 dark:text-gray-300">
                    User Name
                  </th>
                  <th className="py-3 px-4 text-sm font-medium text-gray-700 dark:text-gray-300">
                    User Email
                  </th>
                  <th className="py-3 px-4 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {requests.map((request) => (
                  <tr
                    key={request.requestId}
                    className="border-t border-gray-200 dark:border-gray-700"
                  >
                    <td className="py-3 px-4 text-sm font-medium text-gray-800 dark:text-white">
                      {request.title}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-500 dark:text-gray-400">
                      {request.description}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-500 dark:text-gray-400">
                      {request.location}
                    </td>
                    <td className="py-3 px-4 text-sm font-medium text-gray-800 dark:text-white">
                      {request.city}
                    </td>
                    <td className="py-3 px-4 text-sm font-medium text-gray-800 dark:text-white">
                      {request.service.name}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-500 dark:text-gray-400">
                      {request.status}
                    </td>
                    <td className="py-3 px-4 text-sm font-medium text-gray-800 dark:text-white">
                      {request.user.fullName}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-500 dark:text-gray-400">
                      {request.user.email}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-500 dark:text-gray-400">
                      {/* Actions */}
                      <button className="ml-2 px-3 py-1 text-xs text-red-600 bg-red-100 rounded-md hover:bg-red-200">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
