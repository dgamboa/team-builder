import React from 'react';

export default function Form(props) {
  const { values, update, submit } = props;

  const onChange = event => {
    const { name, value } = event.target;
    update(name, value);
  }

  const onSubmit = event => {

  }

  return (
    <form className='form container' onSubmit={ onSubmit }>
      <label>Name: 
        <input 
          type='text'
          name='name'
          value={values.name}
          placeholder='Enter a name...'
          onChange={ onChange }
        />
      </label>
      <label>Email: 
        <input 
          type='email'
          name='email'
          value={values.email}
          placeholder='Enter an email...'
          onChange={ onChange }
        />
      </label>
      <label>Role: 
        <select 
          name='role'
          value={values.role}
          onChange={ onChange }
        >
          <option value=''>-- Select a Role --</option>
          <option value='Frontend Engineer'>Frontend Engineer</option>
          <option value='Backend Engineer'>Backend Engineer</option>
          <option value='Designer'>Designer</option>
          <option value='Data Scientist'>Data Scientist</option>
          <option value='Product Manager'>Product Manager</option>
        </select>
      </label>
      <div className='submit'>
        <button>Submit</button>
      </div>
    </form>
  )
}