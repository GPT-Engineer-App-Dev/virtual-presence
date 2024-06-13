import { Container, Text, VStack, Box, Heading, Button, Image, Flex } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>Welcome to My Personal Website</Heading>
          <Text fontSize="lg">I'm a web developer specializing in creating beautiful and functional websites.</Text>
        </Box>
        <Image borderRadius="full" boxSize="150px" src="/path-to-your-image.jpg" alt="Profile Picture" />
        <Flex justifyContent="center" gap={4}>
          <Button as="a" href="https://github.com/your-profile" target="_blank" leftIcon={<FaGithub />} colorScheme="teal" variant="outline">GitHub</Button>
          <Button as="a" href="https://linkedin.com/in/your-profile" target="_blank" leftIcon={<FaLinkedin />} colorScheme="teal" variant="outline">LinkedIn</Button>
          <Button as="a" href="https://twitter.com/your-profile" target="_blank" leftIcon={<FaTwitter />} colorScheme="teal" variant="outline">Twitter</Button>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;