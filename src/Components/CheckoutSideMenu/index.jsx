import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { XMarkIcon } from "@heroicons/react/24/solid";

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);

  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? `flex` : `hidden`
      } flex-col fixed right-0 border border-black rounded-lg bg-white w-[360px] h-[calc(100vh-80px)]`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Shopping Cart</h2>
        <XMarkIcon
          className="w-4 cursor-pointer"
          onClick={() => context.closeCheckoutSideMenu()}
        />
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
