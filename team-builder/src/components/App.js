import React, { useState } from 'react';
import Member from './Member'
import Form from './Form'


export default function App() {
  const [members, setMembers] = useState([]);
  const [memberToEdit, setMemberToEdit] = useState();

  const submitForm = (inputName, inputEmail, inputRole) => {
    const name = inputName.trim();
    const email = inputEmail.trim();
    const role = inputRole.trim();

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

  const editMember = () => {

  }

  return (
    <div className='App'>
      <Form
        submit={submitForm}  
      />
      {
        members.map((member, index) => {
          return (
            <Member
              key={index}
              details={member}
              editMember={ editMember }
            />
          )
        })
      }
    </div>
  );
}
