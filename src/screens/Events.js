import { Divider } from '@mui/material';
import React, { useEffect } from 'react'
import styled from 'styled-components'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import MyNews from '../sub-components/MyNews';
const StyledContainer=styled.div`
min-height: 70vh;
width: 100%;
background-color:white;
margin-top: 155px;
padding: 20px;
.eveHead{
    height: 50px;
    width:60%;
    background-color: rgba(160, 50, 50, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    h2{
        color: rgba(160, 50, 50, 1);
    }
}
p{
    width: 80%;
    text-align: justify;
}
.evLinks{
    display:grid;
    grid-template-columns:1fr 1fr;
    .eveDonl{
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    p{
        width: 50%;
    }
    span{
        font-weight: bold;
    }
}
img{
    height:400px;
    width:400px;
}
}

.univCal{
    min-height: 60vh;
    width: 100%;
    margin-top: 30px;
    background-color:transparent;
    padding: 20px;
    display: flex;
    flex-direction: row;
    .theCal{
        width: 30%;
        height: 50vh;
        h2{
            color: rgba(160, 50, 50, 1);
        }
    }
    .theDet{
    width: 60%;
    min-height:60vh;
    background-color:transparent;
  
    .detMainEv{
    height: 60px;
    border-bottom:1px solid lightgray;
    margin-top: 10px;
    .det1st{
        display: flex;
        flex-direction: row;
        .labDt{
            margin-left: auto;
        }
        .labHead{
            font-weight: bold;
        }
    }
    }
    }
}
.eveHead2{
    height: 50px;
    width:100%;
    background-color: rgba(160, 50, 50, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    h2{
        color: rgba(160, 50, 50, 1);
    }
    }
.pastEv{
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 90%;
    background-color: transparent;
    margin-left: auto;
    margin-right: auto;
    min-height: 100px;
    padding: 20px;
}
`;
export default function Events() {
    useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior: 'smooth',
          })
    },[])
    return (
        <StyledContainer>
           <div className='eveHead'>
               <h2>Registration to commence on 23rd, May 2022</h2>
            </div> 
            <p>
               The Registration for new student both UTME and DE will commence 
               this week student are therefore advise to follow all procedures 
               and do their registration themselves to avoid being defraud 
            </p>
        
        <div className='evLinks'>
        <div className='allLink'>
        <div className='eveDonl'>
                <p>Registration Procedures</p>
                <span>Click To Download</span>
            </div>
            <div className='eveDonl'>
                <p>Schedule of Fees</p>
                <span>Click To Download</span>
            </div>
        </div>


        <img src={require('../assets/cal3.png')} alt='cal'/>
        </div>
           
            
    
       
        </StyledContainer>
    )
}
