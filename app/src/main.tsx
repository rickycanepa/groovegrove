import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.tsx'
import { Auth } from './components/auth.tsx';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <main>
      <Routes>
        <Route path="/">
          <Route
            index
            element={ <App /> }
          />
          {/* <Route path="profile" element={ isLoggedIn ? <Profile userProfile={userProfile}/> : <Navigate to="/login" /> }/> */}
          <Route path="login" element={<Auth />} />
          {/* <Route path="register" element={<Register />} /> */}
          <Route path="*" element={<p>Whoops, nothing here...</p>} />
        </Route>
      </Routes>
      </main>
    </Router>
  </React.StrictMode>,
)