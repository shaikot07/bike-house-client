import avatar from '../../../assets/av.webp';
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../redux/features/auth/authSlice";
import { useCallback, useEffect, useState } from 'react';
import { FaPencil } from 'react-icons/fa6';
import ProfileUpdatedForm from '../../../Component/ProfileUpdatedForm';

interface UserData {
  profileImg?: string;
  name?: string;
  role?: string;
  email?: string;
}

const CustomerProfile = () => {
  const user = useSelector(selectCurrentUser);
  const [updatedUser, setUpdatedUser] = useState<UserData | null>(null);
  console.log(updatedUser, "updatedUser");
  const [open, setOpen] = useState(false);

  const fetchCurrentUserData = useCallback(async () => {
    if (!user?.userId) return;
    try {
      const res = await fetch(
        `https://l-2-assignment-bike-store-server.vercel.app/api/users/${user.userId}/singleUser`
      );
      const result = await res.json();
      setUpdatedUser(result.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }, [user?.userId]);

  const handleCloseModal = () => {
    setOpen(false);
    fetchCurrentUserData();
  };

  useEffect(() => {
    fetchCurrentUserData();
  }, [fetchCurrentUserData]);
  // useEffect(() => {
  //   if (user?.userId) fetchData();
  // }, [user?.userId, fetchData]);

  // const handleCloseModal = () => {
  //   setOpen(false);
  //   if (user?.userId) fetchData();
  // };

  // const displayUser = updatedUser || user;

  
  return (
    <div>
      <main className="profile-page">
        <section className="relative block h-[500px]">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&auto=format&fit=crop&w=2710&q=80')",
            }}
          >
            <span className="w-full h-full absolute opacity-50 bg-black"></span>
          </div>
          <div className="top-auto bottom-0 left-0 right-0 w-full absolute overflow-hidden h-[70px]">
            <svg
              className="absolute bottom-0"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              viewBox="0 0 2560 100"
            >
              <polygon
                className="fill-current text-white"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>

        <section className="relative py-16 bg-blueGray-200 text-black">
          <div className="container mx-auto px-4">
            <div className="relative bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 flex justify-center">
                    <div className="relative -mt-24">
                      <img
                        alt="Profile"
                        src={updatedUser?.profileImg || avatar}
                        className="rounded-full shadow-xl object-cover h-[170px] w-[170px]"
                      />
                      <div className="py-6 mt-32 sm:mt-0 text-center">
                        <button
                          onClick={() => setOpen(true)}
                          className="bg-[#FF6725] text-white hover:bg-black rounded-full px-4 py-2 text-sm font-semibold shadow-md flex items-center gap-2"
                        >
                          <FaPencil size={16} />
                          Edit Profile
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold text-[#FF6725] mb-2">
                    Name: {updatedUser?.name || "N/A"}
                  </h3>
                  <p className="text-sm text-blueGray-400 font-bold uppercase">
                    Role: {updatedUser?.role || "Unknown"}
                  </p>
                  <p className="text-sm text-blueGray-600 mt-2">
                    Email: {updatedUser?.email || ""}
                  </p>
                </div>

                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        This is your profile. You can update your information
                        using the edit button above.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {open && (
          <div className="fixed inset-0 z-50 bg-transparent bg-opacity-40 flex justify-center items-center">
            <div className="bg-white p-6 rounded-xl max-w-lg w-full relative shadow-lg">
              <button
                onClick={handleCloseModal}
                className="absolute top-2 right-2 text-black text-xl font-bold"
              >
                &times;
              </button>
              {user?.userId && <ProfileUpdatedForm updatedUser={updatedUser || {}} userId={user.userId} />}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default CustomerProfile;
