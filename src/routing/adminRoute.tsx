import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const AdminRoute = ({ children }: any) => {
  const { user } = useContext(AuthContext);
  const history = useHistory();
  if (user && (user!.role === "ADMIN" || user!.role === "SUPERADMIN")) {
    return children;
  }
  return history.goBack();
};

export default AdminRoute;
