import { useFavouriteStore } from "../store/useFavouriteStore";

function UserCard({ user, onDetails }) {
  const favourites = useFavouriteStore((state) => state.favourites);
  const addFavourite = useFavouriteStore((state) => state.addFavourite);
  const removeFavourite = useFavouriteStore((state) => state.removeFavourite);

  const isFavourite = favourites.some((u) => u.id === user.id);

  const handleFavourite = () => {
    if (isFavourite) {
      removeFavourite(user.id);
    } else {
      addFavourite(user);
    }
  }; // ← handleFavourite এখানে শেষ

  return (
    <div className="bg-white rounded-xl shadow p-5 flex flex-col gap-3 hover:shadow-lg transition">
      <div>
        <h2 className="text-lg font-semibold text-gray-800">{user.name}</h2>
        <p className="text-sm text-gray-600 break-all">{user.email}</p>
        <p className="text-sm text-gray-600">{user.phone}</p>
      </div>

      <div className="flex gap-2 mt-auto">
        <button
          onClick={() => onDetails(user)}
          className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Details
        </button>

        <button
          onClick={handleFavourite}
          className={`flex-1 py-2 rounded-lg border transition ${
            isFavourite
              ? "bg-red-500 text-white border-red-500 hover:bg-red-600"
              : "bg-white text-red-500 border-red-500 hover:bg-red-50"
          }`}
        >
          {isFavourite ? "♥ Remove" : "♡ Favourite"}
        </button>
      </div>
    </div>
  );
} // ← UserCard function এখানে শেষ

export default UserCard;