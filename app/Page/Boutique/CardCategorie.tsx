import Modal from '@/app/components/Modal/Modal';
import store from '@/app/components/store';
import { Listcard } from '@/app/constants/Listcard';
import React, { useState } from 'react'
import { useSnapshot } from 'valtio';
function CardCategorie() {
  const {id}= useSnapshot(store) 
 
  const [showModal, setShowModal] = useState(false);

  const handleCommandeClick = () => {
    setShowModal(true);
  };


  let card = Listcard[id]; 
  return (
<div className="container">
<div className="row">
{Object.entries(card.categories).map(([key, value]: any) => (
     <div className="col-sm my-3">
      <div className="card" style={{ width: '22rem'   }}>
       <h5 className="card-title"  style={{ textAlign: "center"}}>{value.title}</h5>
     <img className="card-img-top" src={value.imageUrl.Default.urlDefault ? value.imageUrl.Default.urlDefault :"https://www.commande-pizzatime.fr/CESARWEB_WEB/repimage/83bbc4350c114000b0e2d6c4ff204215/3/web/Famille122.webp" } alt="Card image cap" />

     <div className="card-body"> 

     <button

  className="mt-5 py-2 text-center h5 rounded font-weight-bold border-0"
  type="button"
  style={{
    backgroundColor: "#28a745",
    cursor: "pointer",
    color: "white",
    width: "20rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}
  onClick={handleCommandeClick} // Ajoutez cet événement au bouton Commander
>
  <span className="btn-txt">Commander</span>
</button>


    
    </div>

   </div>
  </div> 
))};
</div>
    {showModal && <Modal  showModal= {showModal}  setShowModal = {setShowModal}  />} {/* Affichez le modal si showModal est vrai */}
</div>
)};
export default CardCategorie
