import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => {
  return {
    filter_container: {
      padding: "20px",
      background: "#fffaf5",
      marginTop: "20px",
      borderRadius: "8px",
    },
    label_filter: {
      color: "#06424b",
      fontWeight: 600,
      fontFamily: "LTProBold !important",
      mb: 1,
      fontSize: "18px",
    },
    button_containter: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "24px",
    },
    resetButton_container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      marginTop: "24px",
    },
  };
});
