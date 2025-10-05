import { useEffect, useState } from "react";
import Cookies from "js-cookie";

function getUserFromCookies() {
  const userStr = Cookies.get("user");
  try {
    return userStr ? JSON.parse(userStr) : null;
  } catch (e) {
    return null;
  }
}

export default function UserMetaCard() {
  const [user, setUser] = useState(getUserFromCookies());

  useEffect(() => {
    const interval = setInterval(() => {
      const currentUser = getUserFromCookies();
      setUser(currentUser);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-md dark:border-gray-800 dark:bg-gray-900 text-center">
      <div className="w-32 h-32 mx-auto mb-5 rounded-full overflow-hidden border-4 border-gray-100 dark:border-gray-700 shadow-lg">
        <img
          src={user?.avatar || "/images/default-avatar.jpg"}
          alt="User Avatar"
          className="object-cover w-full h-full"
        />
      </div>
      <h4 className="text-2xl font-semibold text-gray-800 dark:text-white">
        {user?.name || "Guest User"}
      </h4>
      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        {user?.email || "guest@example.com"}
      </p>
    </div>
  );
}
