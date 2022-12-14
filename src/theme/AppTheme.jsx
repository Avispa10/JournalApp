import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { PurpleTheme } from "./PurpleTheme";

export const AppTheme = (props) => {
  return (
    <ThemeProvider theme={PurpleTheme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
};
