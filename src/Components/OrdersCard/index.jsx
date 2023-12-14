import { ChevronRightIcon } from "@heroicons/react/24/solid";

const OrdersCard = (props) => {
  const { totalPrice, totalProducts } = props;
  return (
    <div className="flex justify-between items-center mb-3 border border-black rounded-lg p-3 w-72">
      <p className="flex flex-col text-sm">
        <span>01-02-23</span>
        <span>{totalProducts} articles</span>
      </p>
      <p className="flex gap-2 items-center">
        <span className="font-bold text-md">{totalPrice}</span>
        <ChevronRightIcon className="h-6 w-6 text-black cursor-pointer" />
      </p>
    </div>
  );
};

export default OrdersCard;
