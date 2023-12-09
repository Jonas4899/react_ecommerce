import React from "react";
import { useState, useEffect } from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import CheckoutSideMenu from "../../Components/CheckoutSideMenu";

function Home() {
  const [items, setItems] = useState(null);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <Layout>
      <div className="grid gap-10 grid-cols-4 w-full max-w-screen-lg">
        {items?.map((item) => {
          return <Card key={item.id} data={item} />;
        })}
      </div>
      <ProductDetail />
      {/* Esto no deberia de estar acá */}
      <CheckoutSideMenu />
    </Layout>
  );
}

export default Home;
