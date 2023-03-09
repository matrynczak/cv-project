import React from "react";
import EducationInfo from "../education-info/EducationInfo";
import "./style.css";
import uniqid from 'uniqid';


class EducationForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            list: [],
            educationStep: {
                name: '',
                specialization: '',
                startDate: '',
                endDate: '',
                id: uniqid(),
                num: 1
            },
            isEdit: false
        }
        

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSpecChange = this.handleSpecChange.bind(this);
        this.handleStartTimeChange = this.handleStartTimeChange.bind(this);
        this.handleEndTimeChange = this.handleEndTimeChange.bind(this);
        this.editData = this.editData.bind(this);
        this.saveEditedItem = this.saveEditedItem.bind(this);
    }

    handleNameChange(event) {
        this.setState({
            educationStep: {
                name: event.target.value,
                specialization: this.state.educationStep.specialization,
                startDate: this.state.educationStep.startDate,
                endDate: this.state.educationStep.endDate,
                id: this.state.educationStep.id,
                num: this.state.educationStep.num
            }
        });
    }

    handleSpecChange(event) {
        this.setState({
            educationStep: {
                name: this.state.educationStep.name,
                specialization: event.target.value,
                startDate: this.state.educationStep.startDate,
                endDate: this.state.educationStep.endDate,
                id: this.state.educationStep.id,
                num: this.state.educationStep.num
            }
        });
    }

    handleStartTimeChange(event) {
        this.setState({
            educationStep: {
                name: this.state.educationStep.name,
                specialization: this.state.educationStep.specialization,
                startDate: event.target.value,
                endDate: this.state.educationStep.endDate,
                id: this.state.educationStep.id,
                num: this.state.educationStep.num
            }
        });
    }

    handleEndTimeChange(event) {
        this.setState({
            educationStep: {
                name: this.state.educationStep.name,
                specialization: this.state.educationStep.specialization,
                startDate: this.state.educationStep.startDate,
                endDate: event.target.value,
                id: this.state.educationStep.id,
                num: this.state.educationStep.num
            }
        });
    }

    editData(id) {
        const item = this.state.list.find(item => item.id === id);    
        this.setState({
            educationStep: {
                name: item.name,
                specialization: item.specialization,
                startDate: item.startDate,
                endDate: item.endDate,
                id: item.id,
                num: item.num
            },
            isEdit: true
        })
    }

    saveEditedItem(){
        const editedItemIndex = this.state.list.findIndex(i => i.id === this.state.educationStep.id)
        this.state.list.splice(editedItemIndex, 1, this.state.educationStep);
        this.setState({ 
            isEdit: false, 
            list: this.state.list,
            educationStep: {
                name: '',
                specialization: '',
                startDate: '',
                endDate: '',
                id: uniqid(),
            },
        })
    }

    handleSubmit(event) {
        this.setState({
            list: this.state.list.concat(this.state.educationStep),
            educationStep: {
                name: '',
                specialization: '',
                startDate: '',
                endDate: '',
                id: uniqid(),
                num: this.state.num + 1
            }
        })
        event.preventDefault();
    }

    render() {
        return (
            <div className="education-form">
                <form onSubmit={this.handleSubmit}>
                    <label>
                            School 
                        <input type="text" name='name' value={this.state.educationStep.name} onChange={this.handleNameChange}/>
                    </label>
                    <label>
                            Specialization 
                        <input type="text" name='specialization' value={this.state.educationStep.specialization} onChange={this.handleSpecChange}/>
                    </label>
                    <label>
                            Start date 
                        <input type="month" name='startDate' value={this.state.educationStep.startDate} onChange={this.handleStartTimeChange}/>
                    </label>
                    <label>
                            End date 
                        <input type="month" name='endDate' value={this.state.educationStep.endDate} onChange={this.handleEndTimeChange}/>
                    </label>

                    {this.state.isEdit ? <button className='save-edited-btn' onClick={this.saveEditedItem}>Save and edit</button> : <input type="submit" value="Submit" />}
                </form>
                <EducationInfo list={this.state.list} editData={this.editData}/>
            </div>
           
        )
    }
}

export default EducationForm;