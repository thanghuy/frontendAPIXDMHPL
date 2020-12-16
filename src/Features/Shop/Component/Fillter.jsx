import React from 'react';

const Fillter = () => {
    return (
        <div className="shop-top-bar mt-30">
            <div className="shop-bar-inner">
                <div className="product-view-mode">
                {/* shop-item-filter-list start */}
                <ul className="nav shop-item-filter-list" role="tablist">
                    <li className="active" role="presentation"><a aria-selected="true" className="active show" data-toggle="tab" role="tab" aria-controls="grid-view" href="#grid-view"><i className="fa fa-th" /></a></li>
                    <li role="presentation"><a data-toggle="tab" role="tab" aria-controls="list-view" href="#list-view"><i className="fa fa-th-list" /></a></li>
                </ul>
                {/* shop-item-filter-list end */}
                </div>
                <div className="toolbar-amount">
                <span>Showing 1 to 9 of 15</span>
                </div>
            </div>
            {/* product-select-box start */}
            <div className="product-select-box">
                <div className="product-short">
                <p>Sort By:</p>
                <select className="nice-select">
                    <option value="trending">Relevance</option>
                    <option value="sales">Name (A - Z)</option>
                    <option value="sales">Name (Z - A)</option>
                    <option value="rating">Price (Low &gt; High)</option>
                    <option value="date">Rating (Lowest)</option>
                    <option value="price-asc">Model (A - Z)</option>
                    <option value="price-asc">Model (Z - A)</option>
                </select>
                </div>
            </div>
            {/* product-select-box end */}
        </div>

    );
};

export default Fillter;