import { BrowserRouter,Route,Routes } from "react-router-dom";
import Create from "./componants/Create";
import Update from "./componants/Update";
import Read from "./componants/Read";
import Home from "./componants/Home";
import 'bootstrap/dist/css/bootstrap.min.css'
const App=()=>{
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/create" element={<Create/>} />
      <Route path="/update/:id" element={<Update/>} />
      <Route path="/read/:id" element={<Read/>} />


    </Routes>
    
    </BrowserRouter>
  )
}
export default App;