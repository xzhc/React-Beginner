import "./user.css";
import user from "./user.json";
import { UserCard } from "./UserCard";
import { UserCardClass } from "./UserCardClass";
function App() {
  return (
    <>
      <UserCard
        name={user.name}
        phoneNumber={user.phoneNumber}
        address={user.address}
        age={user.age}
      />
      <UserCardClass
        name={user.name}
        phoneNumber={user.phoneNumber}
        address={user.address}
        age={user.age}
      />
    </>
  );
}

export default App;
