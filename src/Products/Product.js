import ProductSummary from "./ProductSummary"
import AvailableProduct from "./AvailableProduct"
import { Fragment } from "react"


const Product =() => {
    return (
        <Fragment>
            <ProductSummary/>
            <AvailableProduct/>
        </Fragment>
    )
}
export default Product