import React, { useState } from "react";
import GeneralInfo from "../general-info/GeneralInfo";
import "./style.css"

const GeneralForm = () => {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [data, setData] = useState({});

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        switch(name){
            case 'name':
                setName(value);
                break;
            case 'surname':
                setSurname(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'phone':
                setPhone(value);
                break;
            default:
                console.log("Ups..");
        }
      }

      const handleSubmit = (event) => {
        setData({
            name: name,
            surname: surname,
            email: email,
            phone: phone,
        });
        setName('');
        setSurname('');
        setEmail('');
        setPhone('');

        event.preventDefault();
    }

    const editData = () => {
        setName(data.name);
        setSurname(data.surname);
        setEmail(data.email);
        setPhone(data.phone);
    }

    return (
        <div className="general-form">
            <form onSubmit={handleSubmit}>
                <label>
                        Name 
                    <input type="text" name='name' value={name} onChange={handleInputChange}/>
                </label>
                <label>
                        Surname 
                    <input type="text" name='surname' value={surname} onChange={handleInputChange}/>
                </label>
                <label>
                        Email 
                    <input type="email" name='email' value={email} onChange={handleInputChange}/>
                </label>
                <label>
                        Phone 
                    <input type="tel" name='phone' value={phone} onChange={handleInputChange}/>
                </label>

                <input type="submit" value="Submit" />
            </form>
            <GeneralInfo data={data} editData={editData}/>
        </div>
    )
}

export default GeneralForm;