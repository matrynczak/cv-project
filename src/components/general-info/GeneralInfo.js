import React from "react";
import "./style.css"

const GeneralInfo = (props) => {

    return (
        <div className="general-info">
                <div className="info-header">
                    <h2>General Information</h2> 
                    {Object.keys(props.data).length !== 0 && <button className="data-edit" onClick={() => props.editData()}>EDIT</button>}
                </div>
                
                <div className="content">
                    <div className="desc">
                        <b>Name:</b>{"\n"}
                        <b>Email:</b>{"\n"}
                        <b>Phone:</b>
                    </div>
                    <div className="values">
                        <p>{props.data.name} {props.data.surname} {"\n"}</p>
                        <p>{props.data.email} {"\n"}</p>
                        <p>{props.data.phone}</p>
                    </div>
                </div>
            </div>
    )
}

export default GeneralInfo;