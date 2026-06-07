import React, {useEffect,useState} from 'react'
import { data } from 'react-router-dom';

const Effect = () => {
  const [count,setcount]=useState(0);
  const [like,setlike]=useState(0);
  const [data,setData]=useState([]);

  // usesEffect(calback function,dependancy array);
  // usesEffect(()=>{},[]);

  useEffect(()=>{ 
    console.log("Component Re-render");
},[])

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
     .then((res)=>res.json())
     .then((users)=>setData(users))
  },[])
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setcount(count+1)}>+</button>
      <h1>{like}</h1>
      <button onClick={()=>setlike(like+1)}>❤️</button>
      {data.map((user)=>(
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  )
}

export default Effect