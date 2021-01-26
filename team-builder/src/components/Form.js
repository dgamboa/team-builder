import React, { useState } from 'react';

const initialFormValues = {
  name: '',
  email: '',
  role: ''
};

export default function Form(props) {
  const [formValues, setFormValues] = useState(initialFormValues);

  const { submit } = props;

  const onChange = event => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  }

  const onSubmit = event => {
    event.preventDefault();
    submit(formValues.name, formValues.email, formValues.role);
  }

  return (
    <form className='form container' onSubmit={ onSubmit }>
      <label>Name: 
        <input 
          type='text'
          name='name'
          value={formValues.name}
          placeholder='Enter a name...'
          onChange={ onChange }
        />
      </label>
      <label>Email: 
        <input 
          type='email'
          name='email'
          value={formValues.email}
          placeholder='Enter an email...'
          onChange={ onChange }
        />
      </label>
      <label>Role: 
        <select 
          name='role'
          value={formValues.role}
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