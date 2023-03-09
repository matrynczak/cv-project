import GeneralForm from '../src/components/general-form/GeneralForm';
import EducationForm from './components/education-form/EducationForm';
import ExperienceForm from './components/experience-form/ExperienceForm';
import './App.css';

function App() {
  return (
    <div className="App">
        <div className='forms'>
            <GeneralForm />
            <EducationForm />
            <ExperienceForm />
        </div>
    </div>
  );
}

export default App;
