import{useState,useEffect} from "react";
import {useLocation,useNavigate} from "react-router-dom";
import axios from "axios";

export default function Update()
{
const[rno,setRno]=useState("");
const[name,setName]=useState("");
const[marks,setMarks]=useState("");

const hRno=(event)=>{setRno(event.target.value);}
const hName=(event)=>{setName(event.target.value);}
const hMarks=(event)=>{setMarks(event.target.value);}

const loc=useLocation();
const nav=useNavigate();

useEffect(()=>{
setRno(loc.state.r);
setName(loc.state.n);
setMarks(loc.state.m);
},[]);

const save=(event)=>{
event.preventDefault();
let data={rno,name,marks};
let url="https://sms16jan24.onrender.com/modify";
axios.put(url,data)
.then(res=>{
alert("Record Updated");
nav("/");
})
.catch(err=>alert("issue "+err));
}

return(
<>
<center>
<h1> Update Page </h1>
<form onSubmit={save}>
<input type="number" placeholder="Enter roll no" onChange={hRno} value={rno} disabled={true}/>
<br/><br/>
<input type="text" placeholder="Enter name" onChange={hName} value={name}/>
<br/><br/>
<input type="number" placeholder="Enter marks" onChange={hMarks} value={marks}/>
<br/><br/>
<input type="submit" value="Update"/>
<br/><br/>
</form>
</center>
</>
);
}

