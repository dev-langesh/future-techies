import React from "react";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const AddToCartButton = () => {
  return (
    <IconButton color="primary" aria-label="Add to Cart">
      <ShoppingCartIcon />
    </IconButton>
  );
};

export default AddToCartButton;
