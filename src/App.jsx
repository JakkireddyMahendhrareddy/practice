//fetch APIData  using fetch Method use then-catch

import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [result, setResult] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      fetch("https://dummyjson.com/products", {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data.products);
          setResult(data.products);
        })

        .catch((error) => {
          console.error("Fetching Error", error);
        });
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-7xl text-red-500 border-b-3 border-black">
        Data fecthing successfully
      </h1>
      <ul>
        {result.map((value, index) => (
          <li key={index}>{`${index + 1}) ${value.title}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;

//fetch APIData  using fetch Method use async-await

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const App = () => {
//   const [result, setResult] = useState([]);
//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch("https://dummyjson.com/products", {
//         method: "GET",
//       });
//       const ans = await response.json();
//       console.log(ans.products);
//       setResult(ans.products);
//     };
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1 className="text-7xl text-red-500 border-b-3 border-black">
//         Data fecthing successfully
//       </h1>
//       <ul>
//         {result.map((value, index) => (
//           <li key={index}>{`${index + 1}) ${value.title}`}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;

//fetch Api from dummy data using async-await

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const App = () => {
//   const [result, setResult] = useState([]);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get("https://dummyjson.com/products");
//         setResult(res.data.products);
//       } catch (error) {
//         console.error("fetching data error", error);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1 className="text-7xl text-red-500 border-b-3 border-black">
//         Data fecthing successfully
//       </h1>
//       <ul>
//         {result.map((value, index) => (
//           <li key={index}>{`${index + 1}) ${value.title}`}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;

//useCallback Example

// import React, { useState, useCallback, useEffect } from "react";

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [dark, setDark] = useState(false);

//   const increment = useCallback(() => {
//     setCount((prev) => prev + 1);
//   }, []); // ✅ `increment` is memoized and will not change on re-renders
//   //usecallback returns a memoized version of the callback function that only changes if one of its dependencies has changed.

//   //   🧠 When to use useCallback:
//   // Use case	Why useCallback helps
//   // Passing a function to a child component	Prevents unnecessary re-renders
//   // Dependency in useEffect or useMemo	Ensures stable function reference
//   // Performance optimization in large apps	Avoids re-creating functions on every render
//   const theme = {
//     backgroundColor: dark ? "#333" : "#fff",
//     color: dark ? "#fff" : "#000",
//     padding: "20px",
//     marginTop: "20px",
//   };

//   return (
//     <div style={theme}>
//       <h1>{count}</h1>
//       <button onClick={increment}>Increment</button>
//       <button onClick={() => setDark(!dark)}>Toggle Theme</button>
//     </div>
//   );
// };

// export default App;

//useLayoutEffect Example

// import React, { useState, useRef, useLayoutEffect } from "react";

// const App = () => {
//   const [color, setColor] = useState("red");
//   const boxRef = useRef(null);

//   useLayoutEffect(() => {
//     // This runs BEFORE the screen is painted
//     if (boxRef.current) {
//       setColor("lightblue");
//     }
//   }, []);
//   //   What happens here?
//   // Initially, the color state is "white".

//   // useLayoutEffect runs after the DOM is ready but before paint.

//   // It changes the color to "lightblue" before the user ever sees the white color.

//   // So the box appears directly with the new color — no flicker.

//   return (
//     <div
//       ref={boxRef}
//       style={{
//         width: "300px",
//         height: "150px",
//         backgroundColor: color,
//         border: "2px solid black",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <h3>Box Color Changed by useLayoutEffect</h3>
//     </div>
//   );
// };

// export default App;

//useMemozation Example

// import React, { useState, useMemo } from "react";

// // Expensive factorial function
// const factorial = (n) => {
//   console.log("Calculating factorial...");
//   if (n <= 0) return 1;
//   return n * factorial(n - 1);
// };

// const App = () => {
//   const [number, setNumber] = useState(1);
//   const [text, setText] = useState("");

//   // Memoized result: only recalculates when `number` changes
//   const fact = useMemo(() => factorial(number), [number]);
//   //application can still render quickly even though there's an expensive calculation involved.
//   //not impact on the performance of other parts of the application.

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
//       <div>
//         <label className="mr-2">Enter a number:</label>
//         <input
//           type="number"
//           value={number}
//           onChange={(e) => setNumber(Number(e.target.value))}
//           className="border px-2 py-1"
//         />
//       </div>

//       <div>
//         <label className="mr-2">Unrelated Text:</label>
//         <input
//           type="text"
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//           className="border px-2 py-1"
//         />
//       </div>

//       <h2 className="text-xl font-semibold">
//         Factorial of {number} is {fact}
//       </h2>
//     </div>
//   );
// };

// export default App;

//useReducer Example
// import React, { useReducer } from "react";

// const initialState = 0;
// const reducer = (state, action) => {
//   console.log(action);
//   switch (action.text) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//     default:
//       return state;
//   }
// };

// const App = () => {
//   const [count, dispatch] = useReducer(reducer, initialState);

//   function decreaseButton() {
//     dispatch({ text: "decrement" });
//   }

//   function increaseButton() {
//     dispatch({ text: "increment" });
//   }

//   return (
//     <div>
//       <button type="button" onClick={decreaseButton} className="border-2 px-2">
//         decrease
//       </button>
//       <button type="button" onClick={increaseButton} className="border-2 px-2">
//         increase
//       </button>
//       <h2>{count}</h2>
//     </div>
//   );
// };

// export default App;

//useContext Example

// import React, { useState, createContext } from "react";
// import ParentComponent from "./components/parentComponent";

// export const LoginContext = createContext();

// const App = () => {
//   const [state, setState] = useState(false);
//   return (
//     <LoginContext.Provider value={state}>
//       <div>
//         <ParentComponent />
//       </div>
//     </LoginContext.Provider>
//   );
// };

// export default App;

//useRef Example

// import React, { useState, useEffect, useRef } from "react";

// const App = () => {
//   const [name, setName] = useState("");
//   const count = useRef(0);

//   useEffect(() => {
//     count.current = count.current + 1;
//   });

//   return (
//     <div className="flex flex-col justify-center items-center min-h-screen">
//       <input
//         type="text"
//         value={name}
//         className="border-2 border-black"
//         onChange={(e) => setName(e.target.value)}
//       />
//       <h1 className="text-6xl">{count.current}</h1>
//     </div>
//   );
// };

// export default App;

//clean up function in useEffect

// import React, { useState, useEffect, useRef } from "react";

// const App = () => {
//   const [time, setTime] = useState(0);
//   const timer = useRef(null);

//   const startButton = () => {
//     if (timer.current !== null) return;

//     timer.current = setInterval(() => {
//       setTime((prev) => prev + 1);
//     }, 500);
//   };
//   // use these clean up function to clear any resources or intervals that are no longer needed. This helps prevent memory leaks and ensures proper cleanup.
//   // first clean up function is used for clearing interval and second one is used for cleaning state variables.

//   const stopButton = () => {
//     clearInterval(timer.current);
//     timer.current = null;
//     setTime(time);
//   };

//   return (
//     <div className="flex flex-col justify-center items-center min-h-screen">
//       <h1 className="text-6xl">{time}</h1>
//       <div className="flex">
//         <button type="button" onClick={stopButton} className="border-2 px-2">
//           stop
//         </button>
//         <button type="button" onClick={startButton} className="border-2 px-2">
//           start
//         </button>
//       </div>
//     </div>
//   );
// };

// export default App;

//useEffect with Dependency Array
// import React, { useState, useEffect } from "react";

// const App = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     document.title = `you clicked ${count}`;
//   }, [count]);

//   // Using a dependency array in useEffect tells React to run the effect only when specific values change, which makes your component faster and more predictable.
//   function increase() {
//     setCount(count + 1);
//   }

//   return (
//     <div className="flex flex-col justify-center items-center min-h-screen">
//       <h1 className="text-6xl">{count}</h1>
//       <button
//         type="button"
//         class="bg-green-400 px-2 py-3 m-2"
//         onClick={increase}
//       >
//         Increase
//       </button>
//     </div>
//   );
// };

// export default App;

//useEffect with Empty Dependency Array

// import React, { useState, useEffect } from "react";

// const App = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     document.title = `you clicked ${count}`;
//   }, []);

//   //Here useEffect will run only once when the component mounts after on time it won't re-render again.
//   //like title doesn't change because of count variable.
//   fetch API purpose
//   function increase() {
//     setCount(count + 1);
//   }

//   return (
//     <div className="flex flex-col justify-center items-center min-h-screen">
//       <h1 className="text-6xl">{count}</h1>
//       <button
//         type="button"
//         class="bg-green-400 px-2 py-3 m-2"
//         onClick={increase}
//       >
//         Increase
//       </button>
//     </div>
//   );
// };

// export default App;

//useEffect without dependency array

// import React, { useState, useEffect } from "react";

// const App = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     document.title = `you clicked ${count}`;
//   });

//   function increase() {
//     setCount(count + 1);
//   }

//   return (
//     <div className="flex flex-col justify-center items-center min-h-screen">
//       <h1 className="text-6xl">{count}</h1>
//       <button
//         type="button"
//         class="bg-green-400 px-2 py-3 m-2"
//         onClick={increase}
//       >
//         Increase
//       </button>
//     </div>
//   );
// };

// export default App;

//useState example with Object

// import React, { useState } from "react";

// const App = () => {
//   const [ans, setAns] = useState({ text: "", age: "" });
//   const [res, setResult] = useState([]);

//   function handleSubmit(e) {
//     e.preventDefault();
//     setResult((prev) => [...prev, ans]);
//     console.log(ans);
//     setAns({ text: "", age: "" });
//   }

//   return (
//     <div className="flex flex-col justify-center items-center min-h-screen">
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={ans.text}
//           className="border-2 border-black"
//           onChange={(e) =>
//             setAns((prev) => ({ ...prev, text: e.target.value }))
//           }
//         />
//         <input
//           type="number"
//           value={ans.age}
//           className="border-2 border-black"
//           onChange={(e) => setAns((prev) => ({ ...prev, age: e.target.value }))}
//         />
//         <button type="submit" className="border-2">
//           Submit
//         </button>
//       </form>
//       <div>
//         <ul>
//           {res.map((value, index) => (
//             <li key={index}>{`${index + 1}) My Name is ${value.text} age is ${
//               value.age
//             }`}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default App;

//useState with string

// import React, { useState } from "react";

// const App = () => {
//   const [ans, setAns] = useState("");
//   const [res, setResult] = useState([]);

//   function handleSubmit(e) {
//     e.preventDefault();
//     setResult((prev) => [...prev, ans]);
//     setAns("");
//   }

//   return (
//     <div className="flex flex-col justify-center items-center min-h-screen">
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={ans}
//           className="border-2 border-black"
//           onChange={(e) => setAns(e.target.value)}
//         />
//         <button type="submit" className="border-2">
//           Enter
//         </button>
//       </form>
//       <div>
//         <ul>
//           {res.map((value, index) => (
//             <li key={index}>{value}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default App;

//useState with Interger

// import React, { useState } from "react";

// const App = () => {
//   const [count, setCount] = useState(0);

//   function increment() {
//     setCount(count + 1);
//   }

//   function decrement() {
//     setCount(count - 1);
//   }
//   function normal() {
//     setCount(0);
//   }

//   return (
//     <div className="flex flex-col bg-blue-300 min-h-screen justify-center items-center">
//       <div className="flex flex-row space-x-5 mb-5">
//         <button
//           type="button"
//           className="text-xl border-2 rounded-lg px-2 py-3"
//           onClick={increment}
//         >
//           Increase
//         </button>
//         <button
//           type="button"
//           className="text-xl border-2 rounded-lg px-2 py-3"
//           onClick={normal}
//         >
//           Normal
//         </button>
//         <button
//           type="button"
//           className="text-xl border-2 rounded-lg px-2 py-3"
//           onClick={decrement}
//         >
//           Decrease
//         </button>
//       </div>
//       <h1 className="text-5xl">{count}</h1>

//     </div>
//   );
// };

// export default App;

//Navbar and Router

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import NotFound from "./pages/NotFound";
// import Navbar from "./components/Nabar";
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <div className="flex flex-col bg-blue-300 min-h-screen justify-center items-center">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/*" element={<NotFound />} />
//         </Routes>
//       </div>
//       <Footer />
//     </Router>
//   );
// }

// export default App;
