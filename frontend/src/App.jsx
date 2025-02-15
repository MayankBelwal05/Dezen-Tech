import Content from "./components/Content";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import DetailForm from "./components/DetailForm";

import './App.css'
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
  <Navbar/>
  <Services/>
  <Content/>
  <DetailForm/>
  <Footer/>
    </>
  )
}