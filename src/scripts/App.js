import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "../style/App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./Menu";
import Menu2 from "./Menu2";
import Snack from "./Snack";
import Drink from "./Drink";
import AddForm from "./AddForm";
import DeleteForm from "./DeleteForm";


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function getDrinks() {
      let drinks = await SnackOrBoozeApi.getDrinks();
      setDrinks(drinks);
      setIsLoading(false);
    }
    getDrinks();
  }, []);

  useEffect(() => {
    async function getSnacks() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      setSnacks(snacks);
      setIsLoading(false);
    }
    getSnacks();
  }, []);
  const addSnacks = (snack) => {
    setSnacks([...snacks, snack]);
  }
  const addDrinks = (drink) => {
    setDrinks([...drinks, drink]);
  }

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home snacks={snacks} drinks={drinks} />
            </Route>
            <Route path="/add">
              <AddForm addDrinks={addDrinks} addSnacks={addSnacks} />
            </Route>
            <Route path="/delete">
              <DeleteForm addDrinks={addDrinks} addSnacks={addSnacks} />
            </Route>
            <Route path="/drinks/:id">
              <Drink drinks={drinks} cantFind="/items" />
            </Route>
            <Route path="/snacks/:id">
              <Snack snacks={snacks} cantFind="/items" />
            </Route>
            <Route exact path="/snacks">
              <Menu snacks={snacks}/>
            </Route>
            <Route path="/drinks">
              <Menu2 drinks={drinks}/>
            </Route>
            <Route>
            <p style={{ color: "red" }}>Hmmm. I can't seem to find what you want.</p>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;