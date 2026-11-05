import { useFavouriteStore } from "../store/useFavouriteStore";

function Navbar({ totalUsers }) {
  const favourites = useFavouriteStore((state) => state.favourites);

  return (
    <nav className="bg-blue-600 text-white shadow">
      <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-2">
        <h1 className="text-xl font-bold">User Management</h1>

        <div className="flex gap-4 text-sm sm:text-base">
          <span className="bg-blue-500 px-3 py-1 rounded-full">
            Total Users: {totalUsers}
          </span>
          <span className="bg-blue-500 px-3 py-1 rounded-full">
            Favourites: {favourites.length}
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;