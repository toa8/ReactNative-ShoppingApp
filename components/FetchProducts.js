import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import axios from "axios";

// COMPONENTS
import ProductCard from "./ProductCard";

// https://fakestoreapi.com/products

const FetchProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProduct();
  }, []);

  const renderItem = ({ item }) => <ProductCard product={item} />;

  return (
    <>
      <FlatList
        data={products}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
};

export default FetchProducts;
