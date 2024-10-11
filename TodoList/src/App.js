import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Todo from "./project/Todo";

export default function App()
{
  return(
    <>
    <Header></Header>
    <Todo />
    <Footer />
    </>
  )
}