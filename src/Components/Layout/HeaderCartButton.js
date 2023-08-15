

const HeaderCartButton = props => {
    return (
        <button className="button" onClick={props.onShowCart}>
            <span>Your Cart</span>
            <br />
            <span>3</span>
        </button>
    );
}
export default HeaderCartButton