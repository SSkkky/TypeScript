import React from 'react';
import dataType from './modal/dataType';

interface Own {
    data: dataType[],
    del: (id: number) => void,
    put: (item: dataType) => void
}

function Item({ data, del, put }: Own) {
    return (
        <div>
            {
                data.map((item) => {
                    return <div key={item.id}>
                        {item.name} | {item.date}
                        <button onClick={() => { del(item.id) }}>삭제</button>
                        <button onClick={() => { put(item) }}>수정</button>
                    </div>
                })
            }
        </div>
    );
}

export default Item;