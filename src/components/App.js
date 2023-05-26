import React, { useState,useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const api_url="http://localhost:4000/questions"
  const [data,setData]=useState([])
useEffect(()=>{
  fetch(api_url)
  .then(res=>res.json())
  .then(data=>setData(data))
  .catch((error)=>console.log(error))
},[]);

  if(data.length === 0){
    return <h1>Loading ..... </h1>
  }
  function handleSubmit(newQuest){
    setData([...data,newQuest])
  }
  // console.log(data)
  function handleDeleted(quest){
   const newQuests=data.filter(data=>data.id!==quest)
   setData(newQuests)
  }
  function handleUpdate(id,quest){
   const updatedQuest=data.map((question)=>{
    if(question.id===id){
      return quest;
    }else{
      return data;
    }
   })
   setData(updatedQuest)
  }
  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onFormSubmit={handleSubmit} /> : <QuestionList handleDelete={handleDeleted} handleUpdatedQuest={handleUpdate} data={data} />}
    </main>
  );
}

export default App;
