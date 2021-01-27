import React from 'react';

export default function Member(props) {
  const { member, setMemberToEdit, deleteMember } = props;

  if (!member) {
    return <h3>Loading team members...</h3>
  }

  return (
    <div className='member container'>
      <h2>{member.name}</h2>
      <p>{member.email}</p>
      <p>{member.role}</p>
      <button onClick={ () => setMemberToEdit(member) }>Edit</button>
      <button onClick={ () => deleteMember(member) }>Delete</button>
    </div>
  )
}