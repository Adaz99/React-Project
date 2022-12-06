import "./UserInfo.scss";
import Counter from "../Counter/Counter";

const UserInfo = (props) => {
  const { name, role } = props;

  return (
    <div className="ticket__info">
       <p>{name}</p>
       <p>{role}</p>
       <Counter/>
     </div>
  );
};

export default UserInfo;
