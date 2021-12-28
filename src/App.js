import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
// Components
import Header from "./components/Header";
import Home from "./components/Home";
// Styles
import { GlobalStyle } from "./GlobalStyle";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <div className="App">
      <Header />
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
      <GlobalStyle />
    </div>
  );
}

export default App;
