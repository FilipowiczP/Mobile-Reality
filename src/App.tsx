import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./page/home/Home";
import HomeList from "./page/homeList/HomeList";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/list" component={HomeList} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
