import React from 'react';
import dataType from './modal/dataType';

interface Own {
    data: dataType[]
}

function Item({ data }: Own) {
    return (
        <div>
            {
                data.map((item) => {
                    return <p key={item.id}>{item.name}</p>
                })
            }
        </div>
    );
}

export default Item;