import React from "react";
import "./style.css"

class GeneralInfo extends React.Component {
    constructor(props){
        super(props);
    }

    

    render() {
        return (
            <div className="general-info">
                <div className="info-header">
                    <h2>General Information</h2> 
                    <button onClick={() => this.props.editData()}>EDIT</button>
                </div>
                
                <div className="content">
                    <div className="desc">
                        <b>Name:</b>{"\n"}
                        <b>Email:</b>{"\n"}
                        <b>Phone:</b>
                    </div>
                    <div className="values">
                        <p>{this.props.data.name} {this.props.data.surname} {"\n"}</p>
                        <p>{this.props.data.email} {"\n"}</p>
                        <p>{this.props.data.phone}</p>
                    </div>
                </div>
            </div>

            
        )
    }
}

export default GeneralInfo;