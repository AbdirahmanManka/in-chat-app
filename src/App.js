
import './App.css';
import React, { useState } from 'react';
// Integrate the SDK
import { ZIMKitManager, Common } from '@zegocloud/zimkit-react';
import '@zegocloud/zimkit-react/index.css';

import { APP_ID, SERVER_SECRET } from './Constant';
import { useEffect } from 'react';

const id=Math.floor(Math.random()*1000)
function App() {
  const [state, setstate] = useState({
    appConfig: {
        appID: APP_ID,        // The AppID you get from the ZEGOCLOUD admin console.
        serverSecret: SERVER_SECRET // The serverSecret you get from ZEGOCLOUD Admin Console.
    },
    // The userID and userName is a strings of 1 to 32 characters.
    // Only digits, letters, and the following special characters are supported: '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '=', '-', '`', ';', '’', ',', '.', '<', '>', '/', '\'
    userInfo: {
        // Your ID as a user.
        userID: `Manka${id}`,
        // Your name as a user.
        userName: `Manka${id}`,
        // The image you set as a user avatar must be network images. e.g., https://storage.zego.im/IMKit/avatar/avatar-0.png
        userAvatarUrl: 'https://www.websiteplanet.com/blog/make-an-avatar/'
    },
})
useEffect(()=>{
  const init=async () =>{
    const zimKit = new ZIMKitManager();
        const token = zimKit.generateKitTokenForTest
        (state.appConfig.appID, 
          state.appConfig.serverSecret,
           state.userInfo.userID);
        await zimKit.init
        (state.appConfig.appID);
        await zimKit.connectUser
        (state.userInfo, token);
  }
  init();
},[])
  return (
    <div className="App">
     soodhawaw {state.userInfo.userID}
     <Common></Common> 
    
    </div>
  );
}

export default App;
