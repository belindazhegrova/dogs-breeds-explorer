import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Snackbar, Alert } from "@mui/material";
import { removeNotification } from "../../store/Notification";

const NotificationComponent = () => {
  const dispatch = useDispatch();
  const notifications = useSelector(
    (state) => state.notification.notifications
  );

  const handleClose = () => {
    dispatch(removeNotification());
  };

  return (
    <div>
      {notifications.length > 0 && (
        <Snackbar
          open
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert onClose={handleClose} severity={notifications[0].severity}>
            {notifications[0].message}
          </Alert>
        </Snackbar>
      )}
    </div>
  );
};

export default NotificationComponent;
