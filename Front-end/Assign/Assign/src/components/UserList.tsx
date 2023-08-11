// Import the 'useUserListData' hook from 'UserContext'.
import { useUserListData } from "@/contexts/UserContext";

// Import the 'Link' component from 'next/link' for navigation.
import Link from "next/link";

// Define 'UserList' as a Functional Component.
const UserList = () => {
  // Use 'useUserListData' to fetch user data and loading state.
  const { userList, loading } = useUserListData();

  // Return the JSX to render for this component.
  return (
    <>
      {/* If data is loading, display a loading message. */}
      {loading && (
        <h2 className="pt-3 pb-3 text-center">
          Please wait while we fetch the users....
        </h2>
      )}

      {/* If data is not loading, display the user list. */}
      {!loading && (
        <>
          <h2 className="pt-3 pb-3 text-center">Users</h2>
          <table className="min-w-full divide-y divide-gray-200">
            {/* Table Head */}
            <thead className="bg-gray-50">
              {/* Table Row */}
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Details
                </th>
              </tr>
            </thead>
            {/* Table Body */}
            <tbody className="bg-white divide-y divide-gray-200">
              {/* If userList is available, map over it and render a row for each user. */}
              {userList &&
                userList.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-100">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {user.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {user.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {/* Use 'Link' component for navigation to the user details page. */}
                      <Link href={`/details/${user.id}`} className="underline">
                        Details
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </>
      )}
    </>
  );
};

// Export the 'UserList' component as the default export.
// This allows the component to be imported with the name 'UserList' from this file.
export default UserList;
