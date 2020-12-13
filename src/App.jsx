import React, { useState, useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import Navbar from './components/navigation/Navbar';
import firebase from './config/firebase';
import AppContext from './store/AppContext';
import routes from '../src/utils/routes';
import AuthRoute from './utils/routes/AuthRoute';
import GuestRoute from './utils/routes/GuestRoute';
import Loading from './components/Loading';
import Error404 from './pages/Error404';
import AnimatedRoute from './utils/routes/AnimatedRoute';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setUser(user);
        setIsLoading(false);
        // console.log(user.email);
      } else {
        setIsLoggedIn(false);
        setUser({});
        setIsLoading(false);
      }
    });
  }, []);

  if (isLoading) return <Loading />;

  return (
    <AppContext.Provider value={[isLoggedIn, user]}>
      <Navbar />
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch key={location.pathname} location={location}>
          {routes.map((route) => {
            // If I'm logged in I can't go to /login
            if (route.protected === 'guest') {
              return (
                <GuestRoute
                  key={route.id}
                  path={route.path}
                  exact={route.exact}>
                  <AnimatedRoute>
                    <route.component />
                  </AnimatedRoute>
                </GuestRoute>
              );
            }

            // Auth protection on /gallery
            if (route.protected === 'auth') {
              return (
                <AuthRoute key={route.id} path={route.path} exact={route.exact}>
                  <AnimatedRoute>
                    <route.component />
                  </AnimatedRoute>
                </AuthRoute>
              );
            }

            return (
              <Route key={route.id} path={route.path} exact={route.exact}>
                <AnimatedRoute>
                  {/* Gave to the body in index.css overflow-x: hidden; */}
                  <route.component />
                </AnimatedRoute>
              </Route>
            );
          })}
          <Route path='*' component={Error404} />
        </Switch>
      </AnimatePresence>
    </AppContext.Provider>
  );
}

export default App;
