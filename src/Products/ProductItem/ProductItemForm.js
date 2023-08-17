import classes from './ProductItemForm.module.css'
import Input from '../../UI/Input'
const ProductItemForm = props => {
const SubmtHandler = (event)=> {
    event.preventDefault()
}

    return (
        <form className={classes.form}>
            <Input label="Amount" input={{
                id: 'amount_' + props.id,
                type: 'number',
                defaultValue: 1
            }} />
            <button className={classes.button}>Add To Cart</button>
        </form>
    )
}
export default ProductItemForm;
