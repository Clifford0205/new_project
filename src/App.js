import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';

import LandingPage from './page/LandingPage';
import IntroductionPage from './page/IntroductionPage';
import CaseStudies from './page/CaseStudies';
import CaseDetail from './page/CaseDetail';
import BloodStudies from './page/BloodStudies';
import './Myapp.scss';
import MemberEdit from './page/MemberEdit';

function App() {
  return (
    <>
      <Router>
        <>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/introduce" component={IntroductionPage} />
            <Route
              path="/case"
              component={CaseStudies}
              url={'http://localhost:3000/case'}
              author={'adele'}
              perPage={10}
            />
            <Route path="/bloodcase" component={BloodStudies} />
            <Route path="/casedetail/:id" component={CaseDetail} />
            <Route path="/member/edit/:id" component={MemberEdit} />
          </Switch>
        </>
      </Router>
    </>
  );
}

export default App;
