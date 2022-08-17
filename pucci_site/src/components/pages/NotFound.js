import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/pages/NotFound.css";

const NotFound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/home");
    }, 1000);
  }, [navigate]);
  return <>404 Not Found</>;
};

export default NotFound;
