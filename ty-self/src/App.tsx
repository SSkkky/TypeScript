// 데이터 생성 - 출력(컴포넌트 활용) - 글쓰기
import React, { useState, useRef } from 'react';
import dataType from './modal/dataType';
import './App.css';
import Item from './Item';
import { ScriptTarget } from 'typescript';

function App() {
  const elInput = useRef<HTMLInputElement>(null);

  const [data, setData] = useState<dataType[]>([]);
  const [alter, setAlter] = useState('');
  const [txt, setTxt] = useState<string>('');

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTxt(e.target.value)
  }

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let d = null;

    if (alter.length === 0) {
      d = { id: new Date().getTime(), name: txt, date: '2024-01-22' }
      setData([...data, d])
    } else {
      console.log(alter, 'alter')
      // d = { id: alter[0].id, name: txt, date: '2024-01-22' }
      setAlter('');
      // setData([d])
    }
  }

  const put = (item: dataType) => {
    // console.log(item)
    if (elInput.current) {
      elInput.current.value = item.name;
      setAlter(item)
      console.log(alter, 'alter-put')
      // console.log(alter, 'alter')
      // console.log(alter[0], 'alter id')
    }
  }

  const del = (id: number) => {
    const d = data.filter((data) => { return data.id !== id })
    setData(d)
  }

  return (
    <div className="App">
      <div>
        <form onSubmit={submit}>
          <input type="text" name="name" onChange={change} defaultValue={txt} ref={elInput} />
          <input type="submit" value="출력" />
        </form>
      </div>
      <div>
        <Item data={data} del={del} put={put} />
      </div>
    </div>
  );
}

export default App;
