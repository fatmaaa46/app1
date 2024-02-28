import store from '@/app/components/store';
import { Listcard } from '@/app/constants/Listcard';
import React from 'react'
import { useSnapshot } from 'valtio';

function CardProduit() {
    const { id } = useSnapshot(store)
    let card = Listcard[id];
    return (
        <div className="container">
            <div className="row">
                {Object.keys(card.categories.items).map((itemId: string) => (
                    <div className="col-sm my-3">
                        <div className="card" style={{ width: '22rem' }}>

                            {card.items[itemId].id}

                        </div>
                    </div>
                ))};
            </div>
        </div>
    )
};

export default CardProduit
