import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Home/Shared/Header/Header';
import Footer from './Pages/Home/Shared/Footer/Footer';
import Detail from './Pages/Detail/Detail';
import AuthProvider from './Context/AuthProvider';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login';
import PriveteRoute from './PriveteRoute/PriveteRoute';
import Doctors from './Pages/Doctors/Doctors';
import AboutUs from './Pages/AboutUs/AboutUs';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/doctors">
            <Doctors></Doctors>
          </Route>
          <Route path="/aboutus">
            <AboutUs></AboutUs>
          </Route>
          <PriveteRoute path="/service/:detailid">
            <Detail></Detail>
          </PriveteRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
