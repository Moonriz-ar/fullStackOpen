import React from "react";
import { useSelector } from "react-redux";
import { selectNotificationMessage } from "../reducers/notificationReducer.js";

const Notification = () => {
  const message = useSelector(selectNotificationMessage);
  const style = {
    border: "solid",
    padding: 10,
    margin: 10,
    borderWidth: 1,
  };

  return <>{message && <div style={style}>{message}</div>}</>;
};

export default Notification;
