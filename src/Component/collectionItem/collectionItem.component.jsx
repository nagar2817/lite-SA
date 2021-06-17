import React from 'react';
import "./collectionItem.style.scss";

const CollectionItem = ({id,name,price,imageUrl})=>(
    <div className="card">
    <img alt="" className="item-img" style={{
        backgroundImage : `url(${imageUrl})`
    }}/>
        <div className="info">
            <h1 className="name">{name}</h1>
            <span className="price">${price}</span>
            <button>Add to Cart</button>
        </div>
    </div>
);

export default CollectionItem;

