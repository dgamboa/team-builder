import React, { useState } from 'react';
import Member from './Member'
import Form from './Form'

export default function App() {
  const [members, setMembers] = useState([]);
  const [memberToEdit, setMemberToEdit] = useState({});

  const submitForm = (inputName, inputEmail, inputRole) => {
    const name = inputName.trim();
    const email = inputEmail.trim();
    const role = inputRole.trim();

    const newMember = {
      name: name,
      email: email,
      role: role
    };
    
    if (memberToEdit['email']) {
      const updatedMembers = editMember(name, role, email);
      setMembers(updatedMembers)
      setMemberToEdit({});
    } else {
      setMembers([
        ...members,
        newMember
      ]);
    }
  };

  const editMember = (name, role, email) => {
    return members.map(member => {
      if (member.email === email) {
        member.name = name;
        member.role = role;
      }
      return member
    });
  }

  return (
    <div className='App'>
      <Form
        submit={submitForm}
        memberToEdit={memberToEdit}  
      />
      {
        members.map((member, index) => {
          return (
            <Member
              key={index}
              member={member}
              setMemberToEdit={ setMemberToEdit }
            />
          )
        })
      }
    </div>
  );
}
