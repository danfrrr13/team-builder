import React, { useState } from 'react';

const Form = props => {
    const [member, setMember] = useState({ name: '', email: '', role: '' });
    const changeHandler = event => {
        setMember({ ...member, [event.target.name]: event.target.value });
    };
    const submitForm = event => {
        event.preventDefault();
        props.add(member);
        setMember({ name: '', email: '', role: '' });
    };
    return (
        <div>
            <form onSubmit={submitForm}>
                <label htmlFor='name'>
                    Name
                </label>
                <input
                type='text'
                name='name'
                placeholder='Name'
                value={member.name}
                onChange={changeHandler}
                >

                </input>
                <label htmlFor='email'>
                    Email
                </label>
                <input
                type='text'
                name='email'
                placeholder='Email'
                value={member.email}
                onChange={changeHandler}
                />
                <label htmlFor='role'>
                    Role
                </label>
                <input
                type='text'
                name='role'
                placeholder='Role'
                value={member.role}
                onChange={changeHandler}
                />
                <button type='submit'>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Form;

