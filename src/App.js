import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Switch } from 'react-router-dom';
import PrivateRoute from './routing/PrivateRoute';
import { overrideConsole } from './hooks/loggingErrors';
import {
  SobConfigurator,
  VendorPlanning,
  SupplyChain,
  BuyerPlanning,
  VendorDrop,
  VendorDispatch,
  BuyerOverview,
  FbvAsnDetails,
  BuyerDispatch,
  FbvVendorPlanning,
} from './pages';
import HeaderAndFooter from './layouts/HeaderAndFooter/HeaderAndFooter';
import { PERSONAS } from './constants';

function App({ isAuthenticated, user }) {
  const addLoggingHooks = () => {
    window.onerror = (message, source, lineno, colno, error) => {
      if (error.stack) {
        const sourceFunction = error.stack.split('\n')[1];
        console.error(new Error(message + sourceFunction));
      } else {
        console.error(error);
      }
    };
    const newConsole = overrideConsole(window.console, user?.userId);
    window.console = newConsole;
  };

  useEffect(() => {
    if (isAuthenticated) {
      addLoggingHooks();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <div className="App">
      <Switch>
        <HeaderAndFooter>
          <PrivateRoute exact path="/" component={SupplyChain} />
          <PrivateRoute
            allowedPersonas={[PERSONAS.BUYER]}
            exact
            path="/buyer/:materialGroup"
            component={BuyerPlanning}
          />
          <PrivateRoute
            allowedPersonas={[PERSONAS.BUYER]}
            exact
            path="/buyer/:materialGroup/asn-details"
            component={BuyerDispatch}
          />
          <PrivateRoute
            allowedPersonas={[PERSONAS.VENDOR, PERSONAS.FBV_VENDOR]}
            exact
            path="/vendor/:materialGroup"
            component={VendorPlanning}
          />
          <PrivateRoute
            allowedPersonas={[PERSONAS.VENDOR, PERSONAS.FBV_VENDOR]}
            exact
            path="/vendor/:materialGroup/drop"
            component={VendorDrop}
          />
          <PrivateRoute
            allowedPersonas={[PERSONAS.VENDOR, PERSONAS.FBV_VENDOR]}
            exact
            path="/vendor/:materialGroup/dispatch"
            component={VendorDispatch}
          />
          <PrivateRoute
            allowedPersonas={[PERSONAS.FBV_VENDOR, PERSONAS.FBV]}
            exact
            path="/fbv/asn-details"
            component={FbvAsnDetails}
          />
          <PrivateRoute
            allowedPersonas={[PERSONAS.BUYER]}
            exact
            path="/sob-master-data"
            component={SobConfigurator}
          />
          <PrivateRoute
            allowedPersonas={[PERSONAS.BUYER]}
            exact
            path="/asn-overview"
            component={BuyerOverview}
          />
          <PrivateRoute
            allowedPersonas={[PERSONAS.FBV_VENDOR, PERSONAS.FBV]}
            exact
            path="/fbv/plan"
            component={FbvVendorPlanning}
          />
        </HeaderAndFooter>
      </Switch>
    </div>
  );
}

App.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  user: PropTypes.object,
};

export default connect(({ auth }) => ({
  isAuthenticated: auth.isAuthenticated,
  user: auth.user,
}))(App);
