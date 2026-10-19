"use client";

import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastProvider = () => {
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      closeOnClick={false}
      pauseOnHover
      draggable
      theme="light"
      transition={Bounce}
      style={{ zIndex: 9999 }}
    />
  );
};

export default ToastProvider;
