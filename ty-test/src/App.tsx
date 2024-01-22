import React, { useState } from 'react';
import './App.css';
import Item from './Item';

function App() {

  const init = [
    { id: 0, name: '홍길동', date: '2024-01-22' },
    { id: 1, name: '홍길순', date: '2024-01-22' }
  ]

  const [data, setData] = useState(init);

  return (
    <div className="App">
      {
        data.map(obj => (
          <Item key={obj.id} obj={obj} />
        ))
      }
    </div>
  );
}

export default App;
