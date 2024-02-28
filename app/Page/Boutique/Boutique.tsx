import React from 'react'
import Header from './Header'
import MenuCategorie from './MenuCategorie'
import CardCategorie from './CardCategorie'
import Header1 from '@/app/components/Header1'

function Boutique() {
  return (
    <div>
      <Header1 />
       <Header />
     <MenuCategorie /> 
    <CardCategorie /> 
    </div>
  )
}

export default Boutique
