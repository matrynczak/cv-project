import React from "react";
import GeneralInfo from "../general-info/GeneralInfo";
import "./style.css"

class GeneralForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: {},
            name: '',
            surname: '',
            email: '',
            phone: ''
        }
        

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.editData = this.editData.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

    handleSubmit(event) {
        this.setState({
            data: {
                name: this.state.name,
                surname: this.state.surname,
                email: this.state.email,
                phone: this.state.phone,
            },
            name: '',
            surname: '',
            email: '',
            phone: '',
        })
        event.preventDefault();
    }

    editData() {
        this.setState({
            name: this.state.data.name,
            surname: this.state.data.surname,
            email: this.state.data.email,
            phone: this.state.data.phone,
        })
    }

    render() {
        return (
            <div className="general-form">
                <form onSubmit={this.handleSubmit}>
                    <label>
                            Name 
                        <input type="text" name='name' value={this.state.name} onChange={this.handleInputChange}/>
                    </label>
                    <label>
                            Surname 
                        <input type="text" name='surname' value={this.state.surname} onChange={this.handleInputChange}/>
                    </label>
                    <label>
                            Email 
                        <input type="email" name='email' value={this.state.email} onChange={this.handleInputChange}/>
                    </label>
                    <label>
                            Phone 
                        <input type="tel" name='phone' value={this.state.phone} onChange={this.handleInputChange}/>
                    </label>

                    {this.state.isEdit ? <button className='save-edited-task-btn' onClick={this.saveEditedTask}>Save and edit!</button> : <input type="submit" value="Submit" />}
                </form>
                <GeneralInfo data={this.state.data} editData={this.editData}/>
            </div>
           
        )
    }
}

export default GeneralForm;