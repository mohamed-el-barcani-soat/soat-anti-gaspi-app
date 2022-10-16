import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateOffer from "./pages/createOffer/CreateOffer";
import { ErrorBoundary, Layout } from "./components";
import OffersList from "./pages/Offers";
import CreateContact from "./pages/CreateContact";


function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/offers" element={<OffersList />} />
            <Route path="/createOffer" element={<CreateOffer />} />
            <Route path="/contact/:offerId" element={<CreateContact />} />
          </Routes>
        </Layout>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
