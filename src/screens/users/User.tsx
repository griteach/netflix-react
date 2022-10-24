import { useParams } from "react-router-dom";
import { users } from "../../db";

function User() {
  const { userId } = useParams();

  return <h1>{userId}</h1>;
}

export default User;
