import UserCard  from "./UserCard";

function UserList({users, onDetails}){

      return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {users.map((user) => (
        <UserCard key={user.id} user={user} onDetails={onDetails} />
      ))}
    </div>
  );
}

export default UserList;