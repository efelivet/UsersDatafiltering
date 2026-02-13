import './App.css'
import { useState,useEffect } from 'react';
import axios from "axios"
import Table from "./Table"


interface Data {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
}

function App() {

  const [value, setValue] = useState("");
  const [filteredData,setFilteredData] =useState<Data[]>([])

   useEffect(()=>{
    try{
      const fetchUsers = async()=>{
         const res = await axios.get<Data[]>(`http://localhost:5000?q=${value}`)
      setFilteredData(res.data) 
      }
      fetchUsers()
    
    }catch(e){
      console.log(e)
    }
  
   },[value]
   )

const handleChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
  setValue(e.currentTarget.value)
}
  return (
    <div className='wrapper' >
       
      <div style={{marginTop:"8px"}}>
        <input placeholder='search' onChange={handleChange}/>
      </div>
      
      
        <Table items ={filteredData}/>
      
   
    </div>
  )
}

export default App
