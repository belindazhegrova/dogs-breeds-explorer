import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => {
  return {
    dog_details_header: {
      padding: "10px 40px 0px 40px",
      [theme.breakpoints.down("sm")]: {
        padding: "15px 15px 10px 15px !important",
      },
    },
    dog_details_button: {
      display: "flex",
      alignItems: "center",
    },
    dog_details_inner_header: {
      display: "flex",
      justifyContent: "flex-end",
    },
    dog_details_image: {
      height: 600,
      opacity: 0.9,
      borderRadius: "30px",
      [theme.breakpoints.down("md")]: {
        borderRadius: "0px",
        height: 450,
        objectFit: "cover",
      },
    },
    dog_details_container: {
      padding: "10px 40px 10px 40px",
      display: "flex",
      alignItems: "center",
      [theme.breakpoints.down("md")]: {
        padding: "0px",
      },
    },
    data_container: {
      padding: "10px 40px 20px 40px",
      [theme.breakpoints.down("sm")]: {
        padding: "10px",
      },
    },
    dog_name: {
      color: "#06424b",
      fontSize: "45px",
      fontWeight: 600,
      fontFamily: "LTProBold !important",
    },
    back_button: {
      backgroundColor: "#00000014",
      color: "#000000de",
      borderRadius: "8px",
      textTransform: "capitalize",
      "& .MuiButton-startIcon": {
        marginRight: "0px",
        marginLeft: "0px",
      },
      "&:hover": {
        backgroundColor: "#00000014",
      },
    },
    label: {
      color: "#06424b",
      fontSize: "18px",
      fontWeight: 600,
      fontFamily: "LTProBold !important",
    },
    custom_data: {
      fontWeight: 300,
      fontFamily: "LTProLight !important",
    },
    custom_chip: {
      background: "#f0c65e",
      "& .MuiChip-label": {
        color: "#113943 !important",
        fontSize: "16px",
        fontWeight: 300,
        fontFamily: "LTProLight !important",
      },
    },
    dog_desc: {
      color: "#06424b",
      fontWeight: 600,
      fontFamily: "LTProBold !important",
    },
  };
});
