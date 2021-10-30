import './component/main.css';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom'
import Header from './component/Header';
import ProductComponent from './component/ProductComponent';
import ProductListing from './component/ProductListing';
import ProductDetail from './component/ProductDetail';


function App() {
  return (
    <div >
      <Router>
      <Header/>
        <Switch>
          <Route path="/" exact component={ProductListing}/>
          <Route path="/product/:productId" exact component={ProductDetail}/>
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
