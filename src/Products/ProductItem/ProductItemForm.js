import classes from './ProductItemForm.module.css'
import Input from '../../UI/Input'
const ProductItemForm = props => {
    return (
        <form className={classes.form}>
            <Input label="Amount" input={{
                id: "amount",
                type: 'number',
                defaultValue: 1
            }} />
            <button className={classes.button}>Add To Cart</button>
        </form>
    )
}
export default ProductItemForm;
