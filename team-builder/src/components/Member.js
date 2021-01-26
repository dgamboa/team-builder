import React from 'react';

export default function Member(props) {
  const { details } = props;

  if (!details) {
    return <h3>Loading team members...</h3>
  }

  return (
    <div className='member container'>
      <h2>{details.name}</h2>
      <p>{details.email}</p>
      <p>{details.role}</p>
    </div>
  )
}