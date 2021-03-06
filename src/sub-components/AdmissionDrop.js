import {Link, useLocation, useParams,useNavigate} from 'react-router-dom'
import {Divider, List, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import MyList from './MyList';

const StyledLi=styled.li`
position: relative;
.content{
    min-width: 250px;
    min-height: 100px;
    background-color: rgba(208,115,72,1);
    position: absolute;
    right: 0;
    z-index: 100;
    transition: all 0.5s;
    transform: scaleY(0);
    cursor: pointer;
    transform-origin: top;
    .content-lists{
        border-bottom: 2px solid white;
    }

}
:hover .content{
    transform: scaleY(1);
}
`;
export default function DropPortal({link='',route=''}) {
    const myParams=useLocation()
    const navigate=useNavigate()
    return (
            <StyledLi>
                <a href='#' style={{
                    borderBottom:myParams.pathname.includes(`/portal`)?'5px solid #D07348':null
                }}>{link}Admissions</a>
                <div className='content'>
               <List>
               <ListItemButton onClick={()=>{
                   navigate('/undergraduate')
               }} style={{
           color:'white',
           textTransform:'capitalize',
           fontWeight:'bold'
       }} component="span" className='content-lists'>
        <ListItemText  primary='Undergraduate' />
             </ListItemButton>
             


             <ListItemButton  onClick={()=>{
                   navigate('/under Graduate')
               }} style={{
           color:'white',
           textTransform:'capitalize',
           fontWeight:'bold'
       }} component="span" className='content-lists'>
        <ListItemText  primary='Post Graduate'/>
             </ListItemButton>



            
               </List>
                </div>
                
            </StyledLi>
 
    )
}
