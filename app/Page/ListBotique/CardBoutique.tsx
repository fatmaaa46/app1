import Icons from '@/app/components/Icons/Icons';
import { setId } from '@/app/components/store';
import { ListShop } from '@/app/constants/ListShop';
import { useRouter } from "next/navigation";
import React from 'react';

function CardBoutique() {
  const router = useRouter();

  // Fonction pour naviguer vers une autre page avec l'ID
  const navigateToOtherPage = (id: number) => {
    setId(id);
    localStorage.setItem("id", id.toString());
    router.push('/components/Boutiques');
  };

  return (
    <div className="row">
      {Object.values(ListShop).map((item: any, id: number) => (
        <div className="col-md-4 my-3" key={id} onClick={() => navigateToOtherPage(item.shopid)}>
          <div className="card" style={{ width: "100%", height: "100%" , cursor:"pointer" }}>
            <img className="card-img-top" src={item.image} alt="Card image cap" style={{ height: "300px" }} />
            <div className="card-body">
              <h5 className="card-title" style={{ minHeight: "50px" }}>
                {item.Company}
              </h5>
              <p className="card-text" style={{ maxHeight: "60px", overflow: "hidden" }}>
                {item.Address}, {item.PostalCode} {item.town}
              </p>
              <div>
                <Icons />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardBoutique;
