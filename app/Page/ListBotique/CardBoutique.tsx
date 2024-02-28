import Icons from '@/app/components/Icons/Icons';
import { setId } from '@/app/components/store';
import { ListShop } from '@/app/constants/ListShop'
import { useRouter } from "next/navigation";

import React from 'react'

function CardBoutique() {

    const router = useRouter();
    const navigateToOtherPage = (id:number) => {
       setId(id)
      localStorage.setItem("id",id.toString())
      router.push('/components/Boutiques');
    };
    
  return (
    <div className="row " style={{cursor : "pointer"}}>
          {Object.values(ListShop).map((item: any, id: number) => (
            <div
              className="col-sm my-3"
              key={id}
              onClick={() => navigateToOtherPage(item.shopid)}
            >
              <div className="card" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src={item.image}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ minHeight: "50px" }}>
                    {item.Company}
                  </h5>
                  <p className="card-text">
                    {item.Address},{item.PostalCode} {item.town}
                  </p>
                  <div>
                    <Icons />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
  )
}

export default CardBoutique
