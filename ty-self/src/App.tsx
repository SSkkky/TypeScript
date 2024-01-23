// 데이터 생성 - 출력(컴포넌트 활용) - 글쓰기
import React, { useState } from 'react';
import dataType from './modal/dataType';
import './App.css';
import Item from './Item';

function App() {
  const [data, setData] = useState<dataType[]>([]);
  const [alter, setAlter] = useState<dataType[]>([]);
  const [txt, setTxt] = useState<string>('');

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTxt(e.target.value)
  }

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let d = null;

    if (alter.length < 1) {
      d = { id: new Date().getTime(), name: txt, date: '2024-01-22' }
      setData([...data, d])
    } else {
      setData((prevData) =>
        prevData.map((item) =>
          item.id === alter[0].id ? { ...item, name: txt, date: '2024-01-22' } : item
        )
      );
      setAlter([]);
    }
    setTxt('');
  }

  const put = (item: dataType) => {
    setTxt(item.name);
    setAlter([item])
    console.log(alter, 'alter-put')
  }

  const del = (id: number) => {
    const d = data.filter((data) => { return data.id !== id })
    setData(d);
    setAlter([]);
  }

  return (
    <div className="App">
      <div>
        <form onSubmit={submit}>
        <input type="text" name="name" onChange={change} value={txt}/>
          <input type="submit" value={alter.length < 1 ? '출력' : '수정'} />
        </form>
      </div>
      <div>
        <Item data={data} del={del} put={put} />
      </div>
    </div>
  );
}

export default App;
