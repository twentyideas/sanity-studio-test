import React from 'react'
import ReactDOM from 'react-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { createWebStoragePersistor } from "react-query/createWebStoragePersistor-experimental"
import { persistQueryClient } from "react-query/persistQueryClient-experimental"
import App from './App'
import './index.css'


 const queryClient = new QueryClient({
   defaultOptions: {
     queries: {
       cacheTime: 1000 * 60 * 60 * 24, // 24 hours
     },
   },
 });

 const localStoragePersistor = createWebStoragePersistor({
   storage: window.localStorage,
 });

 persistQueryClient({
   queryClient,
   persistor: localStoragePersistor,
 });
ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
