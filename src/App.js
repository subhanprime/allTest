import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.scss';
import ErrorBoundries from './ErrorBoundries';
import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import Hero from './pages/hero/hero'
import Coin from './pages/coin/coin';
import UserList from './comp1';
import PostLayout from './postLayout';
import TodoList from './comp2';
import Post from './post';
import PostDetails from './PostDetails';
import Lazmi from './lazmi';
import Login from './login';
import Dashboard from './dashboard';
import ForCustomHook from './forCustomHook';
const Headers = React.lazy(() => import('./header'));
function App() {

  const isLogged = true;
  const data = {
    name: 'subhan ali',
  }
  const ErrorMsg = ({ error }) => {
    console.log('err count', error.message);
    return (
      <div className='err1'>
        <div>Error sms for component One</div>
        <br></br>
        <div>{error.message}</div>
      </div>
    )
  }
  return (
    <div>
      <Routes>
        <Route path="/" element={<Headers />}>
          <Route path='login' element={<Login />} />
          <Route path='dashboard' element={isLogged ? <Dashboard /> : <Navigate to="/login" replace state={data} />} />
          <Route index element={<Lazmi />} />
          <Route path='home' element={<Hero />} />
          <Route path='coin' element={<Coin />} />
          <Route path='post' element={<PostLayout />} >
            <Route index element={<Post />} />
            <Route path=':category' element={<PostDetails />} />
          </Route>
        </Route>
        {/* </Route> */}
      </Routes>
      <ErrorBoundries ErrorComponents={ErrorMsg}>
        <Suspense fallback={<div>component two waiting</div>}>
          <ForCustomHook />
        </Suspense>
      </ErrorBoundries>
      <div className='mflex'>
        <Suspense fallback={<div>component two waiting</div>}>
          <ErrorBoundries ErrorComponents={ErrorMsg}>
            <UserList />
          </ErrorBoundries>
        </Suspense>
        <Suspense fallback={<div>component two waiting</div>}>
          <ErrorBoundries ErrorComponents={ErrorMsg}>
            <TodoList />
          </ErrorBoundries>
        </Suspense>
      </div>
    </div >
  );
}
export default App;