///
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import bima_jyoti from './bima_jyoti.png';
import cancer_cover from './cancer_cover.png';
import dhan_rekha from './dhan_rekha.png';
import Dhanversha from './Dhanversha.png';
import Jeevanakshay from './Jeevanakshay.png';
import nivesh_plus from './nivesh_plus.png';
import siip from './siip.png';
import JeevanShanti from './JeevanShanti.png';

function Post() {
  return (
    <div>

      <div className='background'>

        
      <a href="/LIC5">  <img className="bima_jyoti.png" src={bima_jyoti} alt="bima_jyoti"  /> good</a> 
       <a href="LIC7"><img className="cancer_cover.png" src={cancer_cover} alt="cancer_cover" /></a>
      <a href="LIC10"><img className="dhan_rekha.png" src={dhan_rekha} alt="dhan_rekha" /></a>
      <a href="LIC3"><img className="Dhanversha.png" src={Dhanversha} alt="Dhanversha" /></a>
      <a href="LIC9"><img className="Jeevanakshay.png" src={Jeevanakshay} alt="Jeevanakshay" /></a>
      <a href="LIC4"><img className="JeevanShanti.png" src={JeevanShanti} alt=" JeevanShanti" /></a>
      <a href="LIC6"><img className="nivesh_plus.png" src={nivesh_plus} alt="nivesh_plus" /></a>
      <a href="LIC8"><img className="siip.png" src={siip} alt="siip" /></a> 
    
      </div>
    </div>
  );
}

export default Post;
