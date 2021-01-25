import { useState, useEffect } from 'react';
import fire from './firebase';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  // Cleaning inputs and errors
  const clearInputs = () => {
    setEmail('');
    setPassword('');
  };

  const clearErrors = () => {
    setError('');
  }

  // Controllers
  const handleLogIn = () => {
    clearErrors();
    fire
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(err => {
      setError(err.message);
    }); 
  };

  const handleSignUp = () => {
    clearErrors();
    fire
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(err => {
      setError(err.message);
    }); 
  };

  const handleLogOut = () => {
    fire.auth().signOut();
  };

  useEffect(() => {
    const authListener = () => {
      fire.auth().onAuthStateChanged((user) => {
        if (user) {
          clearInputs();
          setUser(user);
        } else {
          setUser('');
        }
      });
  };
  authListener();
  }, []);

  
  // app
  return (
    <div className="App">
      {user ? (
        <Home handleLogOut={handleLogOut}/>
      ) : (
        <Login 
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogIn={handleLogIn}
          handleSignUp={handleSignUp}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          handleError={error}
        />
      )}
    </div>
  );
}

export default App;
