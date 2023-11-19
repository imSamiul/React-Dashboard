import Single from "../../Components/Single/Single";
import { singleUser } from "../../data";

function User() {
  return (
    <div>
      <Single {...singleUser} />
    </div>
  );
}

export default User;
