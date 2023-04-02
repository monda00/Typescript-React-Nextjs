import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import Hello from './components/Hello'
import Name from './components/Name'
import Message from './components/Message'
import ContainerSample from './components/ContainerSample'
import ContextSample from './components/ContextSample'
import reportWebVitals from './reportWebVitals'
import Parent from './components/Parent'
import ButtonParent from './components/ButtonParent'
import { UseMemoSample } from './components/UseMemoSample'
import { Clock } from './components/Clock'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Clock />
    <UseMemoSample />
    <ButtonParent />
    <Parent />
    <Hello />
    <Name />
    <Message />
    <ContainerSample />
    <ContextSample />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
