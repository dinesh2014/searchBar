import React, { useEffect, useState } from 'react'
import headerStyle from './Header.module.css'

function Header(props){
    const [search , setSearch]=useState('')
    const getSearch =(event)=>{
        let searchTerm = event.target.value
        setSearch(searchTerm)
    }
    useEffect(()=>{
        props.searchTerm(search.toLowerCase())
    })   
    return(
            <div  className={headerStyle.head}>  
             <h1 className={headerStyle.search}>Search Bar</h1>  
             <input type="text" onChange={getSearch} className={headerStyle.searchbar} placeholder="Search" /> 
            </div>
        )
}

export default Header;