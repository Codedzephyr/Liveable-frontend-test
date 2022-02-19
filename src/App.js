import './App.css';
import Homepage from './Components/Homepage';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ViewCommits from './Components/ViewCommits';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<App/>}/>
      <Route index element = {<Homepage/>}/>
      <Route path = "commits" element = {<ViewCommits/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
