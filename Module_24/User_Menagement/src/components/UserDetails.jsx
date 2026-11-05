function UserDetails({ user, onClose }) {
    if(!user) return null;
  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-lg w-full max-w-md max-h-[90vh] overflow-y-auto p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
            <p className="text-sm text-gray-500">@{user.username}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black text-2xl leading-none"
          >
            &times;
          </button>
        </div>

        <div className="space-y-4 text-sm text-gray-700">
          <div>
            <h3 className="font-semibold text-gray-900">Contact</h3>
            <p className="break-all">Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">Address</h3>
            <p>
              {user.address.street}, {user.address.suite}
            </p>
            <p>
              {user.address.city} - {user.address.zipcode}
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">Company</h3>
            <p>{user.company.name}</p>
            <p className="italic text-gray-500">{user.company.catchPhrase}</p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default UserDetails;