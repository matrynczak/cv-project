import GeneralForm from '../src/components/general-form/GeneralForm';
import EducationForm from './components/education-form/EducationForm';
import ExperienceForm from './components/experience-form/ExperienceForm';
import './App.css';

function App() {
  return (
    <div className="App">
        <h2 className='title'>CV template creator</h2>
        <div className='forms'>
            <GeneralForm />
            <EducationForm />
            <ExperienceForm />
        </div>
    </div>
  );
}

export default App;
