import React from "react";
import DarkModeButton from "./DarkModeButton";
import { NavLink, useNavigate } from "react-router-dom";
import { Box, Text, Button } from "@chakra-ui/react";
import "../styles/Navbar.css";

const Navbar = () => {
    const navigate = useNavigate();

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
                    <Button onClick={() => navigate("/")} variant="link">
                        {" "}
                        <Text>
                            <i className="fas fa-home"></i>&ensp; HOME
                        </Text>
                    </Button>
                </Box>
                <Box my={5}>
                    <Button onClick={() => navigate("/about")} variant="link">
                        {" "}
                        <Text>
                            <i className="far fa-address-card"></i>&ensp; ABOUT
                        </Text>
                    </Button>
                </Box>
                <Box my={5}>
                    <Button
                        onClick={() => navigate("/projects")}
                        variant="link"
                    >
                        {" "}
                        <Text>
                            <i className="fas fa-tasks"></i>&ensp; PROJECTS
                        </Text>
                    </Button>
                </Box>
                <Box my={5}>
                    <Button onClick={() => navigate("/contact")} variant="link">
                        {" "}
                        <Text>
                            <i className="far fa-envelope"></i>&ensp; CONTACT
                        </Text>
                    </Button>
                </Box>
            </Box>
        </header>
    );
};

export default Navbar;
