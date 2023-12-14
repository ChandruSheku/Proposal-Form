//post  linkto server express   LIC
import React, { useState } from 'react';
import axios from 'axios';

  const  PostProposal = () => {
    const [adhno, setAdhno] = useState('');
    const [propname, setPropname] = useState('');
    const [phoneno, setPhoneno] = useState('');
    const [gmail, setGmail] = useState('');
     const [term, setTerm] = useState('');
     const [sum, setSum] = useState('');
     const [income, setIncome] = useState('');
     const [nation, setNation] = useState('');
     const [state, setState] = useState('');
     const [gender, setGender] = useState('');
     const [mode, setMode] = useState('');
      const [dob, setDob] = useState('');
  
      const [viewAdhno, setViewAdhno] = useState('');
      const [viewProp, setViewProp] = useState(null);
          const [message, setMessage] = useState('');
    
      const [proposal, setProposal] = useState(null);
      const [searchAdhno, setSearchAdhno] = useState('');


      const handleSubmit = (e) => {
        e.preventDefault();
    
        const newProp = {
          adhno: Number(adhno),
          propname,
           phoneno:Number(phoneno)  ,
           gmail:decodeURIComponent(gmail),
           term:Number(term),
            sum:Number(sum),
          income:Number(income),
           nation,
           state,
           gender,
           mode,String,
            dob: encodeURIComponent(dob),
         };
    
        axios.post('http://localhost:4000/proposals', newProp)
          .then((response) => {
            console.log(response.data);
            // Handle success or show a success message
          })
          .catch((error) => {
            console.error(error);
            // Handle error or show an error message
          });
    
        setAdhno('');
        setPropname('');
        setPhoneno('');
         setGmail('');
        setTerm('');
        setSum('');
        setIncome('');
        setNation('');
        setState('');   
        setGender('');
        setMode('');
         setDob('');
      };
    
    
    
      const handleSearchedit = () => {
        axios.get(`http://localhost:4000/proposals/${viewAdhno}`)
          .then((response) => {
            console.log(response.data);
            setViewProp(response.data);
            setMessage('');
          })
          .catch((error) => {
            console.error(error);
            setViewProp(null);
            setMessage('proposal not found.');
          });
    
        setViewAdhno('');
      };
    
      const handleEdit = () => {
        axios.put(`http://localhost:4000/proposals/${viewProp.adhno}`, {
          propname,
           phoneno:Number(phoneno),
           gmail:decodeURIComponent(gmail),
           term:Number(term),
            sum:Number(sum),
          income:Number(income),
           nation,
           state,
           gender,
           mode,String,
            dob: encodeURIComponent(dob)
            
        })
          .then((response) => {
            console.log(response.data);
            setMessage('Save changes successfully.');
          })
          .catch((error) => {
            console.error(error);
            setMessage('Failed to update  data.');
          });
    
        setViewProp(null);
        setPropname('');
         setPhoneno('');
        setGmail("");
        setTerm('');
        setSum('');
        setIncome("");
        setNation('');
        setState('');
        setGender("");
        setMode('');
         setDob('');
    
      };
    
    
      const handleSearchedelete = () => {
        axios.get(`http://localhost:4000/proposals/${searchAdhno}`)
          .then(response => {
            setProposal(response.data);
          })
          .catch(error => {
            console.log(error);
          });
      };
    
      const handleDelete = () => {
        axios.delete(`http://localhost:4000/proposals/${proposal.adhno}`)
          .then(response => {
            console.log(response);
            setProposal(null);
            setMessage('Data deleted successfully.');
          })
          .catch(error => {
            console.log(error);
          });
      };


  return (

<div  className="CKS1"    >
      <div className='enlarged-text '>
      
       <h1> PROPOSAL FORM </h1>  
      <form onSubmit={handleSubmit} >

        <div>
          <label  >Aadhaar Number:</label>
                     <input type="number" value={adhno} onChange={(e) => setAdhno(e.target.value)} required />   <label >Proposer Name:</label>
          <input type="text" value={propname} onChange={(e) => setPropname(e.target.value)} required /> <></> <label  >PHONE NO:</label>
          <input  type="number" value={phoneno} onChange={(e) => setPhoneno(e.target.value)} required  />
        </div> 
<br></br>
        <div>
          <label >Mail Id:</label>
          <input type="text" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" value={gmail} onChange={(e) => setGmail(e.target.value)} required />  <label >Term:</label>
          <input type="number" value={term} onChange={(e) => setTerm(e.target.value)} required />     <label >SumAssured:</label>
          <input type="number" value={sum} onChange={(e) => setSum(e.target.value)} required />
        </div>
  <br></br>

        <div>
          <label>AnualIncome:</label>
          <input type="number" value={income} onChange={(e) => setIncome(e.target.value)} required />    <label>Natinality:</label>
          <input type="text" value={nation} onChange={(e) => setNation(e.target.value)} required />      <label>STATE:</label>
          <input type="text" value={state} onChange={(e) => setState(e.target.value)} required />
  
        </div>
<br></br>
        
        <div >
        <label   >Gender:</label>
    <select type="text" value={gender}  onChange={(e) => setGender(e.target.value)} required >
        <option></option><option>Male</option><option>Feamle</option>
    </select>
    <label>MODE:</label>
          <select type="text" value={mode} onChange={(e) => setMode(e.target.value)} required >
           <option></option> <option> MLY</option><option>QLY</option><option>HLY</option><option>Yly</option>
          </select>
          <label>DOB:</label>
          <input type="number" value={dob} onChange={(e) => setDob(e.target.value)} required />


        </div> 

    <br></br>
        <button type="submit" className='color'>SUBMIT</button>

      </form>

{/*  view Function Edit */}
<div>
      <h2>View Details</h2>
      <div>
        <label>Enter Aadhaar Number:</label>
        <input type="number" value={viewAdhno} onChange={(e) => setViewAdhno(e.target.value)} required />
        <button onClick={handleSearchedit}>Search</button>
      </div>

      {viewProp && (
        <div>
          <h3>PROPOSAL Details</h3>
          <p><strong>Aadhaar Number:</strong> {viewProp.adhno} <span class="label-spacing"></span>  <strong>Proposer Name:</strong> {viewProp.propname}    </p>
           <p><strong>PHONE NO:</strong> {viewProp.phoneno}  <span class="label-spacing"></span> <strong>GMAIL:</strong> {viewProp.gmail}</p>
          <p></p>
          <p><strong>Term:</strong> {viewProp.term}  <span class="label-spacing"></span> <strong>SumAssured:</strong> {viewProp.sum} </p>
          <p></p>
          <p><strong> Anual Income:</strong> {viewProp.income}  <span class="label-spacing"></span> <strong>Natinality:</strong> {viewProp.nation}</p>
          <p></p>
          <p><strong>STATE:</strong> {viewProp.state}  <span class="label-spacing"></span> <strong>Gender:</strong> {viewProp.gender}</p>
          <p></p>
          <p><strong>MODE:</strong> {viewProp.mode} <span class="label-spacing"></span> <strong>DOB:</strong> {viewProp.dob}</p> 
          <p></p> 
          <h3 className='green' >Edit Details</h3>
          <div>
            <label> Name Of The Proposer :</label>
            <input type="text" value={propname} onChange={(e) => setPropname(e.target.value)} required /> <span class="label-spacing"></span> <label>PHONE NO:</label>
            <input type="number" value={phoneno} onChange={(e) => setPhoneno(e.target.value)} required />

          </div>
          
          <div>
            <label>GMAIL:</label>
            <input type="text" value={gmail} onChange={(e) => setGmail(e.target.value)} required /><span class="label-spacing"></span> <label>Term:</label>
            <input type="number" value={term} onChange={(e) => setTerm(e.target.value)} required />
          </div>
          
          <div>
            <label>SumAssured:</label>
            <input type="number" value={sum} onChange={(e) => setSum(e.target.value)} required /><span class="label-spacing"></span> <label>AnualIncome:</label>
            <input type="number" value={income} onChange={(e) => setIncome(e.target.value)} required />
          </div>
          
          <div>
            <label>Natinality:</label>
            <input type="text" value={nation} onChange={(e) => setNation(e.target.value)} required /><span class="label-spacing"></span> <label>STATE:</label>
            <input type="text" value={state} onChange={(e) => setState(e.target.value)} required />
 
          </div>

          
          <div  >
            <label>Gender:</label>
            <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} required /><span class="label-spacing"></span>  <label>MODE:</label>
            <input type="text" value={mode} onChange={(e) => setMode(e.target.value)} required />
          </div> 
          
          <div>
            <label>DOB:</label>
            <input type="number" value={dob} onChange={(e) => setDob(e.target.value)} required />
          </div>


        <button onClick={handleEdit}  style={{backgroundColor:'lightgreen'}} ><b>UPDATE</b></button>

          {message && (
            <p>{message}</p>
          )}
        </div>
      )}
    </div> 



{/* Delete Function  */}
<div>
      <h2  style={{color:'red'}}>Delete</h2>
      <div>
        <label htmlFor="searchAdhno"></label>
        <input   placeholder='Enter Adhno' type="text" id="searchAdhno" value={searchAdhno} onChange={(e) => setSearchAdhno(e.target.value)} />
        <button onClick={handleSearchedelete}   className='search'>Search</button>
      </div>
      {proposal && (
        <div>
          <table>
            <thead>
              <tr>
                <th>Aadhaar NO</th>

            
                <th>Proposer Name</th>
              </tr>
            </thead>
            <tbody>
              <tr key={proposal.adhno}>
                <td>{proposal.adhno}</td>
                <td>{proposal.propname}</td>
              </tr>
            </tbody>
          </table>
          <button type="button" style={{backgroundColor:'red'}} onClick={handleDelete}  >Delete</button>
          {message && (<p>{message}</p>)}
        </div>
      )}
    </div>


    
    </div>
    </div>
 );
};

export default PostProposal;