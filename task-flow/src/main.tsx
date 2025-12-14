import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./feature/home/Home";
// import Articles from "./feature/article/Articles";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
        {/* <Route path="/articles" element={<Articles />} /> */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
