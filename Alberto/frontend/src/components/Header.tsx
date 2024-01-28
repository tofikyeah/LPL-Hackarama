import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Logo from "./shared/Logo";
import { useAuth } from "../context/AuthContext";
import NavigationLink from "./shared/NavigationLink";

const Header = () => {
  const auth = useAuth();

  // Define the company colors
  const navyBlue = "#081D4D";
  const orange = "#FF600A";
  const white = "#ffffff";

  return (
    <AppBar
      sx={{
        background: `linear-gradient(to bottom, ${navyBlue} 0%, ${navyBlue} 60%, ${orange} 60%, ${orange} 80%, ${white} 80%, ${white} 100%)`,
        position: "static",
        boxShadow: "none",
        height: "100px", // Adjust the height of the header
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <Logo />

        {/* Navigation Links */}
        <div>
          {auth?.isLoggedIn ? (
            <>
              <NavigationLink
                bg={navyBlue}
                textColor={white}
                to="/"
                text="Logout"
                onClick={auth.logout}
              />
              <NavigationLink
                bg={navyBlue}
                textColor={white}
                to="/chat"
                text="Go To Chat"
              />
            </>
          ) : (
            <>
              <NavigationLink
                bg={navyBlue}
                to="/login"
                text="Login"
                textColor={white}
                // style={{ marginRight: "10px" }}
              />
              <NavigationLink
                bg={navyBlue}
                textColor={white}
                to="/signup"
                text="Signup"
              />
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;




