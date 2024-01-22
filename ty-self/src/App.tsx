// 데이터 생성 - 출력(컴포넌트 활용) - 글쓰기
import React, { useState, useRef } from 'react';
import dataType from './modal/dataType';
import './App.css';
import Item from './Item';

function App() {
  const [data, setData] = useState<dataType[]>([]);
  const [txt, setTxt] = useState<string>('');

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTxt(e.target.value)
  }

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = {
      id: new Date().getTime(),
      name: txt,
      date: '2024-01-22'
    }
    setData([...data, d])
  }

  return (
    <div className="App">
      <div>
        <form onSubmit={submit}>
          <input type="text" name="name" onChange={change} defaultValue={txt} />
          <input type="submit" value="출력" />
        </form>
      </div>
      <div>
        <Item data={data} />
      </div>
    </div>
  );
}

export default App;
