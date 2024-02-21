import Icons from '@/app/components/Icons/Icons';
import ImgHeader from '@/app/components/ImgHeader'
import { card } from '@/app/constants/constants'
import React from 'react'

function Header() {
    const companyIndexToShow = 2; 
    const companyToShow:any = Object.values(card.shoplist)[companyIndexToShow];

  return (
    <div className='img' style={{ position: 'relative' }}> 
    <ImgHeader/>
          <div className="containers" style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <div>
          <p>{`${companyToShow.Company.replace(/\s/g, "")}`}  </p>
          <p>ouvert de {companyToShow.openingTime1 } à {companyToShow.closingTime1} et de {companyToShow.openingTime2}  à {companyToShow.closingTime2}</p>
          <p>
            {" "}
            {companyToShow.Address},{companyToShow.PostalCode} {companyToShow.town}   
          </p>
          <a href=''>Informations utiles</a>
            <div></div>
            <Icons/>
        
        </div>
        </div>
        </div>

  )
}

export default Header
