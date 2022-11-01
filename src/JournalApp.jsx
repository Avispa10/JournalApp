import React from "react";
import { AppRouter } from "./router/AppRouter";
import { BrowserRouter } from "react-router-dom";
import { AppTheme } from "./theme/AppTheme";

export const JournalApp = () => {
  return (
    <BrowserRouter>
      <AppTheme>
        <AppRouter />
      </AppTheme>
    </BrowserRouter>
  );
};
