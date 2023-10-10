import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VerticalTL from "./components/VerticalTL";
import ChronoVerticalTimeline from "./components/ChronoVerticalTimeline";
import ChronoHorizontalTimeline from "./components/ChronoHorizontalTimeline";
import SuiteTimeline from "./components/SuiteTimeline";
import FrappeGanttTimeline from "./components/FrappeGanttTimeline";
import Nav from "./components/Nav";

function App() {  
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route exact path="/" element={<VerticalTL />} />
          <Route path="/chrono-vertical" element={<ChronoVerticalTimeline/>} />
          <Route path="/chrono-horizontal" element={<ChronoHorizontalTimeline/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
