import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
// Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components
import LogIn from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import PlushyDetail from "./components/PlushyDetail";
import CartExtended from "./components/CartExtended";
import SellerHome from "./components/SellerHome";
import AdminHome from "./pages/AdminHome";
import Splash from "./components/Splash";
import PrivateRoute from "./components/PrivateRoute";
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
      <QueryClientProvider client={queryClient}>
        <UserContext.Provider value={{ userEmail, setUserEmail }} >
          <Routes>
            <Route path='/' element={<LogIn />} />
            <Route path='/register' element={<Register />} />
            <Route path='/home' element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            } />
            <Route path="/sellerHome" element={
              <PrivateRoute>
                <SellerHome />
              </PrivateRoute>
            } />
            <Route path='/:plushyId' element={
              <PrivateRoute>
                <PlushyDetail />
              </PrivateRoute>
            } />
            <Route path='/cart' element={
              <PrivateRoute>
                <CartExtended />
              </PrivateRoute>} />
            <Route path="/adminHome" element={
              <PrivateRoute>
                <AdminHome />
              </PrivateRoute>
            }
            />
            <Route path="/splash" element={<Splash />} />
          </Routes>
        </UserContext.Provider>
      </QueryClientProvider>
      <GlobalStyle />
    </Router>
  );
}

export default App;
