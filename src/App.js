import React from "react";

import { QueryClient, QueryClientProvider } from "react-query";

import Layout from "./components/Layout";
import SpotList from "./components/SpotList";

const queryClient = new QueryClient();

const App = () => {
  return (
    <Layout>
      <QueryClientProvider client={queryClient}>
        <SpotList />
      </QueryClientProvider>
    </Layout>
  );
};

export default App;
