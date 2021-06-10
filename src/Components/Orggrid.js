import React, { useState,useContext } from 'react'
import Searchcontext from "../Context/Searchcontext";
import orgData from '../Data/MOCK_DATA-6.json'
import orggridStyle from './Orggrid.module.css'

function Orggrid(props){
    let [company , setCompany]=useState(orgData)
    let searchTerm = useContext(Searchcontext)


    if(!searchTerm){
        var Organization = company.filter((items)=>{
            return true;
        })
    }else if(String(searchTerm).charAt(0) == '"' && String(searchTerm).charAt(String(searchTerm).length - 1) == '"'){
            searchTerm = String(searchTerm).substring(1, String(searchTerm).length-1);
            var Organization = company.filter((items)=>{
            let company = items.company
            let location = items.location
            return (company.toLowerCase()).includes(String(searchTerm).toLowerCase())||(location.toLowerCase()).includes(String(searchTerm).toLowerCase())
        })
     }else{
            var Organization = company.filter((items)=>{
            let company = (items.company).toLowerCase()
            let location = (items.location).toLowerCase()
            let Cname = company.split(" ")
            let Clocation = location.split(" ")
            if(new RegExp(Cname.join("|")).test(searchTerm) | new RegExp(Clocation.join("|")).test(searchTerm)){
                return true
            }else{
                return false
            }
        })
     }



    return(
        Organization.map((items)=>
            <div key={items.id} className={orggridStyle.grid}>
                <p className={orggridStyle.name}><b>Company :</b> {items.company}</p>
                <p className={orggridStyle.location}><b>Location :</b> {items.location}</p>
            </div>
        )
    )
}

export default Orggrid;