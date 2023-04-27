import React, { useEffect ,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {fetchProducts } from "../../store/productSlice"
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Product from "./SingleProduct";

const Products = ({currentPage}) => {
    const products = useSelector((state)=> state.products.allProducts);
    const dispatch = useDispatch();
    const [value, setValue] = useState("all");
    const cartitems= useSelector((state) => state.cart.items);
    const productsPerPage = 10;
    const startIndex = (currentPage - 1) * productsPerPage;  
    const endIndex = startIndex + productsPerPage;

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
   
    const Top = products.filter((product) => product.category === "Top");
    const Bottom = products.filter((product) => product.category === "Bottom");
    const Dress = products.filter((product) => product.category === "Dress");

    const filteredProducts =
      value === "all"
        ? products.slice(startIndex, endIndex)
        : value === "TOP"
          ? Top.slice(startIndex, endIndex)
          : value === "BOTTOM"
            ? Bottom.slice(startIndex, endIndex)
            : Dress.slice(startIndex, endIndex);

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
            {filteredProducts.map((product) => (
                    <Product product={product} key={product.id} />
              ))}
          </Box>
        </Box>
      );
    };

export default Products;
