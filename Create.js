import{useState} from "react";

import axios from "axios";

export default function Create()
{
const[rno,setRno]=useState("");
const[name,setName]=useState("");
const[marks,setMarks]=useState("");
const[msg,setMsg]=useState("");

const hRno=(event)=>{setRno(event.target.value);}
const hName=(event)=>{setName(event.target.value);}
const hMarks=(event)=>{setMarks(event.target.value);}


const save=(event)=>{
event.preventDefault();
let data={rno,name,marks};
let url="https://sms16jan24.onrender.com/save";
axios.post(url,data)
.then(res=>{
if(res.data.insertedId==rno)
{
setMsg("Record Created");
setRno("");
setName("");
setMarks("");
}
else
{
setMsg("Record already exists");
}
})
.catch(err=>setMsg("issue "+err));
}

return(
<>
<center>
<h1> Create Page </h1>
<form onSubmit={save}>
<input type="number" placeholder="Enter roll no" onChange={hRno} value={rno}/>
<br/><br/>
<input type="text" placeholder="Enter name" onChange={hName} value={name}/>
<br/><br/>
<input type="number" placeholder="Enter marks" onChange={hMarks} value={marks}/>
<br/><br/>
<input type="submit" value="Save"/>
<br/><br/>
</form>
<h1>{msg}</h1>
</center>
</>
);
}

