import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => {
  return {
    button: {
      borderRadius: "8px !important",
      backgroundColor: "#f0c65e !important",
      border: "1px solid #f0c65e !important",
      color: "#605026 !important",
      textTransform: "capitalize !important",
      fontFamily: "LTProBold !important",
      fontWeight: 600,
      "&:hover": {
        backgroundColor: "#f0c65e !important",
        border: "1px solid #f0c65e !important",
      },
    },
  };
});
