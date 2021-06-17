import React,{Component} from 'react';
import CollectionPreview from "../../Component/collectionPreview/collectionPreview.component";
import "./shoppage.style.scss";
import ShopData from "../../shopData.js"
class ShopPage extends Component{
    constructor(){
        super();
        this.state = {
            collection:ShopData
        }
    }
    render(){
       const {collection} = this.state;
        return(
            <div className="shop-page">
                {collection.map(({id,...otherCollection})=>(
                    <CollectionPreview key={id} {...otherCollection}/>
                ))}
            </div>
        );
    }
}

export default ShopPage;