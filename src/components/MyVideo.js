import React from 'react'
import styled from 'styled-components'

const StyledContainer=styled.div`
min-width: 100%;
height: 80vh;
background-color: white;
position: relative;
video{
  position:absolute;
  right:0;
  bottom: 0;
  min-width:100% ;
  min-height:100%;

  
  z-index: 20px;

  

}
.vidContent{
position: absolute;
z-index: 30px;
bottom: 0;
width: 100%;
height: 200px;
background:linear-gradient(to bottom,rgba(0,0,0,0.02),rgba(0,0,0,0.05),rgba(0,0,0,0.7),rgba(0,0,0,0.8));
display: flex;
flex-direction: column;
justify-content: flex-end;
padding: 20px;
span{
    color: white;
    width: 50%;
    :first-child{
    font-weight: bold;
    font-size: 60px;
    }
    :nth-child(2){
        font-size: 20px;
        text-align: justify;
    }
}
}
`;
export default function MyVideo() {
    return (
        <StyledContainer>
           <video autoPlay muted loop>
                        <source src='https://res.cloudinary.com/nutscoders/video/upload/v1656936967/bgViiii_dx81hl.mp4' type="video/mp4" />
            </video>
            <div className='vidContent'>
                <span>Campus Life</span>
                <span>
                The critical irreducible element is therefore learning whether in a 
                formal or in an informal way. Consequently, whenever learning takes place, 
                education has equally taken place. 
                </span>
            </div>
        </StyledContainer>
    )
}
