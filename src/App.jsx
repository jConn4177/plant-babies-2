import { useState } from "react";


function App() {

  const [count, setCount] = useState(0);

  setCount(1);

  console.log(count);

  return <>My App</>;
}

export default App;

