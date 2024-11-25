import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const PublicRoutes = () => {
  const [isUserAuthentic, setIsUserAuthentic] = useState(false);
  const token = localStorage.getItem("authToken");
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      setIsUserAuthentic(true);
    }
  }, [token, navigate]);

  return isUserAuthentic ? navigate("/view") : <Outlet />;
};

export default PublicRoutes;
