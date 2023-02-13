import React from 'react'

const ThemeCardComponent = ({themeName,themePhoto}) => {
  return (
    <>
        <div className='card bg-dark m-3' style={{"width": "18rem", "height": "15rem" , backgroundImage:`url(${themePhoto})` 
        , backgroundPosition: "center",
    backgroundSize: "cover"}}>
            <div className='card-body'>
                <h5 className='card-title' style={{"color": "gold"}}>{themeName}</h5>
            </div>
        </div>
    </>
  )
}

export default ThemeCardComponent