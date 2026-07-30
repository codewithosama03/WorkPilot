import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import LoadingScreen from "./components/LoadingScreen";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import {
ClerkProvider,
useAuth,
useUser,
} from "@clerk/clerk-react";

import { AuthProvider } from "./context/AuthContext";
import ThemeProvider from "./context/ThemeContext";

import { createAppStore } from "./app/store";

const clerkPubKey =
"pk_test_ZWFzeS1zcGFuaWVsLTY2LmNsZXJrLmFjY291bnRzLmRldiQ";


function AppWrapper() {
  const { isLoaded, user } = useUser();
  const { isSignedIn } = useAuth();

  const [store, setStore] = React.useState(null);

  React.useEffect(() => {
    if (!isLoaded) return;

    const appStore = createAppStore(
      isSignedIn && user ? user.id : null
    );

    setStore(appStore);
  }, [isLoaded, isSignedIn, user]);

if (!isLoaded || !store) {
  return <LoadingScreen />;
}

  return (
    <Provider store={store}>
      <AuthProvider>
        <ThemeProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </AuthProvider>
    </Provider>
  );
}



ReactDOM.createRoot(document.getElementById("root")).render(
<React.StrictMode> <ClerkProvider
   publishableKey={clerkPubKey}
   signInForceRedirectUrl="/dashboard"
   signUpForceRedirectUrl="/dashboard"
 > <AppWrapper /> </ClerkProvider>
</React.StrictMode>
);
