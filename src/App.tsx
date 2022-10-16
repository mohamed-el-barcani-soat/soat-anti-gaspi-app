import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateOffer from "./pages/createOffer/CreateOffer";
import { ErrorBoundary, Layout } from "./components";
import OffersList from "./pages/Offers";
import Offer from "./pages/Offer";


function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/offers" element={<OffersList />} />
            <Route path="/createOffer" element={<CreateOffer />} />
            <Route path="/offer/:id" element={<Offer />} />
          </Routes>
        </Layout>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
