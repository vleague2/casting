import React from "react";
import "./DancerCard.css";

const DancerCard = (props) => (
    <div className={`card horizontal ${props.bg}`}>
        <div className="row">
            <div className="col s3">
                <h5>{props.num}</h5>
            </div>
            <div className="col s6 center-align">
                <p className="dancer-name">{props.name}</p>
            </div>
            <div className="col s3 right-align">
                <a class="btn-small btn-floating red">
                    <i class="material-icons">+</i>
                </a>
            </div>
        </div> 
    </div>
)

export default DancerCard;
  
  