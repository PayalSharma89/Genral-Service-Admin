import PageBreadcrumb from "../components/common/PageBreadCrumb";
import PageMeta from "../components/common/PageMeta";

const users = [
  {
    id: 1,
    title: "Admin Role Update",
    description: "Updating role of admin in the system.",
    date: "2025-03-30",
    status: "Active",
    contactInfo: "+09 363 398 46",
    reporterId: "R-001",
    reporterName: "John Doe",
    reporterEmail: "johndoe@example.com",
  },
  {
    id: 2,
    title: "User Login Issue",
    description: "Issue with login for the user account.",
    date: "2025-03-29",
    status: "Resolved",
    contactInfo: "+09 362 398 47",
    reporterId: "R-002",
    reporterName: "Jane Smith",
    reporterEmail: "janesmith@example.com",
  },
  {
    id: 3,
    title: "Password Reset Request",
    description: "Request for password reset.",
    date: "2025-03-28",
    status: "Pending",
    contactInfo: "+09 361 398 48",
    reporterId: "R-003",
    reporterName: "Bob Johnson",
    reporterEmail: "bobjohnson@example.com",
  },
];

export default function UsersList() {
  return (
    <div>
      <PageMeta title="Woqqy" description="Woqqy Admin Panel - List" />
      <PageBreadcrumb pageTitle="Manage Lost Object List" />
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <div className="mx-auto w-full max-w-[1300px]">
          <h3 className="mb-4 font-semibold text-gray-800 text-theme-xl dark:text-white/90 sm:text-2xl">
            Objects{" "}
          </h3>

          <p className="text-sm text-gray-500 dark:text-gray-400 sm:text-base mb-4">
            Below is the list of Lost Objects with their details. You can manage
            their status, contact info, and more.
          </p>

          {/* User Table */}
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
                    Date
                  </th>
                  <th className="py-3 px-4 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Status
                  </th>
                  <th className="py-3 px-4 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Contact Info
                  </th>
                  <th className="py-3 px-4 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Reporter ID
                  </th>
                  <th className="py-3 px-4 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Reporter Name
                  </th>
                  <th className="py-3 px-4 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Reporter Email
                  </th>
                  <th className="py-3 px-4 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr
                    key={user.id}
                    className="border-t border-gray-200 dark:border-gray-700"
                  >
                    <td className="py-3 px-4 text-sm font-medium text-gray-800 dark:text-white">
                      {user.title}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-500 dark:text-gray-400">
                      {user.description}
                    </td>
                    <td className="py-3 px-4 text-sm font-medium text-gray-800 dark:text-white">
                      {user.date}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-500 dark:text-gray-400">
                      {user.status}
                    </td>
                    <td className="py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-300">
                      {user.contactInfo}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-500 dark:text-gray-400">
                      {user.reporterId}
                    </td>
                    <td className="py-3 px-4 text-sm font-medium text-gray-800 dark:text-white">
                      {user.reporterName}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-500 dark:text-gray-400">
                      {user.reporterEmail}
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
