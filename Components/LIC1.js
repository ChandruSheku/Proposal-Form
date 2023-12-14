import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import LIC_Logo from './LIC_Logo.jpg';
import lic_logo2 from './lic_logo2.jpg';
import Carousel from 'react-bootstrap/Carousel';
import licJeevanAzad from './LIC-Jeevan-Azad_2042-X-610.jpg';
import licSiip from './LIC_SIIP.jpg';
import eBanner from './E-Banner_2042-x-610-pixels_Eng.jpg';
import bima_jyoti from './bima_jyoti.png';
import cancer_cover from './cancer_cover.png';
import dhan_rekha from './dhan_rekha.png';
import Dhanversha from './Dhanversha.png';
import Jeevanakshay from './Jeevanakshay.png';
import nivesh_plus from './nivesh_plus.png';
import siip from './siip.png';
import JeevanShanti from './JeevanShanti.png';

function LIC1() {
  return (
    <div>
      <div className='background'>
        <>
        <img className="lic_logo2.jpg" src={lic_logo2} alt="lic_logo2" style={{height:'150px', width:'300px', float:'left', }} />
           <img className="LIC_Logo.jpg" src={LIC_Logo} alt="LIC_Logo" style={{height:'120px', width:'500px', float:'none', marginRight:'300px'}} /> 
          <h1 className="LIC"> Life Insurance Corporation Of India</h1>

          <hr style={{width:'50%',borderWidth:'6px',color:'darkgreen', marginLeft:"380px"}} />

        <div className='row'>
          <div className='col' style={{ backgroundColor: 'blue' }}>.</div>
          <div className='col' style={{ backgroundColor: 'yellow' }}>.</div>
        </div>
    <br></br>
        </>
      
        <a href="/LIC1" style={ {float:'left'    ,marginLeft:'25px', }} ><h3><button style={{ backgroundColor:"aqua" }} >HOME</button></h3> </a>

    <DropdownButton id="dropdown-basic-button" title="Invester-Relation" style={ {float:'left'    ,marginLeft:'5px'  }}     >
      <Dropdown.Item href="#/action-1">Corporation</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Governament</Dropdown.Item>
      <Dropdown.Item href="#/action-3">promoters/Stake holders</Dropdown.Item>
    </DropdownButton>

    <DropdownButton id="dropdown-basic-button" title="Products " style={ {float:'left'    ,marginLeft:'5px' }} >
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>

    <DropdownButton id="dropdown-basic-button" title="Group-Schemes" style={ {float:'left'    ,marginLeft:'5px' }} >
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>

  
    <DropdownButton id="dropdown-basic-button" title="Coustmer-service" style={ {float:'left'    ,marginLeft:'5px', backgroundColor:'yellow' }}variant='white' >
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>

    <DropdownButton id="dropdown-basic-button" title=" Premuim-Payment"  style={{ float: 'left', marginLeft: '5px', backgroundColor:"yellow"}} variant='white'  >   
      <Dropdown.Item href="#/action-1">UPI Payment</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Online Payment</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Premuim Point</Dropdown.Item>
    </DropdownButton>
    <DropdownButton id=" " title="IRDA-Rules" style={ {float:'left' ,marginLeft:'5px' ,backgroundColor:"yellow" , }} variant='white' >
      <Dropdown.Item href="#/action-1">About-IRDA</Dropdown.Item>
      <Dropdown.Item href="#/action-2">IRDA-Acts</Dropdown.Item>
      <Dropdown.Item href="#/action-3"> Insurence-Rules & Regulates </Dropdown.Item>
    </DropdownButton>

    <li className="nav-item search">
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Plans -Name/NO" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </li>
    

        <div className='carousel'>
          <Carousel data-bs-theme="dark">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={licJeevanAzad}
                alt="LIC Jeevan Azad"
              />
              <Carousel.Caption>
                <h5></h5>
                <a href='ProposalLic'> <h2><button type='button' style={{color:'black', backgroundColor:'blue'}}>BUY POLICY NOW</button></h2>  </a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={licSiip}
                alt="LIC SIIP"
              />
              <Carousel.Caption>
                <h5>Second</h5>
                <a href='ProposalLic'> <h2><button type='button' style={{color:'black', backgroundColor:'blue'}}>BUY POLICY NOW</button></h2>  </a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={eBanner}
                alt="E Banner"
              />
              <Carousel.Caption>
                <h5>Third</h5>
                <a href='ProposalLic'> <h2><button type='button' style={{color:'black', backgroundColor:'blue'}}>BUY POLICY NOW</button></h2>  </a>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          
        </div>
<a href="/LIC2" ><h3>Next...</h3></a>
      </div>
    </div>
  );
}

export default LIC1;
