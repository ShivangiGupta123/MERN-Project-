import logo from './logo.svg';
import './App.css';
import Navbar from '../src/components/navbar/Navbar';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import Clients from './components/clients/Clients';
import CreateClientForm from './components/clients/CreateClientForm';
import UpdateClientForm from './components/clients/UpdateClientForm';
import ClientPanel from './components/clients/ClientPanel';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/clients" element={<Clients/>}/>
        <Route path="/createClient" element={<CreateClientForm/>}/>
        <Route path="/updateClient" element={<UpdateClientForm/>}/>
        <Route path="/clientPanel" element={<ClientPanel/>}/>

        


      </Routes>
      </BrowserRouter>
      

    </div>
  );
}

export default App;
