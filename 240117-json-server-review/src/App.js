/* eslint-disable */

import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [text, setText] = useState([]);

  const instance = axios.create({
    baseURL: 'http://localhost:3333/test',
    timeout: 1000
  })

  async function getData() {
  await instance.get('/')
    .then(res => {
      setData(res.data)
    })
  }

  const postData = async (d) => {
    await axios.post('http://localhost:3333/test', d)
  }

  function delData(id) {
    console.log("delData id", id)
    axios.delete('http://localhost:3333/test/' + String(id))
      .then(res => {
        console.log(res.data)
      })
  }

  const onChangeHandler = (e)=>{
    setText('')
    setText(e.target.value)
    // console.log(text, 'text')
  }

  const onDeleteHandler = (id) =>{
    delData(id)
    getData();
  }

  const onClickHandler = (e)=>{
    // input의 데이터를 Post
    if (text === "") return
    const idx = new Date;
    const params = { id: idx.getTime().toString(), name: text }
    postData(params)
    getData();
  }

  useEffect(() => {
    getData();
  }, [])
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
      <article>
        <h2>글쓰기</h2>
        {/* onSubmit={submit} */}
        <form>
          <input type="text" name="txt" value={text} onChange={onChangeHandler}/>
          <input type="submit" value="저장" onClick={onClickHandler}/>
        </form>
      </article>
      <article>
        <h2>리스트</h2>
        <ul>
        {
            data.map((obj) => {
              return <li key={obj.id}>
                {obj.name}
                <button onClick={() => { onDeleteHandler(obj.id) }}>삭제</button>
              </li>
            })
          }
          </ul>
        </article>
    </div>
  );
}

export default App;
