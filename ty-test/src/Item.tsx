import React from 'react';
import { objTy } from './model/dataType';

// 컴파일 시점에서 형식을 지정해야함!
function Item({ obj }: objTy) {
    console.log(obj)
    return (
        <p>{obj.name}</p>
    );
}

export default Item;