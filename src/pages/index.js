import React, {useState, useEffect, useRef} from 'react'
import { Container, Row, Col, Nav } from "react-bootstrap";
import config from "../images/Config.png"
import operations from "../images/operations.png"
import doc from "../images/doc1.png"
import selfhelp from "../images/self5.jpeg"
import { MenuCard } from "./MenuCards";
import { Genecis } from "./genecis";
import colorSharp2 from "../images/color-sharp2.png";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { FaAlignCenter } from 'react-icons/fa';

const Home = () => {

  const [open, setOpen] = useState(false);
  const [opsOpen, setOpsOpen] = useState(false);
  const [ibnOpen, setIbnOpen] = useState(false);
  const [batfishOpen, setbatfishOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
        setOpsOpen(false);
        setIbnOpen(false);
      }
      
    };
    document.addEventListener("mousedown",handler);

    return() => {
      document.removeEventListener("mousedown",handler);
    }

  });


  const configClick = event => {
    console.log('Click');
    setOpen(!open)
    setOpsOpen(false)
    console.log({open});
  }

  const opsClick = event => {
    console.log('Operations Clicked');
    setOpsOpen(!opsOpen)
    setOpen(false)
    setIbnOpen(false)
    console.log({opsOpen});
  }

  const IBNclick = event => {
    console.log('IBN Clicked'); 
    setIbnOpen(!ibnOpen)
    console.log({ibnOpen});
  }

  const batFishclick = event => { 
    console.log('Batfish Clicked'); 
    setbatfishOpen(!batfishOpen)
    console.log({batfishOpen});
  }

  const clickOutside = event => {
    console.log('Clicked Outside');
    setOpen(false)
    setOpsOpen(false)
    console.log({open});
  }

  return (
    <div className="mainPage">
    <section className="menu" id="menu" >
    <div style={{ width: '25%', backgroundColor: 'lightgray', 
                  padding: '50px' }} ref={menuRef}>
      <Grid container spacing={3} >

        <Grid item xs={12} sm={6} style={{ backgroundColor: 'lightgray' }} >

        <div className="menu-container" >
          <div className="menu-trigger" style={{  backgroundColor: 'lightgray'}}>
          <center>
            <h4>Configurations</h4>
            <img src={require('../images/Config.png')} onClick={()=>{configClick()}} alt='logo' id='configimg' />
          </center>

          { open &&

          <div className="dropdown">
            <ul>
            <li><a href="" target="_blank">Genecis</a> </li>
            <li><a href="" target="_blank">NNI</a></li>
            <li><a href="" target="_blank">OOB</a></li>
            <li><a href="" target="_blank">SNAP API</a></li>
            <li><a href="" target="_blank">Self-Help</a></li>
            <li><a href="" target="_blank">IBN Configurations</a></li>
          </ul>
        </div>
      }
        </div>
        </div>

        </Grid>
        <Grid item xs={12} sm={6} style={{ backgroundColor: 'lightgray' }}>

        <div className="ops-container" >
          <div className="ops-trigger" style={{  backgroundColor: 'lightgray'}}>
          <center>
            <h4>Operations</h4>
            <img src={require('../images/operations.png')} onClick={()=>{opsClick()}} alt='logo' id='operationsimg' />
          </center>

          { opsOpen &&

          <div className="dropdownOps">
          <ul class="parent">
            <li><a href="" target="_blank">GC PORTAL</a> </li>
            <li onClick={()=>{IBNclick()}}>IBN 
            {ibnOpen && 
              <ul class="child">
                <li><a href="" target="_blank">IBN PRE-PRODUCTION</a></li>
                <li><a href="" target="_blank">IBN INTENT TABLES</a></li>
              </ul>
            }
            </li>
            <li><a href="" target="_blank">ARM PORTAL</a></li>
            <li><a href="" target="_blank">SYNTHETIC MONITORING</a></li>
            <li><a href="" target="_blank">SOFTWARE UPGRADE</a></li>
            <li><a href="" target="_blank">RUNBOOKS</a></li>
            <li><a href="" target="_blank">FORWARD NETWORKS</a></li>
            <li onClick={()=>{batFishclick()}}> BATFISH 
            {batfishOpen && 
              <ul class="child">
               <li><a href="" target="_blank">BATFISH DASHBOARD</a></li>
               <li><a href="" target="_blank">BATFISH COMPUTE</a></li>
              </ul>
            }
            </li>
            <li><a href="" target="_blank">ON CALL PROCESS</a></li>
          </ul>
        </div>
      }
        </div>
        </div>

        </Grid>
        <Grid item xs={12} sm={6} style={{ backgroundColor: 'lightgray' }}>
        <center>
        <h4>Documentation</h4>
        <a href="" target="_blank" id="adoc"><img src={require('../images/doc1.png')} alt='logo' id='doc' /></a>
          </center>
        </Grid>
        <Grid item xs={12} sm={6} style={{ backgroundColor: 'lightgray' }}>
        <center>
        <h4>Self-Help</h4>
        <a href="" id="aselfhelp" target="_blank" ><img src={require('../images/selfhelp1.png')} alt='logo' id='selfhelp' /></a>
          </center>
        </Grid>
      </Grid>
    </div>
      
    </section>
    </div>
  )
}


export default Home
