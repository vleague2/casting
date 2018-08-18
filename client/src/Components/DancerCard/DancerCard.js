import React from "react";
import "./DancerCard.css";

const DancerCard = (props) => (
    <div className={`card horizontal ${props.bg}`}>
        <ul className="collapsible">
            <li>
                <div className="row">
                    <div className="col s3">
                        <h5>{props.num}</h5>
                    </div>
                    <div className="col s6 center-align">
                        <p className="dancer-name">{props.name}</p>
                    </div>
                    <div className="col s3 right-align">
                        <a className="btn-small btn-floating black collapsible-header center-align">
                            <i className="material-icons center-align">+</i>
                        </a>
                    </div>
                </div> 
                <div className="row collapsible-body">
                    <p className="center-align"><b>Dances</b></p>
                    <ul className="center-align">
                        {props.dances.map(dance => (
                            <li key={dance}>{dance}</li>
                        ))}
                    </ul>
                </div>
            </li>
        </ul>
    </div>
)

export default DancerCard;
  
  