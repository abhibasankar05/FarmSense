import React from "react";
import { Card, CardBody, CardImg, CardTitle, CardText, Button } from "reactstrap";
import Farmers from "./farmer";
import "./singlefarmer.css";
import { useNavigate } from 'react-router-dom';

const Farmer = (props) => {
  const navigate = useNavigate();
    const i=props.i;

    return (
        
      <div className="card">
        <img src={i.imgsrc} alt="Card Image"/>
        <div className="card-body">
          <h5 className="card-title">Name :{props.i.title}</h5>
          <h5 className="card-text">Id:{props.i.description}</h5>
          <Button onClick={() => navigate('/farmerdetails',{ state: { farmerData: props.i } })} className="btn btn-primary">Details</Button>
        </div>
      </div>
    );
  };

export default Farmer;
