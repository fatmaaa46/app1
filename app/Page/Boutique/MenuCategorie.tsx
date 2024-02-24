
import store from '@/app/components/store';
import { Listcard } from '@/app/constants/Listcard';
import { Card } from '@nextui-org/react'
import React from 'react'
import { useSnapshot } from 'valtio';

function MenuCategorie() {
  const { id } = useSnapshot(store);

  let card = Listcard[id];
  
  return (
    <div style={{ boxShadow: "0px 15px 10px -15px #111" }}>
      <div className="container">
        <Card>
          <div className="d-flex justify-content-between">
            <div className="mt-2">
              <ul style={{ backgroundColor: "#FFFFFF" }}>
                {Object.entries(card.categories)
                  .slice(0, 7)
                  .map(([key, value]: any) => (
                    <li key={key}>{value.title}</li>
                  ))}
              </ul>
            </div>
            {Object.keys(card.categories).length > 7 && (
              <div className="d-flex align-items-center">
                <select className="max-w-xs nav-link mx-5">
                  {Object.entries(card.categories)
                    .slice(7, Object.keys(card.categories).length)
                    .map(([key, value]: any) => (
                      <option key={key} value={value.title}>
                        {" "}
                        {value.title}
                      </option>
                    ))}
                </select>
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  
  )
}

export default MenuCategorie
