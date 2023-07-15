import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { createContext } from 'react';

const app = initializeApp({
 //я запрещаю вам брать мои данные :)
});
const auth = getAuth(app)
const firestore = getFirestore(app)

export const FirebaseContext = createContext({ app, auth, firestore })

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <FirebaseContext.Provider value={{
    app,
    auth,
    firestore,
  }}>
    <BrowserRouter >
      <App />
    </BrowserRouter>
  </FirebaseContext.Provider>
);

