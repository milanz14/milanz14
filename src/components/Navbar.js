import React from "react";
import DarkModeButton from "./DarkModeButton";
import { NavLink, useNavigate } from "react-router-dom";
import { Box, Text, Button } from "@chakra-ui/react";
import "../styles/Navbar.css";

const Navbar = () => {
    return (
        <header>
            <Box
                d="flex"
                align-items="center"
                justifyContent="space-around"
                ml={6}
                mr={6}
            >
                <Box my={5}>
                    <NavLink
                        to="/"
                        className={(navData) =>
                            navData.isActive ? "active" : ""
                        }
                    >
                        <Button variant="link">
                            {" "}
                            <Text>
                                <i className="fas fa-home"></i>&ensp; HOME
                            </Text>
                        </Button>
                    </NavLink>
                </Box>
                <Box my={5}>
                    <NavLink
                        to="/about"
                        className={(navData) =>
                            navData.isActive ? "active" : ""
                        }
                    >
                        <Button variant="link">
                            {" "}
                            <Text>
                                <i className="fas fa-address-card"></i>&ensp;
                                ABOUT
                            </Text>
                        </Button>
                    </NavLink>
                </Box>
                <Box my={5}>
                    <NavLink
                        to="/projects"
                        className={(navData) =>
                            navData.isActive ? "active" : ""
                        }
                    >
                        <Button variant="link">
                            {" "}
                            <Text>
                                <i className="fas fa-tasks"></i>&ensp; PROJECTS
                            </Text>
                        </Button>
                    </NavLink>
                </Box>
                <Box my={5}>
                    <NavLink
                        to="/contact"
                        className={(navData) =>
                            navData.isActive ? "active" : ""
                        }
                    >
                        <Button variant="link">
                            {" "}
                            <Text>
                                <i className="fas fa-envelope"></i>&ensp;
                                CONTACT
                            </Text>
                        </Button>
                    </NavLink>
                </Box>
            </Box>
        </header>
    );
};

export default Navbar;
