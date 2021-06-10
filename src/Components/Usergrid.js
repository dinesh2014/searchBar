import React, { useState,useContext } from 'react'
import Searchcontext from "../Context/Searchcontext";
import userData from '../Data/MOCK_DATA-5.json'
import usergridStyle from './Usergrid.module.css'

function Usergrid(props){
    let [users,setUsers]=useState(userData)
    let searchTerm = useContext(Searchcontext)
    var user =""

    if(!searchTerm){
        user = users.filter((items)=>{
            return true;
        })    
    }else if(String(searchTerm).charAt(0) === '"' & String(searchTerm).charAt(String(searchTerm).length - 1) === '"'){
        searchTerm = String(searchTerm).substring(1, String(searchTerm).length-1);
        user = users.filter((items)=>{
            let name = items.name
            let location =items.location
            return (name.toLowerCase()).includes(String(searchTerm).toLowerCase())||(location.toLowerCase()).includes(String(searchTerm).toLowerCase())
    })}else{
        user = users.filter((items)=>{
            let name = (items.name).toLowerCase()
            let location = (items.location).toLowerCase()
            let Sname = name.split(" ")
            let Slocation = location.split(" ")
            if(new RegExp(Sname.join("|")).test(searchTerm) | new RegExp(Slocation.join("|")).test(searchTerm)){
                return true
            }else{
                return false
            }
        })
    }
      

    return(
        user.map((items)=>
            <div key={items.id} className={usergridStyle.grid}>
                <p className={usergridStyle.name}><b>Name :</b> {items.name}</p>
                <p className={usergridStyle.location}><b>Location :</b> {items.location}</p>
            </div>
        )
    )
}

export default Usergrid;