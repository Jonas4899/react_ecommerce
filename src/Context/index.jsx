import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  // Shopping cart - Increment quantity
  const [count, setCount] = useState(0);

  // Product detail - Open and close product
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => {
    setIsProductDetailOpen(true);
    closeCheckoutSideMenu();
  };
  const closeProductDetail = () => setIsProductDetailOpen(false);

  // Checkout Side Menu - Open and close product
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => {
    setIsCheckoutSideMenuOpen(true);
    closeProductDetail();
  };
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

  // Product detail - Show product
  const [productToShow, setproductToShow] = useState({});

  // Shopping cart - Add products
  const [cartProducts, setCartProducts] = useState([]);

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productToShow,
        setproductToShow,
        cartProducts,
        setCartProducts,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
