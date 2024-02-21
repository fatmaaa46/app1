import React from 'react';
import { card } from './constants/constants';
import Navbar from './components/Navbar';
import ImgHeader from './components/ImgHeader';
import Icons from './components/Icons/Icons';
export default function Home() {
  
  
  return (
   <div>
    <ImgHeader/>
    <Navbar />
<div className="containers">
        {Object.values(card.shoplist).map((item: any, id: number) => (
          <div key={id}>
            <a href={`/components/Boutiques`}>
              <img src={item.image} alt={`Produit`} className="image" />
            </a>
            <p>{item.Company} </p>
            <p>
              {" "}
              {item.Address},{item.PostalCode} {item.town}
            </p>
            <Icons/>
          </div>
        ))}
      </div>
   
   </div>
   
  );
}
