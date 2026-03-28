// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import "./index.css";

// import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";

// import { ClerkProvider, useUser } from "@clerk/clerk-react";

// import { AuthProvider } from "./context/AuthContext";
// import ThemeProvider from "./context/ThemeContext";

// import { createAppStore } from "./app/store";

// const clerkPubKey = "pk_test_ZWFzeS1zcGFuaWVsLTY2LmNsZXJrLmFjY291bnRzLmRldiQ";


// function AppWrapper() {
//   const { isLoaded, user } = useUser();

//   if (!isLoaded) return <div>Loading...</div>;

//   const userId = user?.id;

//   //  CREATE STORE AFTER USER EXISTS
//   const store = React.useMemo(() => {
//     return createAppStore(userId);
//   }, [userId]);

//   return (
//     <Provider store={store}>
//       <AuthProvider>
//         <ThemeProvider>
//           <BrowserRouter>
//             <App />
//           </BrowserRouter>
//         </ThemeProvider>
//       </AuthProvider>
//     </Provider>
//   );
// }


// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <ClerkProvider publishableKey={clerkPubKey}>
//       <AppWrapper />
//     </ClerkProvider>
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { ClerkProvider, useUser } from "@clerk/clerk-react";

import { AuthProvider } from "./context/AuthContext";
import ThemeProvider from "./context/ThemeContext";

import { createAppStore } from "./app/store";

const clerkPubKey = "pk_test_ZWFzeS1zcGFuaWVsLTY2LmNsZXJrLmFjY291bnRzLmRldiQ";

function AppWrapper() {
  const { isLoaded, user } = useUser();

  const userId = user?.id;

  //  ALWAYS call hook (fixes hook error)
  const store = React.useMemo(() => {
    return createAppStore(userId);
  }, [userId]);

  //  AFTER hooks
  if (!isLoaded) return <div>Loading...</div>;

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
  <React.StrictMode>
  <ClerkProvider 
  publishableKey={clerkPubKey}
  afterSignInUrl="/dashboard"
  afterSignUpUrl="/dashboard"
>
  <AppWrapper />
</ClerkProvider>
  </React.StrictMode>
);