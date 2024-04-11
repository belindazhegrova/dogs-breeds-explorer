import { makeStyles } from "@mui/styles";
import img from "../../assets/images/backgroundImage.png";

export const useStyles = makeStyles((theme) => {
  return {
    background_home: {
      backgroundImage: `url(${img})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right top",
      backgroundSize: "50%",
      [theme.breakpoints.down("sm")]: {
        backgroundSize: "65% !important",
      },
    },

    home: {
      padding: "0px 100px 20px 100px",
      [theme.breakpoints.down("lg")]: {
        padding: "0px 60px",
      },
      [theme.breakpoints.down("md")]: {
        padding: "0px 25px 25px 25px",
      },
      [theme.breakpoints.down("sm")]: {
        padding: "0px 15px 15px 15px",
      },
    },
    icon_header: {
      marginTop: "15px",
    },
    title_header: {
      color: "#06424b",
      marginTop: "15px",
      marginLeft: "3px",
      fontSize: "22px",
      width: "100px",
      lineHeight: 1,
      fontWeight: 600,
      fontFamily: "LTProBold !important",
    },
    searchbar_container: {
      display: "flex",
      alignItems: "center",
      marginTop: "20px",
    },
    searchbar_inner_title: {
      color: "#06424b",
      fontSize: "34px",
      fontWeight: 600,
      fontFamily: "LTProBold !important",
      [theme.breakpoints.between("md", "sm")]: {
        lineHeight: 1,
      },
    },
    searchbar_inner_input: {
      display: "flex",
      justifyContent: "flex-end",
      [theme.breakpoints.down("sm")]: {
        justifyContent: "flex-start",
      },
    },
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
      justifyContent: "flex-end",
      alignItems: "center",
      marginTop: "24px",
    },
    pagination_container: {
      display: "flex",
      alignItems: "center",
      marginTop: "35px",
      "& .MuiPaginationItem-root": {
        margin: "0px 2px !important",
        [theme.breakpoints.down("(max-width:280px)")]: {
          backgroundColor: "red",
        },
      },
    },

    noFound: {
      display: "flex",
      justifyContent: "center",
      minHeight: "400px",
      alignItems: "center",
    },
    noFound_title: {
      color: "#06424b",
      fontWeight: 700,
      fontFamily: "LTProBold !important",
      fontSize: "20px",
    },
  };
});
