import React from "react";
import UserInfo from "../userInfo/UserInfo";

const Users = (props) => {
  const { users } = props;
  return users.map((user) => {
    return <UserInfo name={user.name} role={user.role} />;
  });
};

export default Users;
