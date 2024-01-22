import React from 'react';
import { initTy } from './model/dataType';

// type initTy = {id: number, name: string, date: string}
interface Own {
    obj: initTy
}

// 컴파일 시점에서 형식을 지정해야함!
// data.map에서 {obj:{}} 형태니까 {obj}로 한꺼풀 벗겨주는 것임!
// {obj:{ id: 0, name: '홍길동', date: '2024-01-22' }}
function Item({ obj }: Own) {
    // console.log(obj)
    return (
        <p>{obj.name}</p>
    );
}

export default Item;