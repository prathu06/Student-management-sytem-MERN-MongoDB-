import{useState,useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function Home()
{
const nav=useNavigate();
const[data,setData]=useState([]);

useEffect(()=>{
let url="https://sms16jan24.onrender.com/read";
axios.get(url)
.then(res=>setData(res.data))
.catch(err=>alert("issue "+err));
},[]);

const delStu=(rno)=>{
let url="https://sms16jan24.onrender.com/remove";
let d={data:{rno}};
axios.delete(url,d)
.then(res=>{
alert("Record deleted");
window.location.reload();
})
.catch(err=>alert("issue "+err));
}
const updateStu=(r,n,m)=>{
nav("/update",{state:{r,n,m}})
}

return(
<>
<center>
<h1> Home Page</h1>

<table border="5" style={{"width":"70%"}}>
<tr>
<th> Rno </th>
<th> Name </th>
<th> Marks </th>
<th> Update </th>
<th> Delete </th>
</tr>

{
data.map((e)=>(
<tr style={{"text-align":"center"}}>
<th> {e._id}</th>
<th> {e.name}</th>
<th> {e.marks}</th>
<th> <button onClick={()=>{updateStu(e._id,e.name,e.marks)}}>Update</button></th>
<th> <button onClick={()=>{ if(window.confirm('Are you sure?')) delStu(e._id)}}>Delete</button></th>
</tr>
))
}
</table>
</center>
</>
);
}

















