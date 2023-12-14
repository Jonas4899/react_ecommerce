import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import OrdersCard from "../../Components/OrdersCard";
import Layout from "../../Components/Layout";

function MyOrders() {
  const context = useContext(ShoppingCartContext);
  return (
    <Layout>
      <div className="flex items-center w-80justify-center mb-7">
        <h1 className="font-bold text-lg">My orders</h1>
      </div>
      {context.order.map((order, index) => {
        return (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard
              totalProducts={order.totalProducts}
              totalPrice={order.totalPrice}
            />
          </Link>
        );
      })}
    </Layout>
  );
}

export default MyOrders;
