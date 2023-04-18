import { useSelector, useDispatch } from "react-redux";
import CartItems from "./CartItems";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);

  return (
    <div className="flex">
      {items.map((e) => (
        <CartItems key={e.id} {...e} />
      ))}
    </div>
  );
};

export default Cart;
