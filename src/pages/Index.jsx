import { useState } from "react";
import { Box, Container, VStack, Text, Image, Flex, Heading, Link, SimpleGrid, Button, Input, InputGroup, InputRightElement, IconButton, Select, Checkbox, CheckboxGroup, Stack } from "@chakra-ui/react";
import { FaSearch, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", price: 299.99, brand: "Brand A", rating: 4 },
    { id: 2, name: "Product 2", price: 399.99, brand: "Brand B", rating: 5 },
    { id: 3, name: "Product 3", price: 499.99, brand: "Brand A", rating: 3 },
  ]);

  const [filters, setFilters] = useState({
    price: "",
    brand: [],
    rating: "",
  });

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [name]: checked
          ? [...prevFilters[name], value]
          : prevFilters[name].filter((item) => item !== value),
      }));
    } else {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [name]: value,
      }));
    }
  };

  const filteredProducts = products.filter((product) => {
    return (
      (filters.price === "" || product.price <= filters.price) &&
      (filters.brand.length === 0 || filters.brand.includes(product.brand)) &&
      (filters.rating === "" || product.rating >= filters.rating)
    );
  });

  return (
    <Box>
      {/* Navigation Bar */}
      <Box as="nav" bg="blue.800" color="white" p={4}>
        <Flex justify="space-between" align="center" maxW="container.lg" mx="auto">
          <Heading size="lg">ElectroShop</Heading>
          <InputGroup maxW="400px" mx={2}>
            <Input placeholder="Search products..." />
            <InputRightElement>
              <IconButton
                aria-label="Search"
                icon={<FaSearch />}
                onClick={() => console.log("Search clicked")}
              />
            </InputRightElement>
          </InputGroup>
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

      {/* Filter Section */}
      <Box as="section" py={10}>
        <Container maxW="container.lg">
          <Heading size="lg" mb={6}>Filter Products</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Box>
              <Heading size="md" mb={4}>Price</Heading>
              <Select name="price" value={filters.price} onChange={handleFilterChange}>
                <option value="">All</option>
                <option value="300">Up to $300</option>
                <option value="400">Up to $400</option>
                <option value="500">Up to $500</option>
              </Select>
            </Box>
            <Box>
              <Heading size="md" mb={4}>Brand</Heading>
              <CheckboxGroup colorScheme="blue" value={filters.brand}>
                <Stack>
                  <Checkbox name="brand" value="Brand A" onChange={handleFilterChange}>Brand A</Checkbox>
                  <Checkbox name="brand" value="Brand B" onChange={handleFilterChange}>Brand B</Checkbox>
                </Stack>
              </CheckboxGroup>
            </Box>
            <Box>
              <Heading size="md" mb={4}>Rating</Heading>
              <Select name="rating" value={filters.rating} onChange={handleFilterChange}>
                <option value="">All</option>
                <option value="3">3 Stars & Up</option>
                <option value="4">4 Stars & Up</option>
                <option value="5">5 Stars</option>
              </Select>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Product Listing Section */}
      <Box as="section" py={10}>
        <Container maxW="container.lg">
          <Heading size="lg" mb={6}>Featured Products</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            {filteredProducts.map((product) => (
              <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
                <Image src="https://via.placeholder.com/300" alt={product.name} />
                <Box p={5}>
                  <Heading size="md">{product.name}</Heading>
                  <Text mt={2}>${product.price}</Text>
                  <Text mt={2}>Brand: {product.brand}</Text>
                  <Text mt={2}>Rating: {product.rating} Stars</Text>
                </Box>
              </Box>
            ))}
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