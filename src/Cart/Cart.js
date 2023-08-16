import Modal from "../Components/UI/Modal"

const Cart = (props) => {
const purchaseHandler =() => {
    alert("Thank you for the Purchase")
}

    const cartitems = <ul>
        {}
    </ul>
    return (
        <Modal>
            cartitems
            <div>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div>
                <button onClick={props.onClose}>Close</button>
                <button onClick={purchaseHandler}>Purchase</button>
            </div>
        </Modal>
    )
}
export default Cart