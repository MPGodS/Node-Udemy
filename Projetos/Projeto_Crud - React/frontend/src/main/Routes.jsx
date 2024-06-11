import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../componentes/home/Home";
import UserCrud from "../componentes/user/UserCrud";

const Rotas = () => (
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="/users" element={<UserCrud />} />
    <Route path="*" element={<Home />} />
  </Routes>
);

export default Rotas;
