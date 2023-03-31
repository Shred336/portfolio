import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Viewport from "../components/Bits/Viewport/Viewport";
import Layout from "../components/Sections/Layout/Layout";

import Home from "../pages/Home";
import Test from "../pages/Test";
import DocsNav from "../components/Sections/DocsNav/DocsNav";
import Settings from "../pages/Settings";
import Account from "../pages/Account";
import Todos from "../pages/Todos";
import Palette from "../pages/Palette";
import Login from "../pages/Login";
import Receipts from "../pages/Receipts";
import Fibonacci from "../pages/Fibonacci";
import Quotes from "../pages/Quoz";
import PodApp from "../pages/Podapp";
import FlashCards from "../pages/FlashCards";
function App() {
  return (
    <BrowserRouter>
      <Viewport>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/pop/">
            <Route path="palette" element={<Palette popped />} />
          </Route>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="test" element={<Test />} />
            <Route path="docs" element={<DocsNav />} />
            <Route path="todos" element={<Todos />} />
            <Route path="settings" element={<Settings />} />
            <Route path="account" element={<Account />} />
            <Route path="palette" element={<Palette />} />
            <Route path="receipts" element={<Receipts />} />
            <Route path="fibonacci" element={<Fibonacci />} />
            <Route path="quoz" element={<Quotes />} />
            <Route path="podapp" element={<PodApp />} />
            <Route path="flashcards" element={<FlashCards />} />

            {/* <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </Viewport>
    </BrowserRouter>
  );
}

export default App;
