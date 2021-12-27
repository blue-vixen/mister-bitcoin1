import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './assets/scss/global.scss'
import { ContactPage } from './pages/ContactPage'
import { AppHeader } from './cmps/AppHeader';
import { HomePage } from './pages/HomePage';
import { StatisticsPage } from './pages/StatisticsPage';
import { ContactDetails } from './pages/ContactDetails';
import { ContactEdit } from './pages/ContactEdit';

export function App() {
  return (
    <Router>
      <div className="App">
        <AppHeader />
        <main>
          <Switch>
            <Route component={ContactEdit} path='/contact/edit/:id?' />
            <Route component={ContactDetails} path='/contact/:id' />
            <Route component={ContactPage} path='/contact' />
            <Route component={StatisticsPage} path='/statistics' />
            <Route component={HomePage} path='/' />
          </Switch>
        </main>
      </div>

    </Router>
  );
}

export default App;
