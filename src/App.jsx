import Home from "./pages/Home/Home";
import {BrowserRouter, Routes, Route } from "react-router";


function App() {
  return(
    <BrowserRouter>
    <Routes>

      <Route index element={ <Home/> } />
        
    </Routes>
     
    </BrowserRouter>
  )

}



export default App;