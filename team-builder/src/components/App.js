import React, { useState } from 'react';
import Member from './Member'
import Form from './Form'

const initialFormValues = {
  name: '',
  email: '',
  role: ''
};

export default function App() {
  const [members, setMembers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue
    });
  };

  const submitForm = () => {

  }

  return (
    <div className='App'>
      <Form 
        values={formValues}
        update={updateForm}
        submit={submitForm}  
      />
      {
        members.map((member, index) => {
          return (
            <Member key={index} details={member}/>
          )
        })
      }
    </div>
  );
}
