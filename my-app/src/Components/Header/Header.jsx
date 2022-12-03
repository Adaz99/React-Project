import "./Header.scss";
import Counter from "../Counter/Counter";

const Header = (props) => {
  const { name, role } = props;

  return (
    <div>
       <p>{name}</p>
       <p>{role}</p>
      <Counter />
     </div>
  );
};

export default Header;
