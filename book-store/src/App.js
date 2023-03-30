import React, {useState} from "react";
import Header from "./components/Header";
import {Route, Routes} from "react-router-dom";
import AddBook from "./components/AddBook";
import Books from "./components/Book/Books";
import About from "./components/About";
import Home from "./components/Home";
import Register from "./components/Register";
import BookDetail from "./components/Book/BookDetail";

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      
      <main>
        <Routes>
          <Route path="/" element= {<Home/>} exact />
          <Route path="/" element= {<Register/>} exact />
          <Route path="/add" element= {<AddBook />} exact />
          <Route path="/books" element={<Books />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/books/:id" element={<BookDetail />} exact />
        </Routes>
        
      </main>
    </React.Fragment>
  );
};

export default App;

/*****
function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element= {<Home/>} exact />
          <Route path="/" element= {<Register/>} exact />
          <Route path="/add" element= {<AddBook />} exact />
          <Route path="/books" element={<Books />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/books/:id" element={<BookDetail />} exact />
        </Routes>
      </main>
    </React.Fragment>
  );
};

export default App;
*/