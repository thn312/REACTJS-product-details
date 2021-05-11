import React from 'react'
import classes from '../asserts/ProductDetails.module.css';
import ProductData from './ProductData';

const ProductDetails = (props) => {
    console.log(props)
    return (
        <div>
            <div className={classes.ProductData}>
                <h1 className={classes.ProductTitle}>
                    {ProductData.title}
                </h1>
                <p className={classes.ProductDescription}>
                    {ProductData.description}
                </p>

                <h3 className={classes.SelectionHeading}>
                    Select Color
                    </h3>
                <div>
                    <img
                        className={[classes.ProductImage, classes.SelectedProductImage].join(' ')}
                        src="https://imgur.com/PTgQlim.png"
                        alt="Red Strap"
                    />
                    <img
                        className={classes.ProductImage}
                        src="https://imgur.com/Mplj1YR.png"
                        alt="Blue Strap"
                    />
                    <img
                        className={classes.ProductImage}
                        src="https://imgur.com/xSIK4M8.png"
                        alt="Purple Strap"
                    />
                    <img
                        className={classes.ProductImage}
                        src="https://imgur.com/iOeUBV7.png"
                        alt="Black Strap"
                    />
                </div>

                <h3 className={classes.SelectionHeading}>
                    Features
                    </h3>
                <div>
                    <button
                        className={[classes.FeatureItem, classes.SelectedFeatureItem].join(' ')}>
                        Time
                        </button>
                    <button
                        className={classes.FeatureItem}>
                        Heart Rate
                        </button>
                </div>

                <button className={classes.PrimaryButton}>Buy Now</button>
            </div>
        </div>
    )
}

export default ProductDetails;