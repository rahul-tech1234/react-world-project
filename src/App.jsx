import Countries from "./component/Countries/Countries";
import './App.css'
import { Suspense } from "react";
const countiesPromise=fetch("https://openapi.programming-hero.com/api/all")
.then(res=>res.json())
function App() {


  return (
    <>
      <Suspense fallback={<p>Nadir vai loading...</p>}>
        <Countries countiesPromise={countiesPromise}></Countries>
      </Suspense>
        
        
    </>
  )
}

export default App
