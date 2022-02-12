import axios from 'axios';

function App() {
  const post = () => {
    axios.post('http://localhost:4000/login', { id: 'test', password: '12345' }).then((res) => {
      console.log(res);
    });
  };

  return <button onClick={() => post()}>버튼</button>;
}

export default App;
