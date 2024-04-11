import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => {
  return {
    formControl: {
      width: "100%",
      [theme.breakpoints.down("lg")]: {
        width: "100%",
      },
    },
    filter_input: {
      borderRadius: "8px !important",
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#00000014 !important",
        borderWidth: "2px",
        "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderWidth: "2px",
        },
      },
    },
    select: {
      "& .MuiOutlinedInput-input": {
        opacity: "0.5 !important",
      },
    },
    check_box: {
      "&.Mui-checked": {
        color: "#f0c65e",
      },
    },
  };
});
