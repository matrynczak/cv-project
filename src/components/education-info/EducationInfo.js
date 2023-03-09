import React from "react";
import "./style.css"

class EducationInfo extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const tasks = this.props.list;
        const listTasks = tasks.map((item) => {
            return (
                <li id={item.id} key={item.id}>
                    <div className="step-content">
                        <div className="edu-desc">
                            <b>School:</b>{"\n"}
                            <b>Specialization:</b>{"\n"}
                            <b>Dates:</b>
                        </div>
                        <div className="edu-values">
                            {item.name} {"\n"}
                            {item.specialization} {"\n"}
                            {item.startDate} - {item.endDate}
                        </div>
                    </div>
                    
                    <button className="edu-step-edit" onClick={() => this.props.editData(item.id)}>EDIT</button>
                </li>
            )
            }
        )
        return (
            <div className="education-info">
                <ul> 
                    <div className="edu-header">
                        <h2>Education steps</h2> 
                </div>
                    {listTasks}
                </ul>
            </div>
        )

    }
}

export default EducationInfo;