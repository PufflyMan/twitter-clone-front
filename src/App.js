import React from 'react';
import axios from 'axios';
import './App.css';
import Tweet from './components/Tweet.js';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [data, setData] = React.useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://coursera-twitter-api.herokuapp.com/tweets')
      setData(response.data)
    }
    catch (error) {
      console.error(error);
    }
  }

  React.useEffect(() => {
    // console.log("meow");
    fetchData();
  })

  return (
    <div className="App">
      <div className='whole' style={{background: 'black', padding: '30px'}}>
      {data.map(tweet => <Tweet key={tweet.id} {...tweet}/>)}
      </div>
    </div>
  );
}

export default App;
