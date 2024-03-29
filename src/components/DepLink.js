import { Divider, ListItemButton, ListItemText } from '@mui/material'
import React, { useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import AppContext from '../Context/app/appContext'
export default function DepLink({link='',route,id}) {
    const myAppParam=useContext(AppContext)
    const navigate=useNavigate()
    let filtered=''
    if (link.includes('of')) {
        filtered=link.split('of')[1]
    }else{
        filtered=link
    }
    
    return (
     <div>
<ListItemButton onClick={()=>{
// fetch(`https://new-modibbo-adama.herokuapp.com/admin/get-single-department?departmentId=${id}`)
// .then(res => {
//     res.json()
//         .then(data => {
//            myAppParam.loadDep(data.message)
//            navigate(route,{replace:true})
           
//         })  
// })
navigate(route)

}}  style={{
    color:'#D07348'
}}>
  <ListItemText primary={filtered} />
</ListItemButton>
<Divider style={{backgroundColor:'#D07348'}}/>
        </div>
    )
}
