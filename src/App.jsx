import { Routes, Route } from "react-router-dom";

import Layout from "./Layout.jsx";
import Home from "./Home.jsx";
import NotFound from "./NotFound.jsx";
import Shop from "./Shop.jsx";
import Donations from "./Donations.jsx";
import Reconditioning from "./Reconditioning.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route index element={<Home />} />
        <Route path="the-goats" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="home" element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="donations" element={<Donations />} />
        <Route path="reconditioning" element={<Reconditioning />} />
      </Route>
    </Routes>
  );
}

export default App;
