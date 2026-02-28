import React from 'react'
const example = () => {
    const {cnt,setcnt}=useState(0)
    function setCnt(cnt)
    {
        cnt=cnt+1
    }
  return (
    <div>
      <button onClick={(cnt)=>setCnt}></button>
      <h1>{cnt}</h1>
    </div>
  )
}

export default example
