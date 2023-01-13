import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from "./components/header";
import Footer from "./components/footer";
import ContactForm from './pages/contactPage';

function App() {
  return (
    <BrowserRouter>
      <Header/>
        {/* <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/myposts" element={<MyPostsPage />} />
      </Routes> */}
      <ContactForm/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;