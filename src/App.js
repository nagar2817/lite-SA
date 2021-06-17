import React from 'react';
import './App.css';
import { Switch,Route } from 'react-router-dom';
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shoppage/shopage.component.jsx";
import Header from "./Component/header/header.Component.jsx";
import SignIn from './Component/SignIn/signIn.component';

function App() {
  return (
    <div>
    <Header/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route  path="/shop" component={ShopPage}/>
        <Route  path="/sign" component={SignIn}/>
      </Switch>
    </div>
  );
}

export default App;
