import React, { useState } from 'react'

const Practical = (props) => {
    const [startDate, setstartDate] = useState('');
    const [endDate, setendDate] = useState('');
    const [company, setCompany] = useState('');
    const [skills, setSkills] = useState('');


    const onChangeStartDate = (e) => {
        setstartDate(e.target.value)
    }
    const onChangeEndDate = (e) => {
        setendDate(e.target.value)
    }
    const onChangeCompany = (e) => {
        setCompany(e.target.value)
    }
    const onChangeSkills = (e) => {
        setSkills(e.target.value)
    }
    
        const { practical, handleSubmit, handleEdit } = props;
        if (practical === 'display') {
            return (
            <div style={styles}>
            <ul className='list-group'>
                <li className='list-group-item'>Company : {company}</li>
                <li className='list-group-item'>Skills: {skills}</li>
                <li className='list-group-item'>Started: {startDate}</li>
                <li className='list-group-item'>Ended: {endDate}</li>
            </ul>
            <button className='btn btn-info'style={{marginTop:'10px'}} onClick={handleEdit}>Edit</button>
        </div>
            )
        } else {
           return (
              <form onSubmit={handleSubmit}>
                <div className='form-group' style={styles}>
                    <input type='text' value={company} id='company' placeholder='company' className='form-control'onChange={onChangeCompany}/>
                    <input type='text' value={skills} id='skills' placeholder='skills' className='form-control'onChange={onChangeSkills}/>
                    <label htmlFor='startdate'>Start date</label>
                    <input type='date' value={startDate} id='startdate' className='form-control'onChange={onChangeStartDate}/>
                    <label htmlFor='enddate'>End date</label>
                    <input type='date' value={endDate} id='enddate' className='form-control'onChange={onChangeEndDate}/>
                    <button type='submit' className='btn btn-success' style={{marginTop:'10px'}}>Submit</button>
               </div>
              </form>
        ) 
           }}

const styles = {
    width:'600px',
    margin:'0 auto',
    padding:'20px 20px',
    textAlign:'center'
}
export default Practical
