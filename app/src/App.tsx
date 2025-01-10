import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import "locomotive-scroll/dist/locomotive-scroll.css";
import "@radix-ui/themes/styles.css";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import InstallationPage from "./pages/InstallationPage";
import LandingPage from "./pages/LandingPage";
import ComponentPage from "./pages/ComponentPage";
import Templates from "./components/Templates";
import CheckoutForm from "./components/CheckoutForm";
import CompletePage from "./components/CompletePage";

// load stripe
// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const App: React.FC = () => {
  const [clientSecret, setClientSecret] = useState<string | undefined>("");
  if (!clientSecret) {
    const secret = localStorage.getItem("client_secret");
    if (secret) {
      setClientSecret(secret);
    } else {
      console.log("Client Secret not available");
    }
  }
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/components" element={<ComponentPage />} />
          <Route path="/installation" element={<InstallationPage />} />
          <Route
            path="/Templates/Ui"
            element={<Templates setClientSecret={setClientSecret} />}
          />
          {clientSecret ? (
            <Route
              path="/*"
              element={
                <Elements
                  options={{
                    clientSecret,
                    appearance: {
                      theme: "stripe",
                      variables: {
                        spacingUnit: "7px",
                      },
                    },
                    loader: "auto",
                  }}
                  stripe={stripePromise}
                >
                  <Routes>
                    <Route path="/checkout" element={<CheckoutForm />} />
                    <Route path="/complete" element={<CompletePage />} />
                  </Routes>
                </Elements>
              }
            />
          ) : (
            <Route
              path="/checkout"
              element={
                <div className="text-white text-center">
                  Loading payment details...
                </div>
              }
            />
          )}
        </Routes>
      </div>
    </>
  );
};

export default App;
