
import React, { useState } from 'react'

const Education = (props) => {
    const [school, setSchool] = useState('');
    const [startDate, setstartDate] = useState('');
    const [endDate, setendDate] = useState('');


    const onChangeStartDate = (e) => {
        setstartDate(e.target.value)
    }
    const onChangeEndDate = (e) => {
        setendDate(e.target.value)
    }
    const onChangeSchool = (e) => {
        setSchool(e.target.value)
    }
    const { education, handleEdit, handleSubmit} = props
        if (education === 'display') {
            return (
        <div style={styles}>
            <ul className='list-group'>
                <li className='list-group-item'>School : {school}</li>
                <li className='list-group-item'>Started: {startDate}</li>
                <li className='list-group-item'>Ended: {endDate}</li>
            </ul>
            <button className='btn btn-info'style={{marginTop:'10px'}}onClick={handleEdit}>Edit</button>
        </div>
            )
        } else {
            return (
            <form onSubmit={handleSubmit}>
                <div className='form-group' style={styles}>
                    <input type='text' value={school} id='school' className='form-control'placeholder='School'onChange={onChangeSchool}/>
                    <label htmlFor='startdate'>Start date</label>
                    <input type='date' id='startdate' value={startDate} className='form-control'onChange={onChangeStartDate}/>
                    <label htmlFor='enddate'>End date</label>
                    <input type='date' value={endDate} id='enddate' className='form-control'onChange={onChangeEndDate}/>
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

export default Education
