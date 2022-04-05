import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
// Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components
import LogIn from "./components/Login";
import Register from "./components/Register";
import Header from "./components/Header";
import Home from "./components/Home";
import PlushyDetail from "./components/PlushyDetail";
import CartExtended from "./components/CartExtended";
import SellerHome from "./components/SellerHome";
import AdminHome from "./components/AdminHome";
import Splash from "./components/Splash";
// Styles
import { GlobalStyle } from "./GlobalStyle";
// Context
import { UserContext } from "./context/userContext";

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  // TODO: reformat this to other
  const [userEmail, setUserEmail] = useState("");

  return (
    <Router>
      <Header />
      <QueryClientProvider client={queryClient}>
        <UserContext.Provider value={{ userEmail, setUserEmail }} >
          <Routes>
            <Route path='/' element={<LogIn />} />
            <Route path='/register' element={<Register />} />
            <Route path='/home' element={<Home />} />
            <Route path="/sellerHome" element={<SellerHome />} />
            <Route path='/:plushyId' element={<PlushyDetail />} />
            <Route path='/cart' element={<CartExtended />} />
            <Route path="/adminHome" element={<AdminHome />} />
            <Route path="/splash" element={<Splash />} />
          </Routes>
        </UserContext.Provider>
      </QueryClientProvider>
      <GlobalStyle />
    </Router>
  );
}

export default App;
