import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Nav from "./components/Nav";
import Users from "./pages/Users";

// import Todo from "./components/Todo.jsx";
// import Title from "./components/Title";
// import Modal from "./components/Modal";
// import Count from "./components/Count";
// import React, { useState, useEffect } from "react";

function App() {

return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users/:id" element={<Users />} />
      </Routes>
    </Router>
);

  //  return <Count />

  // const [showModal, setShowModal] = useState(false);

  // function onTodoDelete() {
  //   setShowModal(true);
  // }

  // function onModalCancel() {
  //   setShowModal(false);
  // }

  // function onModalConfirm() {
  //   setShowModal(false);
  // }

  // useEffect(() => {
  //   console.log('ONLY on mount')
  // }, [])

  // useEffect(() => {
  //   console.log(`on mount AND on ${showModal} change`)
  // }, [showModal])

  // useEffect(() => {
  //   console.log('EVERY render')
  // })

  // return (
  //   <div>
  //     <Title />
  //     <div>
  //       <input
  //         type="text"
  //         onChange={(event) => {
  //           console.log(event.target.value);
  //         }}
  //       />
  //       <button onClick={() => setShowModal(true)}>Add Todo</button>
  //     </div>
  //     <div className="todo__wrapper">
  //       <Todo onTodoDelete={onTodoDelete} title="Finish Frontend Simplified" />
  //       <Todo onTodoDelete={onTodoDelete} title="Finish Interview Section" />
  //       <Todo onTodoDelete={onTodoDelete} title="Land a $100k Job" />
  //     </div>
  //     {showModal && (
  //       <Modal
  //         onModalCancel={onModalCancel}
  //         onModalConfirm={onModalConfirm}
  //         title="Confirm Delete?"
  //       />
  //     )}
  //   </div>
  // );
}

export default App;
