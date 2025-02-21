import React from "react";
import Card from "../../components/Card/Card"
import './ListingsPage.css';


const ListingsPage: React.FC = () =>{
    return(
        <div className="Listings-page">
            <h1 className="listings-header">Women</h1>
            <div className="listings-container d-flex flex-wrap">
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                </div>
        </div>
    )
}
export default ListingsPage;