import React, { useEffect } from "react";
import "./style.css"

const EducationInfo = (props) => {
    const list = props.list;
    let listSteps = [];

    // useEffect(() => {
    //     listSteps = list.map((item) => {
    //         return (
    //             <li id={item.id} key={item.id}>
    //                 <div className="step-content">
    //                     <div className="edu-desc">
    //                         <b>School:</b>{"\n"}
    //                         <b>Specialization:</b>{"\n"}
    //                         <b>Dates:</b>
    //                     </div>
    //                     <div className="edu-values">
    //                         {item.name} {"\n"}
    //                         {item.specialization} {"\n"}
    //                         {item.startDate} - {item.endDate}
    //                     </div>
    //                 </div>
                    
    //                 <button className="edu-step-edit" onClick={() => props.editData(item.id)}>EDIT</button>
    //             </li>
    //         )
    //     })
    // }, [list])

    listSteps = list.map((item) => {
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
                
                <button className="edu-step-edit" onClick={() => props.editData(item.id)}>EDIT</button>
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
                {listSteps}
            </ul>
        </div>
    )
}

export default EducationInfo;