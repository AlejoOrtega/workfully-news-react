import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./shared/components/AppRoutes/AppRoutes";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <React.Suspense fallback={<h1>Loading</h1>}>
          <AppRoutes />
        </React.Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;
