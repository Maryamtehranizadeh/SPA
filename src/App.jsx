import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import Homepage from "./pages/Homepage.jsx";
import Courses from "./pages/Courses.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";
import Products from "./pages/Products.jsx";
import Product from "./pages/Product.jsx";
import Programmers from "./components/Programmers.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Homepage />} />
        <Route path="/landing" element={<Navigate to="/" replace />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />}>
          <Route path="programmers" element={<Programmers />} />
          <Route path="users" element={<div>Users</div>} />
        </Route>

        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
