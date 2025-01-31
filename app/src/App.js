import React, { useState } from 'react';
import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { Button } from 'primereact/button';
import Keycloak from 'keycloak-js';

/*
  Init Options
*/
let initOptions = {
  realm: 'vizsphere',
  url: 'http://localhost:8080',
  clientId: 'react_keycloak'
}

let kc = new Keycloak(initOptions);

kc.init({
  onLoad: 'login-required', // Supported values: 'check-sso' , 'login-required'
  checkLoginIframe: true,
  pkceMethod: 'S256'
}).then((auth) => {
  if (!auth) {
    window.location.reload();
  } else {
    /* Remove below logs if you are using this on production */
    console.info("Authenticated");
    console.log('auth', auth)
    console.log('Keycloak', kc)
    console.log('Access Token', kc.token)

    kc.onTokenExpired = () => {
      console.log('token expired')
    }
  }
}, () => {
  /* Notify the user if necessary */
  console.error("Authentication Failed");
});

function App() {

  const [infoMessage, setInfoMessage] = useState('');

  return (

    <div className='App'>
      <h4> Press F12 to see Keycloak access in console</h4>

      <div>
        <Button className='btn' onClick={() => { kc.login() }}
          label='Login'
          severity='success' />
      </div>

      <div>
        <Button onClick={() => { kc.logout({ redirectUri: 'http://localhost:3000' }) }}
          label='Logout'
          security='danger' />

      </div>
    </div>
  );
}


export default App;
