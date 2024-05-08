"use client";

import { store } from "@/store";
import { ThemeProvider } from "@mui/material";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import theme from "@/components/theme";

const AppProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <SessionProvider>{children}</SessionProvider>
      </Provider>
    </ThemeProvider>
  );
};

export default AppProvider;
