import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { XMarkIcon } from "@heroicons/react/24/solid";

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);
  console.log("Product Detail: ", context.productToShow);

  return (
    <aside
      className={`${
        context.isProductDetailOpen ? `flex` : `hidden`
      } flex-col fixed right-0 border border-black rounded-lg bg-white w-[360px] h-[calc(100vh-80px)]`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <XMarkIcon
          className="w-4 cursor-pointer"
          onClick={() => context.closeProductDetail()}
        />
      </div>
      <figure className="flex justify-center">
        <img
          className="w-1/2 object-contain rounded-lg"
          src={context.productToShow.image}
          alt={context.productToShow.title}
        />
      </figure>
      <p className="flex flex-col p-6">
        <span className="font-medium text-2xl mb-2">
          ${context.productToShow.price}
        </span>
        <span className="font-medium text-md">
          {context.productToShow.title}
        </span>
        <span className="font-light text-sm">
          {context.productToShow.description}
        </span>
      </p>
    </aside>
  );
};

export default ProductDetail;
