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
    const name = formValues.name.trim();
    const email = formValues.email.trim();
    const role = formValues.role.trim();

    const newMember = {
      name: name,
      email: email,
      role: role
    };

    setMembers([
      ...members,
      newMember
    ]);
  };

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
