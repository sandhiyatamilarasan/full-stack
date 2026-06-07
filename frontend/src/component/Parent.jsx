import React, { Children } from 'react'
import Child from './Child'

const Parent = () => {
  return (
    <div>
        <Child name= "sandhiya" age={18}  marks={[90,95,96,98,99]}  person={{name:"swetha",dept:["AIDS","CT"]}}/>
    </div>
    
  )
}

export default Parent
