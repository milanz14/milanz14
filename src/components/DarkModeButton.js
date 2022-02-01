import React from "react";
import { Flex, IconButton } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import { FaSun, FaMoon } from "react-icons/fa";

const DarkModeButton = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";

    return (
        <Flex w="100%">
            <IconButton
                aria-label="toggle-dark-mode"
                ml={8}
                icon={isDark ? <FaSun /> : <FaMoon />}
                isRound="true"
                onClick={toggleColorMode}
            ></IconButton>
        </Flex>
    );
};

export default DarkModeButton;
