import React from 'react'

const Header = ({setIsAdding}) => {
  return (
    <header>
        <h1>Employees Management Software</h1>
        <div style={{marginTop:'30px' , marginBottom:'18px'}}>
            <button onClick={()=>setIsAdding(true)} className='round-button'>Add Employee</button>
        </div>
    </header>
  )
}

export default Header