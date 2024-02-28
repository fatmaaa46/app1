import React from 'react'
import ImgHeader from '@/app/components/ImgHeader';
import { Navbar } from '@nextui-org/react';

import CardBoutique from './CardBoutique';
import Header1 from '@/app/components/Header1';

function ListeBoutique() {


  return (
    <div>
      <Header1 />
      <ImgHeader />

      <div className="container">
        <Navbar />
        <div className="row" >
          <CardBoutique />
        </div>
      </div>


    </div>
  )
}

export default ListeBoutique
