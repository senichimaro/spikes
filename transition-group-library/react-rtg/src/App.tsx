import {
  Routes,
  Route
} from 'react-router-dom'

import './styles/globals.css'

// components
import Home from './pages/Home';
import Transition from './pages/transition';
import CssTransition from './pages/csstransition';
import SwitchTransition from './pages/switchtransition';
import TransitionGroup from './pages/transitiongroup';
import StyleVariables from './pages/stylevariables';

export default function MainEntry() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/transition" element={<Transition/>}/>
      <Route path="/csstransition" element={<CssTransition/>}/>
      <Route path="/switchtransition" element={<SwitchTransition/>}/>
      <Route path="/transitiongroup" element={<TransitionGroup/>}/>
      <Route path="/stylevariables" element={<StyleVariables/>}/>
    </Routes>
  );
}
