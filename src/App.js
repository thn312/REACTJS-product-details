import React, { useState } from 'react';
import ProductPreview from './components/ProductReview';
import ProductDetails from './components/ProductDetails';
import TopBar from './components/TopBar';
import classes from './asserts/css/App.module.css';
import ProductData from './components/ProductData';


function App() {

    const [productData, setproductData] = useState(ProductData);


    return (
        <div className="App">
            <header className="App-header">
                <TopBar />
            </header>


            <div className={classes.MainContainer}>
                <ProductPreview />
                <ProductDetails
                    data={productData}
                />
            </div>
        </div>
    );
}

export default App;
