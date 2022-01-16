import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
// Routing
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// Components
import Header from "./components/Header";
import Home from "./components/Home";
import PlushyDetail from "./components/PlushyDetail";
import CartExtended from "./components/CartExtended";
// Styles
import { GlobalStyle } from "./GlobalStyle";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <Router>
      <Header />
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:plushyId' element={<PlushyDetail/>} />
          <Route path='/cart' element={<CartExtended />} />
        </Routes>
        </QueryClientProvider>
      <GlobalStyle />
    </Router>
  );
}

export default App;
