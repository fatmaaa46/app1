import Icons from '@/app/components/Icons/Icons';
import ImgHeader from '@/app/components/ImgHeader'
import store from '@/app/components/store';
import { ListShop } from '@/app/constants/ListShop';
import { card } from '@/app/constants/constants'
import React from 'react'
import { useSnapshot } from 'valtio/react';

function Header() {
    
    const {id}= useSnapshot(store)  
  
   const companyToShow: any = ListShop[id];
  

  return (
    <div className='img' style={{ position: 'relative' }}> 
     <ImgHeader/>
        <div
        className=""
        style={{
          position: "absolute",
          top: "50%",
          left: "10%", // Adjusted to position to the right
          transform: "translateY(-50%)",
          backgroundColor: "#d7c7c7", // White background
          color: "#000000", // Black text color
          padding: "2px",
          borderRadius: "10px", // Slightly rounded corners
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)", // Box shadow for depth
        }}
      >
         
        <div>
          <p>{`${companyToShow.Company.replace(/\s/g, "")}`}  <br /> <br /> 
          ouvert de {companyToShow.openingTime1 } à {companyToShow.closingTime1} et de {companyToShow.openingTime2}  à {companyToShow.closingTime2} <br /> 

            {companyToShow.Address},{companyToShow.PostalCode} {companyToShow.town} <br />   
            <a href=''>Informations utiles</a>
          </p>
          
            <Icons/>
        
        </div>
        </div> 
        </div>

  )
}

export default Header
