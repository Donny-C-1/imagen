import './App.css'
import TopBar from './components/topBar/topBar.jsx';
import SideToolBar from './components/sideToolBar/sideToolBar.jsx';
import Panels from './components/panels/panels.jsx';
import Canvas from './components/canvas/canvas.jsx';
import { useRef, useState } from "react";

function App() {
  const [ imageName, setImageName ] = useState('image');
  const canvas = useRef(null);

  const updateName = (name) => setImageName(name);

  return (
    <div className='min-h-screen flex flex-col'>
      <TopBar canvas={canvas} imageName={imageName} updateName={updateName} />
      <div className='flex flex-1 relative bg-bluegray-700'>
        <SideToolBar />
        <Canvas canvas={canvas} />
        <Panels />
      </div>
    </div>
  )
}

export default App
