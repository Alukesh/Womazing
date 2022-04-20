import React, {Suspense} from "react";
import Layout from "./Layout/Layout";
import './app.scss'
import './i18n'


function App() {
  return (
    <>
        <Suspense fallback={'Loading...'}>
            <Layout/>
        </Suspense>
    </>
  );
}

export default App;

