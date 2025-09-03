import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from './pages/HomePage.jsx';
import ProductPage from './pages/ProductPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/product/:id/:name" element={<ProductPage/>} />
            <Route path="/profile/:facebookId/:youtubeId" element={<ProfilePage/>} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App