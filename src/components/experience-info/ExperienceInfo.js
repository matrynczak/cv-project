import React from "react";
import "./style.css"

class ExperienceInfo extends React.Component {
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
                            <b>Company:</b>{"\n"}
                            <b>Position:</b>{"\n"}
                            <b>Dates:</b>
                        </div>
                        <div className="edu-values">
                            {item.company} {"\n"}
                            {item.position} {"\n"}
                            {item.startDate} - {item.endDate}
                        </div>
                    </div>
                    
                    <button className="exp-step-edit" onClick={() => this.props.editData(item.id)}>EDIT</button>
                </li>
            )
            }
        )
        return (
            <div className="experience-info">
                <ul> 
                    <h2>Experience</h2>
                    {listTasks}
                </ul>
            </div>
        )

    }
}

export default ExperienceInfo;