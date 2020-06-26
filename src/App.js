import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBox from './components/SearchBox.js'
import ChangeButton from './components/ChangeButton.js'

function App() {
  return (
   <div>
     <SearchBox props={{engine: "Google"}} />
       <SearchBox props={{engine: "Amazon"}} />
       <SearchBox props={{engine: "Youtube"}} />
       <SearchBox props={{engine: "Reddit"}} />
       <SearchBox props={{engine: "Google_Images"}} />
       <ChangeButton />
   </div>
  )
}

export default App;
