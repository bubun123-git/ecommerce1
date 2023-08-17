import classes from './ProductItemForm.module.css'

const ProductItemForm = props => {
return (
    <form className={classes.form}>
        <input>
        <button className='form button'>Add To Cart</button>
        </input>
    </form>
)
}
export default ProductItemForm