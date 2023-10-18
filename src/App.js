import { Route, Routes } from "react-router-dom";
import Signinpage from "./pages/Signinpage";
import Homepage from "./pages/Homepage";
 

function App() {
  return (
    
    <Routes>
      <Route path={Routes.ROOT} element={<Layout />}>
        {/* Public Routes */}
        <Route path={Routes.SIGNIN} element={<Signinpage />} />

        {/* Protected Routes */}
        <Route
          path={Routes.ROOT}
          element={
            <RequireAuth>
              <Homepage />
            </RequireAuth>
          }
        />
      </Route>
    </Routes>
  );
};


export default App;
