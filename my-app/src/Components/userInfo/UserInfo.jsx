import "./UserInfo.scss";
import Counter from "../Counter/Counter";

const UserInfo = (props) => {
  const { name, role } = props;

  return (
    <div>
       <p>{name}</p>
       <p>{role}</p>
       <Counter/>
     </div>
  );
};

export default UserInfo;
