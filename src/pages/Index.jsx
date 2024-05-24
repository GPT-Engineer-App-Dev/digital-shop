import { Box, Container, VStack, Text, Image, Flex, Heading, Link, SimpleGrid, Button } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Box as="nav" bg="blue.800" color="white" p={4}>
        <Flex justify="space-between" align="center" maxW="container.lg" mx="auto">
          <Heading size="lg">ElectroShop</Heading>
          <Flex>
            <Link href="#" mx={2}>Home</Link>
            <Link href="#" mx={2}>Products</Link>
            <Link href="#" mx={2}>About Us</Link>
            <Link href="#" mx={2}>Contact</Link>
          </Flex>
        </Flex>
      </Box>

      {/* Hero Section */}
      <Box as="section" bg="gray.100" py={10}>
        <Container maxW="container.lg">
          <Flex direction={{ base: "column", md: "row" }} align="center">
            <Box flex="1" p={5}>
              <Heading size="xl" mb={4}>Discover the Latest in Electronics</Heading>
              <Text fontSize="lg" mb={6}>Find the best deals on the latest gadgets and electronics. Shop now and save big!</Text>
              <Button colorScheme="blue" size="lg">Shop Now</Button>
            </Box>
            <Box flex="1" p={5}>
              <Image src="https://via.placeholder.com/500" alt="Featured Product" borderRadius="md" />
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* Product Listing Section */}
      <Box as="section" py={10}>
        <Container maxW="container.lg">
          <Heading size="lg" mb={6}>Featured Products</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/300" alt="Product 1" />
              <Box p={5}>
                <Heading size="md">Product 1</Heading>
                <Text mt={2}>$299.99</Text>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/300" alt="Product 2" />
              <Box p={5}>
                <Heading size="md">Product 2</Heading>
                <Text mt={2}>$399.99</Text>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/300" alt="Product 3" />
              <Box p={5}>
                <Heading size="md">Product 3</Heading>
                <Text mt={2}>$499.99</Text>
              </Box>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="blue.800" color="white" py={10}>
        <Container maxW="container.lg">
          <Flex justify="space-between" align="center" direction={{ base: "column", md: "row" }}>
            <Text>&copy; 2023 ElectroShop. All rights reserved.</Text>
            <Flex mt={{ base: 4, md: 0 }}>
              <Link href="#" mx={2}><FaFacebook /></Link>
              <Link href="#" mx={2}><FaTwitter /></Link>
              <Link href="#" mx={2}><FaInstagram /></Link>
            </Flex>
          </Flex>
          <Flex justify="center" mt={4}>
            <Link href="#" mx={2}>Terms of Service</Link>
            <Link href="#" mx={2}>Privacy Policy</Link>
            <Link href="#" mx={2}>Contact Us</Link>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;