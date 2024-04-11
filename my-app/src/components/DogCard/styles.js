import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => {
  return {
    card: {
      width: "100%",
      borderRadius: "10px !important",
      backgroundColor: "#fffaf5",
      boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px !important",
    },
    breedName: {
      fontWeight: 600,
      fontFamily: "LTProBold !important",
      fontSize: "24px",
      minHeight: "80px",
    },

    label: {
      fontWeight: 600,
      fontFamily: "LTProBold !important",
      letterSpacing: "normal",
    },
    innerTitle: {
      opacity: "0.6",
      fontFamily: "LTProRoman !important",
      marginLeft: "4px",
    },
    card_image: {
      height: 300,
      background:
        "linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))",
    },
    card_actions: {
      display: "flex",
      justifyContent: "space-between",
      padding: "16px !important",
    },
  };
});
