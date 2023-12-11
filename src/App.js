import logo from './logo.svg';
import './App.css';
import {useState, useEffect, useRef} from 'react';
import { Routes, Route } from 'react-router-dom';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Body from './Body';
import Filter from './Filter'
import AddCard from './AddCard';
import EssayForm from './EssayForm';
import './Css/Component.css';

function App() { 
  const [selected, setSelected] = useState([]);
  let [count_record, setCountrecord] = useState();
  const [loading, setLoading] = useState(true);
  let [counter, setCounter] = useState(0);
  let [user_id, setUser_Id] = useState(0);
  const result = async () => {
    const res =  await axios.post('http://localhost:4500/protected_url', {counter, user_id});
      setLoading(res.data.status);
      setCounter(res.data.counter);
      setUser_Id(res.data.user_id);
      console.log(res.data.status);
      return(res.data.status);
  }
  result();
  let content;
  useEffect(() => {

  

  content = result() ? <EssayForm loading={loading} setLoading={setLoading} 
                                       counter={counter} setCounter={setCounter}
                                       user_id={user_id} setUser_Id={setUser_Id}/> :
  <div>
    <Header setLoading={setLoading} counter={counter} setCounter={setCounter}
            user_id={user_id} setUser_Id={setUser_Id}/>
    <Filter setSelected={setSelected} selected={selected} 
           count_record={count_record}/>
    <AddCard count_record={count_record} setCountrecord={setCountrecord}/>
    <Body selected={selected} count_record={count_record}/>
  </div>
}, [result()]);
return (
  <div>
    {content}
  </div>
)

}



export default App
