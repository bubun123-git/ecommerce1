import { useContext } from "react";
import CartContext from "../../Store/Cart-context";

const HeaderCartButton = props => {
   const Cardctx= useContext(CartContext)

   const numberOfCartItems = Cardctx.items.reduce((curNumber,item)=> {
    return curNumber+ item.amount
   },0)
    return (
        <button className="button" onClick={props.onShowCart} >
            <span>Your Cart</span>
            <br />
            <span>{numberOfCartItems}</span>
        </button>
    );
}
export default HeaderCartButton