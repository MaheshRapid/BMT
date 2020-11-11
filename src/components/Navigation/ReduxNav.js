import { connect } from 'react-redux';
import { reduxifyNavigator, createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';

import LoginNav from './LoginNav1';

const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
);

const AppWithNavigationState = reduxifyNavigator(LoginNav, 'root');

const mapStateToProps = state => ({
  state: state.nav,
});

const ReduxNav = connect(mapStateToProps)(AppWithNavigationState);

export { LoginNav, ReduxNav, middleware };