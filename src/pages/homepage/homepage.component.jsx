import React from "react";
import "./homepage.style.scss";
import Directory from "../../Component/directory/directory.component";

const HomePage = ({title,imageUrl,size})=>{
    return(
        <div className="homepage">
            <Directory />  
        </div>
    );
}
export default HomePage;