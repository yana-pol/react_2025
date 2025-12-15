import "./app.css";

import { UserContextProvider } from "../userContextProvider/userCOntextProvider";
import { ThemeContextProvider } from "../themeContextProvider/themeContextProvider";

import { Layout } from "../layouts/layuout";
import { Outlet } from "react-router";

export const App = () => {
  return (
    <ThemeContextProvider>
      <UserContextProvider>
        <Layout>
          <Outlet />
        </Layout>
      </UserContextProvider>
    </ThemeContextProvider>
  );
};
