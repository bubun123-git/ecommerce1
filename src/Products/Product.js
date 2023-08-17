import ProductSummary from "./ProductSummary"
import AvailableProduct from "./AvailableProduct"
import { Fragment } from "react"


const Product =(props) => {
    return (
        <Fragment>
            <ProductSummary/>
            <AvailableProduct onClick={props.onClick}/>
        </Fragment>
    )
}
export default Product