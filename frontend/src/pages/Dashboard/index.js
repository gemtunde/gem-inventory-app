import React from "react";
import useRedirectLogOutUser from "../../customHook/useRedirectLogOutUser";

const Dashboard = () => {
  useRedirectLogOutUser("/login");
  return <div>Dashboard</div>;
};

export default Dashboard;
