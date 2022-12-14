import { ThemeProvider } from "styled-components";

import React from "react";
import ReactDOM from "react-dom/client";
import { theme } from "./theme";
import { RouterProvider } from "react-router-dom";
import router from "./Router";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";

const GlobalStyle = createGlobalStyle`
  ${reset}
  *{
    box-sizing: border-box;
  }
  body{
    color:${(props) => props.theme.white.darker};
    background-color:black;
  }
`;

const client = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={client}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <RouterProvider router={router} />
        </ThemeProvider>
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>
);
