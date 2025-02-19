import React from "react";
import SweaterImage from '../../assets/images/b5e3087a92bcdb9503e38bbf905ae3a0.png';
import './Card.css';


const Card: React.FC=()=>{
    return(
        <div className="card-div">
            <img className="card-image col-11" src={SweaterImage} alt="" />
            <div className="mt-3 col-11">
            <p className="card-name p-0 m-0">Running Short</p>
            <p className="card-price p-0 m-0">$50.00</p>
            </div>
        </div>
    )
}
export default Card;