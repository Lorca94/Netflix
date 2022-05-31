import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { Browse, Home, SingIn, SingUp } from "./pages";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={ROUTES.HOME} element={<Home />} />
        <Route exact path={ROUTES.SIGN_IN} element={<SingIn />} />
        <Route exact path={ROUTES.SIGN_UP} element={<SingUp />} />
        <Route exact path={ROUTES.BROWSE} element={<Browse />} />
      </Routes>
    </BrowserRouter>
  );
}
