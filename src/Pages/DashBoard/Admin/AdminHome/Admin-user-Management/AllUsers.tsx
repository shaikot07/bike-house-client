/* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable @typescript-eslint/no-explicit-any */

// import { useBlockUserMutation, useGetAllUsersQuery } from "../../../../../redux/features/admin/userManagement.api";
// import { toast } from "sonner";

// const AllUsers = () => {
//   const { data, error, isLoading } = useGetAllUsersQuery(undefined);
//   const [ blockUser]=useBlockUserMutation()
//   const users = data?.data || [];
//   console.log(users);
 

//   //  handler block
//   const handleBlockUser = async (userId: string) => {
//     const toastId = "blockuses";
//     try {
//       console.log("Blocking user with ID:", userId);
//       const res = await blockUser({ userId }).unwrap();
//       toast.success(`${res.message}`, { id: toastId, duration: 2000 });
//     } catch (err:any) {
//       toast.error(err.data.message , { id: toastId, duration: 2000 })
//     }
//   }

//   return (
//     <div>
//       <h1 className="text-3xl p-4 text-center">All User Management</h1>

//       <div className="text-gray-900 bg-gray-200 px-3 py-4 flex justify-center">
//         {isLoading ? (
//           <p className="text-xl">Loading users...</p>
//         ) : error ? (
//           <p className="text-xl text-red-500">Failed to load users</p>
//         ) : users && users.length > 0 ? (
//           <table className="w-full text-md bg-white shadow-md rounded mb-4">
//             <thead>
//               <tr className="border-b bg-gray-300">
//                 <th className="text-left p-3 px-5">Name</th>
//                 <th className="text-left p-3 px-5">Email</th>
//                 <th className="text-left p-3 px-5">Role</th>
//                 <th className="p-3 px-5 text-right">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map((user:any) => (
//                 <tr key={user._id} className="border-b hover:bg-orange-100 bg-gray-100">
//                   <td className="p-3 px-5">{user.name}</td>
//                   <td className="p-3 px-5">{user.email}</td>
//                   <td className="p-3 px-5">{user.role}</td>
//                   <td className="p-3 px-5 flex justify-end gap-2">
                    
//                     <button
//                       onClick={() => handleBlockUser(user._id)}
//                       className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-3 rounded focus:outline-none"
//                     >
//                       Block
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) : (
//           <p className="text-xl text-gray-600">No users found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AllUsers;

// -------  use filter and pagination for updated time ------- 
import { useState, useMemo } from "react";
import { useBlockUserMutation, useGetAllUsersQuery } from "../../../../../redux/features/admin/userManagement.api";
import { toast } from "sonner";

const USERS_PER_PAGE = 5;

const AllUsers = () => {
  const { data, error, isLoading } = useGetAllUsersQuery(undefined);
  const [blockUser] = useBlockUserMutation();
  const [filter, setFilter] = useState<"all" | "new" | "old">("all");
  const [currentPage, setCurrentPage] = useState(1);

  const users = useMemo(() => {
    if (!data?.data) return [];

    const sortedUsers = [...data.data].sort(
      (a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

    if (filter === "new") {
      return sortedUsers.slice(0, 10);
    } else if (filter === "old") {
      return sortedUsers.slice(-10);
    }

    return sortedUsers;
  }, [data, filter]);

  const totalPages = Math.ceil(users.length / USERS_PER_PAGE);
  const paginatedUsers = users.slice((currentPage - 1) * USERS_PER_PAGE, currentPage * USERS_PER_PAGE);

  const handleBlockUser = async (userId: string) => {
    const toastId = "blockusers";
    try {
      const res = await blockUser({ userId }).unwrap();
      toast.success(`${res.message}`, { id: toastId, duration: 2000 });
    } catch (err: any) {
      toast.error(err.data.message, { id: toastId, duration: 2000 });
    }
  };

  const handleFilterChange = (type: "all" | "new" | "old") => {
    setFilter(type);
    setCurrentPage(1); // Reset page when filter changes
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <div>
      <h1 className="text-3xl p-4 text-center">All User Management</h1>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 my-4">
        {["all", "new", "old"].map((type) => (
          <button
            key={type}
            className={`py-2 px-4 rounded ${filter === type ? "bg-[#F2355F] text-white" : "bg-[#0F172B] text-white"} hover:[#0F172B]`}
            onClick={() => handleFilterChange(type as "all" | "new" | "old")}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)} Users
          </button>
        ))}
      </div>

      <div className="text-gray-900 bg-gray-200 px-3 py-4 flex justify-center">
        {isLoading ? (
          <p className="text-xl">Loading users...</p>
        ) : error ? (
          <p className="text-xl text-red-500">Failed to load users</p>
        ) : users.length > 0 ? (
          <div className="w-full">
            <table className="w-full text-md bg-white shadow-md rounded mb-4">
              <thead>
                <tr className="border-b bg-gray-300">
                  <th className="text-left p-3 px-5">Name</th>
                  <th className="text-left p-3 px-5">Email</th>
                  <th className="text-left p-3 px-5">Role</th>
                  <th className="p-3 px-5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {paginatedUsers.map((user: any) => (
                  <tr key={user._id} className="border-b hover:bg-orange-100 bg-gray-100">
                    <td className="p-3 px-5">{user.name}</td>
                    <td className="p-3 px-5">{user.email}</td>
                    <td className="p-3 px-5">{user.role}</td>
                    <td className="p-3 px-5 flex justify-end gap-2">
                      <button
                        onClick={() => handleBlockUser(user._id)}
                        className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-3 rounded"
                      >
                        Block
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="flex justify-center mt-4 gap-4">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded ${currentPage === 1 ? "bg-gray-300 text-gray-500" : "bg-[#F2355F] text-white hover:bg-[#F2355F]"}`}
              >
                Previous
              </button>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded ${currentPage === totalPages ? "bg-gray-300 text-gray-500" : "bg-[#F2355F] text-white hover:bg-[#F2355F]"}`}
              >
                Next
              </button>
            </div>
          </div>
        ) : (
          <p className="text-xl text-gray-600">No users found.</p>
        )}
      </div>
    </div>
  );
};

export default AllUsers;
