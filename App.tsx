import React, { useEffect } from "react";
import Navigation from "./src/routes";
import { firebaseApp } from "./src/utils/firebase";

export default function App() {
  firebaseApp();
  return <Navigation />;
}
