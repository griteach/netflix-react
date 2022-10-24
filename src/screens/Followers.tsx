import { useOutletContext, useParams } from "react-router-dom";

interface IFollowersContext {
  nameOfMyUser: string;
}

function Followers() {
  const { nameOfMyUser } = useOutletContext<IFollowersContext>();

  return (
    <div>
      <h1>Followers</h1>
      <p>{nameOfMyUser}의 프로필입니다.</p>
    </div>
  );
}

export default Followers;
