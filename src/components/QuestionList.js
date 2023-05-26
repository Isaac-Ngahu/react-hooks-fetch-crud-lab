import React,{useEffect,useState} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({data,handleDelete,handleUpdatedQuest}) {
 function handleDeletedQuest(id){
  fetch(`http://localhost:4000/questions/${id}`,{
    method:"DELETE"
  })
  .then(res=>res.json())
  .then(()=>console.log("deleted"))
  handleDelete(id)
 }
 function handleChange(value,id){
  fetch(`http://localhost:4000/questions/${id}`,{
    method:"PATCH",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({correctIndex: value}),
  })
  .then(res=>res.json())
  .then((updatedQuest)=>handleUpdatedQuest(id,updatedQuest))
 }
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{data.map((quest)=>{
        return <QuestionItem handleDelete={handleDeletedQuest} handleAnswerChange={handleChange} question={quest}/>
      })}</ul>
    </section>
  );
}

export default QuestionList;
