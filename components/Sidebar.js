import React, { useState } from "react";
import { Drawer, IconButton, List, ListItemIcon, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { AddCircleOutlineOutlined, SubjectOutlined } from "@mui/icons-material";

const Sidebar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const pages = [
    {
      text: "Home",
      icon: <SubjectOutlined />,
      path: "/",
    },
    {
      text: "About",
      icon: <SubjectOutlined  />,
      path: "/about",
    },
    {
      text: "Exprience",
      icon: <AddCircleOutlineOutlined  />,
      path: "/exprience",
    },
    {
      text: "Contact",
      icon: <AddCircleOutlineOutlined  />,
      path: "/contact",
    },
  ];

  return (
    <>
      <Drawer anchor="left" open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          {pages.map((page, index) => (
            <Link
              style={{ textDecoration: "none" }}
              href={`${page.path.toLowerCase()}`}
              key={index}
            >
              <ListItemIcon>{pages.icon}</ListItemIcon>
              <ListItemText sx={{ p: "10px" }}>{page.text.toUpperCase()}</ListItemText>
            </Link>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="white" />
      </IconButton>
    </>
  );
};

export default Sidebar;
