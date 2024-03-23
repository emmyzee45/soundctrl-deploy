import { m } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
// @mui
import { styled } from "@mui/material/styles";
import { Icon } from "@iconify/react";
import { Typography, Stack, TextField, InputAdornment, Box, Paper, InputBase } from "@mui/material";
import { SetStateAction } from "react";
import { Dispatch } from "@reduxjs/toolkit";

const RootStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(25, 10),
  backgroundColor: "rgba(248, 248, 248, 1)",
  margin: "auto",
  overflow: "hidden",
}));

type SearchFormProps = {
  setSearch: React.Dispatch<SetStateAction<string>>;
};

// ----------------------------------------------------------------------

export default function SearchForm({setSearch}: SearchFormProps) {

  return (
    <RootStyle>
      <Typography
        variant='h3'
        sx={{
          color: "common.black",
          width: "16ch",
          textTransform: "uppercase",
          fontWeight: "bold",
          fontFamily: "Dela Gothic One, cursive",
        }}
      >
        Search for your favorite artist
      </Typography>
      <Paper
        elevation={0}
        component='form'
        sx={{
          p: "2px 6px",
          display: "flex",
          alignItems: "center",
          width: "100%",
          position: "relative",
          marginTop: "20px",
        }}
      >
        <Icon icon='bi:search' color='#000' width='20' height='20' />
        <InputBase
          placeholder=''
          onChange={(e) => setSearch(e.target.value)}
          inputProps={{ "aria-label": "Subscribe" }}
          sx={{
            bgcolor: "common.white",
            padding: "6px 15px",
          }}
        />
      </Paper>
    </RootStyle>
  );
}
