import React, { useState } from 'react';
import ProductPreview from './components/ProductReview';
import ProductDetails from './components/ProductDetails';
import TopBar from './components/TopBar';
import classes from './asserts/css/App.module.css';
import ProductData from './components/ProductData';


function App() {

    const [productData] = useState(ProductData);
    const [posCurrentPreview, setPosCurrentPreview] = useState(0);
    const [showHeartBeat, setShowHeartBeat] = useState(0);

    const onColorOptionClick = (pos) => {
        setPosCurrentPreview(() => {
            return pos;
        })
    }

    const onFeatureListClick = (pos) => {
        setShowHeartBeat(() => {
            return pos;
        })
    }
    return (
        <div className="App">
            <header className="App-header">
                <TopBar />
            </header>


            <div className={classes.MainContainer}>
                <ProductPreview
                    currentPreviewImage={productData.colorOptions[posCurrentPreview].imageUrl}
                    showHeartBeat={showHeartBeat}

                />

                <ProductDetails
                    data={productData}
                    onColorOptionClick={onColorOptionClick}
                    posCurrentPreview={posCurrentPreview}
                    showHeartBeat={showHeartBeat}
                    onFeatureListClick={onFeatureListClick}
                />
            </div>
        </div>
    );
}

export default App;
