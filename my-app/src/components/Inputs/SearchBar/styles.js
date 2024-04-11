import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => {
  return {
    search_input: {
      borderRadius: "8px !important",
      backgroundColor: "#FFFFFF",
      width: "380px",
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#fff !important",
        borderWidth: "2px",
        "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderWidth: "2px",
        },
      },
    },
  };
});
