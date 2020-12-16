import React from 'react';
import Footer from './Footer';
import Header from './Header';

const LazyLoading = () => {
    return (
        <>
            <Header />
                <div>Loading</div>
            <Footer />   
        </>
    );
};

export default LazyLoading;