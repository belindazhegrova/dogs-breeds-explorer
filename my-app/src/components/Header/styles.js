import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => {
  return {
    header: {
      display: "flex",
      width: "120px",
    },
    icon_header: {
      marginTop: "15px",
    },
    title_header: {
      color: "#06424b",
      marginTop: "15px",
      marginLeft: "3px",
      fontSize: "22px",

      lineHeight: 1,
      fontWeight: 600,
      fontFamily: "LTProBold !important",
    },
  };
});
