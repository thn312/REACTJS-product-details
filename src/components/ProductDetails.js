import React from 'react'
import classes from '../asserts/css/ProductDetails.module.css';

const ProductDetails = (props) => {

    const colorOptions = props.data.colorOptions.map((item, index) => {
        return (
            <img key={index}
                className={[classes.ProductImage, index === props.posCurrentPreview && classes.SelectedProductImage].join(' ')}
                src={item.imageUrl}
                alt={item.styleName}
                onClick={() => props.onColorOptionClick(index)}
            />
        )
    })


    const featureList = props.data.featureList.map((item, index) => {
        return (
            <button
                key={index}
                className={[classes.FeatureItem, index === props.showHeartBeat && classes.SelectedFeatureItem].join(' ')}
                onClick={() => props.onFeatureListClick(index)}
            >
                {item}
            </button>
        )
    })

    // console.log(props.data)
    return (
        < div >
            <div className={classes.ProductData}>
                <h1 className={classes.ProductTitle}>
                    {props.data.title}
                </h1>
                <p className={classes.ProductDescription}>
                    {props.data.description}
                </p>

                <h3 className={classes.SelectionHeading}>
                    Select Color
                </h3>
                <div>
                    {colorOptions}
                </div>

                <h3 className={classes.SelectionHeading}>
                    Features
                </h3>
                <div>
                    {featureList}
                </div>

                <button className={classes.PrimaryButton} onClick={() => window.open("https://www.facebook.com/thn312", "_blank")}>Buy Now</button>
            </div>
        </div >
    )
}

export default ProductDetails;