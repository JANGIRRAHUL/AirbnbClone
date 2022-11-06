import Header from "./components/Header"
import NewCollection from "./components/NewCollectionCard";
import PlanTrip from "./components/PlanTrip";
import TopSeller from "./components/TopSeller";

import './App.css';

function App() {
  return (
    <div className="page-container">
      <Header/>
      <NewCollection/>
      <PlanTrip/>
      <TopSeller/>
    </div>
  );
}

export default App;
