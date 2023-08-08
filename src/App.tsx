import Navbar from "@/scenes/navbar";
<<<<<<< HEAD
import { useState } from "react";

function App() {
  const [ selectedPage ,setSelectedPage ] = useState("home");

  return <div className="app bg-gray-20">
    
    <Navbar 
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
      />
=======

function App() {
  return <div className="app bg-gray-20">
    
    <Navbar />
>>>>>>> fb700420be0f15d258644693b3715d6eb50a9e1a
    
  </div>;
}

export default App;
