import React from 'react'
import { useRouter } from "next/navigation";
import ImgHeader from '@/app/components/ImgHeader';
import { Navbar } from '@nextui-org/react';

import CardBoutique from './CardBoutique';

function ListeBoutique() {


  return (
    <div>
      <ImgHeader />

      <div className="container">
        <Navbar />
        <div className="row">
          <CardBoutique />
        </div>
      </div>


    </div>
  )
}

export default ListeBoutique
