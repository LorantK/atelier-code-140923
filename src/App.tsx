import axios from 'axios';
import './App.css'
import { useEffect, useState } from 'react';

function App() {
  const [n, setName] = useState('');
  const [a, setAge] = useState('');
  const [look, setLook] = useState(false);

  useEffect(() => {
    if (!!a) {
      setLook(true);
    }
  })

  const handleChange = (event: any) => {
    setName(event.target.value);
  }

  const onClick = () => {
    axios({
      method: 'get',
      url: 'https://api.agify.io?name=' + n,
    })
      .then((response) => {
        setAge(response.data.age)
      });
  }

  return (
    <div>
      <h1>Devine mon âge</h1>
      <input value={n} onChange={handleChange}></input>
      <button onClick={() => onClick()}>Guess !</button>
      {look && <p>Tu as {a} ans !</p>}
    </div>
  )
}

export default App
