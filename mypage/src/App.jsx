import './App.css'
import Layout from "./components/layout";
import Navbar from "./components/navbar";
import PhotoGrid from "./sections/Photo"
import Footer from "./sections/Footer"
import Skills from "./sections/Skills"
import MyProject from "./sections/Project"
import EducationAndWork from './sections/EducationAndWork';

function App() {
  

  return (
    <Layout>
      <Navbar />
      <PhotoGrid />
      <Skills />
      <MyProject />
      <EducationAndWork />
      <Footer />
    </Layout>
  )
}

export default App
