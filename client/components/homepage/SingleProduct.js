import React , { useState } from "react";
import { useDispatch } from "react-redux";
import { IconButton, Box, Typography, useTheme, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../../theme";
import { addToCart } from "../../store/cartSlice";
import { useNavigate} from "react-router-dom";

const Product=(props)=>{
    const { product } = props
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [count, setCount] = useState(1);
    const [isHovered, setIsHovered] = useState(false);

  const {
    palette: { neutral },
  } = useTheme();

  return (
    <Box width="80%" margin="80px auto">
      <Box
        position="relative"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <img
          alt={product.name}
          width="300px"
          height="400px"
          src={product.imageURL}
          onClick={() => navigate(`/product/${product.id}`)}
          style={{ cursor: "pointer" }}
        />
        <Box
          display={isHovered ? "block" : "none"}
          position="absolute"
          bottom="10%"
          left="0"
          width="100%"
          padding="0 5%"
        >
          <Box display="flex" justifyContent="space-between">
            <Box
              display="flex"
              alignItems="center"
              backgroundColor={shades.neutral[100]}
              borderRadius="3px"
            >
              <IconButton onClick={() => setCount(Math.max(count - 1, 1))}>
                <RemoveIcon />
              </IconButton>
              <Typography color={shades.primary[300]}>{count}</Typography>
              <IconButton onClick={() => setCount(count + 1)}>
                <AddIcon />
              </IconButton>
            </Box>
            <Button
              onClick={() => {
                dispatch(addToCart({ item: { ...product, count } }));
              }}
              sx={{ backgroundColor: shades.primary[300], color: "white" }}
            >
              Add to Cart
            </Button>
          </Box>
        </Box>
      </Box>

      <Box mt="3px">
        <Typography color={neutral.dark}>
          {product.category}
        </Typography>
        <Typography>{product.shortDescription}</Typography>
        <Typography fontWeight="bold">${product.price}</Typography>
      </Box>
    </Box>
  );
};

export default Product;