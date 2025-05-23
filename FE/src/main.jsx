
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import WhislistProvider from './Context/WhislistProvider.jsx';
import BasketProvider from './Context/BasketProvider.jsx';
import './reset.css'
createRoot(document.getElementById('root')).render(
<BasketProvider>
<WhislistProvider>
    <App />
  </WhislistProvider>
</BasketProvider>
)
