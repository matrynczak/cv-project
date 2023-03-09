import React from "react";
import ExperienceInfo from "../experience-info/ExperienceInfo";
import "./style.css";
import uniqid from 'uniqid';


class ExperienceForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            list: [],
            experienceStep: {
                company: '',
                position: '',
                startDate: '',
                endDate: '',
                id: uniqid(),
                num: 1
            },
            isEdit: false
        }
        

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCompanyChange = this.handleCompanyChange.bind(this);
        this.handlePositionChange = this.handlePositionChange.bind(this);
        this.handleStartTimeChange = this.handleStartTimeChange.bind(this);
        this.handleEndTimeChange = this.handleEndTimeChange.bind(this);
        this.editData = this.editData.bind(this);
        this.saveEditedItem = this.saveEditedItem.bind(this);
    }

    handleCompanyChange(event) {
        this.setState({
            experienceStep: {
                company: event.target.value,
                position: this.state.experienceStep.position,
                startDate: this.state.experienceStep.startDate,
                endDate: this.state.experienceStep.endDate,
                id: this.state.experienceStep.id,
                num: this.state.experienceStep.num
            }
        });
    }

    handlePositionChange(event) {
        this.setState({
            experienceStep: {
                company: this.state.experienceStep.company,
                position: event.target.value,
                startDate: this.state.experienceStep.startDate,
                endDate: this.state.experienceStep.endDate,
                id: this.state.experienceStep.id,
                num: this.state.experienceStep.num
            }
        });
    }

    handleStartTimeChange(event) {
        this.setState({
            experienceStep: {
                company: this.state.experienceStep.company,
                position: this.state.experienceStep.position,
                startDate: event.target.value,
                endDate: this.state.experienceStep.endDate,
                id: this.state.experienceStep.id,
                num: this.state.experienceStep.num
            }
        });
    }

    handleEndTimeChange(event) {
        this.setState({
            experienceStep: {
                company: this.state.experienceStep.company,
                position: this.state.experienceStep.position,
                startDate: this.state.experienceStep.startDate,
                endDate: event.target.value,
                id: this.state.experienceStep.id,
                num: this.state.experienceStep.num
            }
        });
    }

    editData(id) {
        const item = this.state.list.find(item => item.id === id);    
        this.setState({
            experienceStep: {
                company: item.company,
                position: item.position,
                startDate: item.startDate,
                endDate: item.endDate,
                id: item.id,
                num: item.num
            },
            isEdit: true
        })
    }

    saveEditedItem(){
        const editedItemIndex = this.state.list.findIndex(i => i.id === this.state.experienceStep.id)
        this.state.list.splice(editedItemIndex, 1, this.state.experienceStep);
        this.setState({ 
            isEdit: false, 
            list: this.state.list,
            experienceStep: {
                company: '',
                position: '',
                startDate: '',
                endDate: '',
                id: uniqid(),
            },
        })
    }

    handleSubmit(event) {
        this.setState({
            list: this.state.list.concat(this.state.experienceStep),
            experienceStep: {
                company: '',
                position: '',
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
            <div className="experience-form">
                <form onSubmit={this.handleSubmit}>
                    <label>
                            Company 
                        <input type="text" name='company' value={this.state.experienceStep.company} onChange={this.handleCompanyChange}/>
                    </label>
                    <label>
                            Position 
                        <input type="text" name='position' value={this.state.experienceStep.position} onChange={this.handlePositionChange}/>
                    </label>
                    <label>
                            Start date 
                        <input type="month" name='startDate' value={this.state.experienceStep.startDate} onChange={this.handleStartTimeChange}/>
                    </label>
                    <label>
                            End date 
                        <input type="month" name='endDate' value={this.state.experienceStep.endDate} onChange={this.handleEndTimeChange}/>
                    </label>

                    {this.state.isEdit ? <button className='save-edited-btn' onClick={this.saveEditedItem}>Save and edit!</button> : <input type="submit" value="Submit" />}
                </form>
                <ExperienceInfo list={this.state.list} editData={this.editData}/>
            </div>
           
        )
    }
}

export default ExperienceForm;