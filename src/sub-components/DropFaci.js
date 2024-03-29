import {Link, useLocation, useParams,useNavigate} from 'react-router-dom'
import {Divider, List, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import MyList from './MyList';

const StyledLi=styled.li`
position: relative;
.content{
    min-width: 250px;
    min-height: 250px;
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
export default function DropFaci({link='',route=''}) {
    const myParams=useLocation()
    const navigate=useNavigate()
    return (
            <StyledLi>
                <a href='#' style={{
                    backgroundColor:myParams.pathname.includes(`/facility`)?'black':'transparent',
                    color:myParams.pathname.includes(`/facility`)?'white':'black'
                }}>{link}Facilities</a>
                <div className='content'>
               <List>
               <ListItemButton onClick={()=>{
                navigate('/facility/001')
               }} style={{
           color:'white',
           textTransform:'capitalize',
           fontWeight:'bold'
       }} component="span" className='content-lists'>
        <ListItemText  primary='Central Laboratory' />
             </ListItemButton>



             <ListItemButton onClick={()=>{
                navigate('/facility/001')
               }} style={{
           color:'white',
           textTransform:'capitalize',
           fontWeight:'bold'
       }} component="span" className='content-lists'>
        <ListItemText  primary='Chevron Biotech Center'/>
             </ListItemButton>


             <ListItemButton onClick={()=>{
                navigate('/facility/001')
               }} style={{
           color:'white',
           textTransform:'capitalize',
           fontWeight:'bold'
       }} component="span" className='content-lists'>
        <ListItemText  primary='CEMIT'/>
             </ListItemButton>


             <ListItemButton onClick={()=>{
                navigate('/facility/001')
               }} style={{
           color:'white',
           textTransform:'capitalize',
           fontWeight:'bold'
       }} component="span" className='content-lists'>
        <ListItemText  primary='Publishing Center'/>
             </ListItemButton>


            
               </List>
                </div>
                
            </StyledLi>
 
    )
}
