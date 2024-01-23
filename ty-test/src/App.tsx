/*
기존 코드 백업
import React, { useState, useRef } from 'react';
import './App.css';
import Item from './Item';
import { initTy } from './model/dataType';

function App() {

  // useRef = 돔이 실행되는 시점에 실행
  // 함수가 실행되는 시점에 타입을 지정함
  const elForm = useRef<HTMLFormElement | null>(null);

  const init: initTy[] = [
    { id: 0, name: '홍길동', date: '2024-01-22' },
    { id: 1, name: '홍길순', date: '2024-01-22' }
  ]

  const [data, setData] = useState(init);

  const save = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (elForm.current) {
      const formdata = new FormData(elForm.current);
      // console.log(Object.fromEntries(formdata), 'formdata')
      const d = {
        id: new Date().getTime(),
        name: formdata.get('name')?.toString(),
        date: '2024-01-22'
      }
      setData([...data, d])
      console.log(data, 'data')
    }
  }

  return (
    <div className="App">
      <div>
        <form ref={elForm} onSubmit={save}>
          <input type="text" name="name" />
          <input type="submit" value="저장" />
        </form>
      </div>
      {
        data.map(obj => (
          <Item key={obj.id} obj={obj} />
        ))
      }
    </div>
  );
}

export default App;

*/
import React, { useState } from 'react';
import './App.css';
import Item from './Item';
import { initTy } from './model/dataType';

function App() {
  // 초기 데이터
  const init: initTy[] = [
    { id: 0, name: '홍길동', date: '2024-01-22' },
    { id: 1, name: '홍길순', date: '2024-01-22' }
  ];

  // 상태 변수 : 데이터와 폼 데이터를 추적
  const [data, setData] = useState(init);
  const [formData, setFormData] = useState({ name: '' });

  // input 값이 변경될 때 호출되는 함수
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const save = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = {
      id: new Date().getTime(),
      name: formData.name,
      date: '2024-01-22'
    };
    // 기존 데이터에 새로운 데이터 추가하고 상태 업데이트
    setData([...data, d]);
    // 폼 데이터 초기화
    setFormData({ name: '' });
  };

  return (
    <div className="App">
      <div>
        <form onSubmit={save}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input type="submit" value="저장" />
        </form>
      </div>
      {data.map(obj => (
        <Item key={obj.id} obj={obj} />
      ))}
    </div>
  );
}

export default App;
