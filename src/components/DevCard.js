import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import milanPic from "../assets/milan.avif";
import "../styles/DevCard.css";

const DevCard = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/about");
    };

    return (
        <div class="devCard">
            <Center py={6}>
                <Box
                    maxW={"270px"}
                    w={"full"}
                    bg={useColorModeValue("white", "gray.800")}
                    boxShadow={"2xl"}
                    rounded={"md"}
                    overflow={"hidden"}
                >
                    <Image
                        h={"120px"}
                        w={"full"}
                        src={
                            "https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                        }
                        objectFit={"cover"}
                    />
                    <Flex justify={"center"} mt={-12}>
                        <Avatar
                            size={"xl"}
                            src={milanPic}
                            alt={"Author"}
                            css={{
                                border: "2px solid white",
                            }}
                        />
                    </Flex>

                    <Box p={6}>
                        <Stack spacing={0} align={"center"} mb={5}>
                            <Heading
                                fontSize={"2xl"}
                                fontWeight={500}
                                fontFamily={"body"}
                            >
                                I'm Milan.
                            </Heading>
                            <Text color={"gray.500"}>
                                I'm a Full Stack Developer
                            </Text>
                        </Stack>

                        <Button
                            w={"full"}
                            mt={8}
                            bg={useColorModeValue("#151f21", "gray.900")}
                            color={"white"}
                            rounded={"md"}
                            _hover={{
                                transform: "translateY(-2px)",
                                boxShadow: "lg",
                            }}
                            onClick={handleNavigate}
                        >
                            Learn More
                        </Button>
                    </Box>
                </Box>
            </Center>
        </div>
    );
};

export default DevCard;
