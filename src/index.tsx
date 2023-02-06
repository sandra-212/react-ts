import React from 'react';
import ReactDOM from 'react-dom/client';
import * as ReactRouter from 'react-router-dom';

import reportWebVitals from './reportWebVitals';
import * as State from './state';
import * as Header from './components/Header';
import * as PatientList from './page/PatientList';
import * as AboutUs from './page/AboutUs';
import * as PatientInfo from './page/PatientInfo';

import './index.css';

export const StoreContext = React.createContext<State.RootStore>(
  {} as State.RootStore
);

const Layout = () => {
  return (
    <>
      <Header.Component />
      <ReactRouter.Outlet />
    </>
  );
};
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <StoreContext.Provider value={State.Store}>
      <ReactRouter.BrowserRouter>
        <ReactRouter.Routes>
          <ReactRouter.Route path="/" element={<Layout />}>
            <ReactRouter.Route path="/" element={<PatientList.Component />} />
            <ReactRouter.Route path="/about" element={<AboutUs.Component />} />
            <ReactRouter.Route
              path="/:id"
              element={<PatientInfo.Component />}
            />
          </ReactRouter.Route>
        </ReactRouter.Routes>
      </ReactRouter.BrowserRouter>
    </StoreContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
