import './assets/main.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './provider/theme-provider'
import { Toaster } from './components/ui/toaster'
import { CartProvider } from './hooks/useReducer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <CartProvider>
          <App />
          <Toaster />
        </CartProvider>
      </ThemeProvider>
    </React.StrictMode>
  </BrowserRouter>
)
