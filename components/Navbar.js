import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import Drawer from "./Sidebar";
import Link from "next/link";
import { DisplaySettings } from "@mui/icons-material";

const Navbar = () => {
  const [value, setValue] = useState();
  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const pages = [
    {
      text: "Home",
      // icon: <SubjectOutlined />,
      path: "/",
    },
    {
      text: "About",
      // icon: <SubjectOutlined color="secondary" />,
      path: "/about",
    },
    {
      text: "Exprience",
      // icon: <AddCircleOutlineOutlined color="secondary" />,
      path: "/exprience",
    },
    {
      text: "Contact",
      // icon: <AddCircleOutlineOutlined color="secondary" />,
      path: "/contact",
    },
  ];

  return (
    <>
      <AppBar sx={{ background: "#063970" }}>
        <Toolbar>
          <Link href="/" style={{ color: "white", textDecoration: "none" }}>
            <Typography sx={{ fontSize: "2rem", paddingLeft: "5%" }}>JAMAN</Typography>
          </Link>
          {isMatch ? (
            <>
              <Drawer />
            </>
          ) : (
            <>
              <Box
                flexWrap="nowrap"
                justifyContent="center"
                sx={{ marginLeft: "auto" }}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tabs>
                  {pages.map((page, index) => (
                    <Link
                      href={page.path}
                      key={index}
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      <Typography sx={{ fontWeight: "light", color: "white", p: "20px" }}>
                        {page.text.toUpperCase()}
                      </Typography>
                    </Link>
                  ))}
                </Tabs>
              </Box>

              <Box flexWrap="nowrap" justifyContent="center" sx={{ marginLeft: "auto" }}>
                <Link href="/login">
                  <Button sx={{ marginLeft: "auto", textDecoration: "none" }} variant="contained">
                    Login
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button sx={{ marginLeft: "20px", textDecoration: "none" }} variant="contained">
                    SignUp
                  </Button>
                </Link>
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
