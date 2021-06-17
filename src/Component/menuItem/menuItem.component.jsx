import React from "react";
import { withRouter } from "react-router-dom";
import "./menuItem.style.scss";

const MenuItem = ({title,imageUrl,size,history,match,linkUrl})=>{
    return(
        <div className="card" 
            onClick ={()=>history.push(`${match.url}${linkUrl}`)} 
        >
        <img alt="" className="item-img" style={{
            backgroundImage : `url(${imageUrl})`
        }}/>
            <div className="info">
                <h1 > {title.toUpperCase()}</h1>
                <button >Shop Now</button>
            </div>
        </div>  
    );
}
export default withRouter(MenuItem);