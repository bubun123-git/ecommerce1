import classes from './ProductItemForm.module.css'
import Input from '../../UI/Input'
import { useRef , useState } from 'react'


const ProductItemForm = props => {
    const [amountsiValid, setAmountIsValid]= useState(true)
    const amountInputRef = useRef()


    const SubmtHandler = (event) => {
        event.preventDefault()

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber= +enteredAmount

        if(enteredAmount.trim().length===0|| enteredAmountNumber<1) {
            setAmountIsValid(false)
            return;
        }

        props.onAddtoCart(enteredAmountNumber)

    }

    return (
        <form className={classes.form}>
            <Input ref={amountInputRef} label="Amount" input={{
                id: 'amount_' + props.id,
                type: 'number',
                defaultValue: 1
            }} />
            <button className={classes.button}>Add To Cart</button>
            {!amountsiValid && <p>please enter a valid input</p>}
        </form>
    )
}
export default ProductItemForm;
