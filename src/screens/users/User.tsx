import { Link, Outlet, useParams } from "react-router-dom";
import { users } from "../../db";

function User() {
  const { userId } = useParams();

  return (
    <div>
      <h1>{userId}</h1>
      <Link to={`followers`}>See followers</Link>
      <Outlet
        context={{
          nameOfMyUser: users[Number(userId) - 1].name,
        }}
      />
    </div>
  );
}

export default User;
