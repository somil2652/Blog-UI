import { Suspense, lazy } from "react";
import "./App.css";
// import Routing from "./routing/Routing";
import { Skeleton } from "./component";
const Routing = lazy(() => import("./routing/Routing"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Skeleton />}>
        <Routing />
      </Suspense>
    </div>
  );
}

export default App;
