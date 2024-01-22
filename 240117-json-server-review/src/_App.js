import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  const instance = axios.create({
    baseURL: 'http://localhost:3333/test',
    timeout: 1000
  })

  // get(생성)
  // async-await
  // 비동기 호출은 then 처리보다 아래 응답이 더 빨리오는 경우가 있기 때문에(먼저가욥~) then이 끝날때까지 기다리고 처리되도록 한다!

  async function getData() {
  await instance.get('/')
    .then(res => {
      console.log(res.data, 'data')
    })
    console.log('data2')
  }

  getData();
    /*

    // post(추가)
    axios.post('http://localhost:3333/test', { name: '연어덮밥' })
    .then(res => {
      console.log(res.data)
    })


    // delete(삭제)
    axios.delete('http://localhost:3333/test/d9c3')
    .then(res => {
      console.log(res.data)
    })

    axios.put('http://localhost:3333/test/8961',{name:'농담곰'})
    .then(res=>{
      console.log(res.data)
    })

    */

    



  return (
    <div>
      {
        
      }
    </div>
  );
}

export default App;
