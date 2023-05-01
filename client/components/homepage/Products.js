import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../store/productSlice";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Product from "./SingleProduct";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Products = () => {
  const products = useSelector((state) => state.products.allProducts);
  const dispatch = useDispatch();
  const [value, setValue] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const cartitems = useSelector((state) => state.cart.items);
  const productsPerPage = 10;
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setCurrentPage(1);
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const Top = products.filter((product) => product.category === "Top");
  const Bottom = products.filter((product) => product.category === "Bottom");
  const Dress = products.filter((product) => product.category === "Dress");

  const filteredProducts =
    value === "all"
      ? products
      : value === "TOP"
      ? Top
      : value === "BOTTOM"
      ? Bottom
      : Dress;

  const paginationCount = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <Box width="80%" margin="80px auto">
      <Typography variant="h3" textAlign="center">
        Our Featured <b>Products</b>
      </Typography>
      <Tabs
        textColor="primary"
        indicatorColor="primary"
        value={value}
        onChange={handleChange}
        centered
        sx={{
          m: "25px",
          "& .MuiTabs-flexContainer": {
            flexWrap: "wrap",
          },
        }}
      >
        <Tab label="ALL" value="all" />
        <Tab label="TOP" value="TOP" />
        <Tab label="BOTTOM" value="BOTTOM" />
        <Tab label="DRESS" value="DRESS" />
      </Tabs>
      <Box
        margin="0 auto"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, 300px)"
        justifyContent="space-around"
        rowGap="20px"
        columnGap="1.33%"
      >
        {filteredProducts.slice(startIndex, endIndex).map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </Box>
      <Stack spacing={2} sx={{ justifyContent: "center" }}>
        <Pagination
          count={paginationCount}
          page={currentPage}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
          sx={{ margin: "auto" }}
        />
      </Stack>
    </Box>
  );
};

export default Products;