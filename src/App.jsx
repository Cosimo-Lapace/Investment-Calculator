import { useState } from "react";
import Table from "./components/Table/Table";
import Inputs from "./components/inputs/Inputs";

function App() {
  const [investment, setInvestment] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });


  return (
    <>
      <Inputs setInvestment={setInvestment} />
      <Table investment={investment} />
    </>
  );
}

export default App;
