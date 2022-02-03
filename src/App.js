import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
// Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components
import LogIn from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";
import PlushyDetail from "./components/PlushyDetail";
import CartExtended from "./components/CartExtended";
// Styles
import { GlobalStyle } from "./GlobalStyle";

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <Router>
      <Header />
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path='/' element={<LogIn />} />
          <Route path='/home' element={<Home />} />
          <Route path='/:plushyId' element={<PlushyDetail/>} />
          <Route path='/cart' element={<CartExtended />} />
        </Routes>
        </QueryClientProvider>
      <GlobalStyle />
    </Router>
  );
}

export default App;
