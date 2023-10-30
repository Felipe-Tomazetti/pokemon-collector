import Home from "./pages/Home/Home";
import GlobalStyles from './assets/styles/globalStyled'
import { BrowserRouter, Route } from 'react-router-dom';

function App() {

  return (<>
    <GlobalStyles/>
    <Home/>
  </>
  )
}

export default App;
