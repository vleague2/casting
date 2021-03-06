import React from "react";
import "./DancerCard.css";

const DancerCard = (props) => (
    <div className={`card horizontal ${props.bg}`}>
        <ul className="collapsible">
            <li>
                <div className="row row-dancer">
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
                <div className="row row-collapsible collapsible-body">
                    <div className="row row-extra-info">
                        <div className="col s6 center-align">
                            <p><b>Age:</b> {props.age}</p>
                        </div>
                        <div className="col s6 center-align">
                            <p><b>Height:</b> {props.height}</p>
                        </div>
                    </div>
                    <div className="row row-extra-info">
                        <div className="col s6 center-align">
                            <p><b>Score:</b> {props.score}/5</p>
                        </div>
                        {props.dances &&
                            <div className="col s6 center-align">
                                <p><b>Dances:</b></p>
                                <ul>
                                    {props.dances.map(dance => (
                                        <li key={dance}>{dance}</li>
                                    ))}
                                </ul>
                            </div>
                        }
                    </div>
                </div>
            </li>
        </ul>
    </div>
)

export default DancerCard;
  
  