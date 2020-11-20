import React, { useState } from 'react'

const General = (props) => {
    const [email, setemail] = useState('');
    const [name, setname] = useState('');
    const [phone, setphone] = useState('');


    const onChangeName = (e) => {
        setname(e.target.value)
    }
    const onChangePhone = (e) => {
        setphone(e.target.value)
    }
    const onChangeEmail = (e) => {
        setemail(e.target.value)
    }
    const { general, handleEdit, handleSubmit} = props
        if (general === 'display') {
            return (
        <div style={styles}>
            <ul className='list-group'>
                <li className='list-group-item'>Name : {name}</li>
                <li className='list-group-item'>Phone: {phone}</li>
                <li className='list-group-item'>Email: {email}</li>
            </ul>
            <button className='btn btn-info'style={{marginTop:'10px'}} onClick={handleEdit}>Edit</button>
        </div>
            )
        }
        else{
          return (
            <form onSubmit={handleSubmit}>
                <div className='form-group' style={styles}>
                    <input type='text' value={name} id='fullname' placeholder='Enter fullname' className='form-control'onChange={onChangeName}/>
                    <input type='tel' value={phone} id='phone' placeholder='Enter your cell' className='form-control'onChange={onChangePhone}/>
                    <input type='email' value={email} id='email'placeholder='Enter your E-Mail' className='form-control'onChange={onChangeEmail}/>
                    <button type='submit' className='btn btn-success' style={{marginTop:'10px'}}>Submit</button>
                </div>
            </form>
        )
        
    }
}
const styles = {
    width:'600px',
    margin:'0 auto',
    padding:'20px 20px',
    textAlign:'center'
}
export default General
