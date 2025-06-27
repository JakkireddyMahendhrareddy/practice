// import React, { useState } from "react";

// const App = () => {
//   const [ans, setAns] = useState({text:""});
//   const [res, setResult] = useState([]);

//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log(ans)
//     setResult((prev) => [...prev, ans]);
    
//     setAns({text:""});
//   }

//   return (
//     <div className="flex flex-col justify-center items-center min-h-screen">
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={ans.text}
//           className="border-2 border-black"
//           onChange={(e) => setAns({text:e.target.value})}
//         />
//         <button type="submit" className="border-2">
//           Enter
//         </button>
//       </form>
//       <div>
//         <ul>
//           {res.map((value, index) => (
//             <li key={index}>{`${index+1})${value.text}`}</li>
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

// // import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import NotFound from "./pages/NotFound";
// import Navbar from "./components/Nabar";

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
//     </Router>
//   );
// }

// export default App;
