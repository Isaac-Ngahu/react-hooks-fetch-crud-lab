import React from "react";

function QuestionItem({ question,handleDelete,handleAnswerChange }) {
  console.log(question)
const { id, prompt, answers, correctIndex } = question;
  
  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));
  function handleClick(){
    handleDelete(question.id) 
 }
function handleChange(e){
  //  console.log(e.target.value,question.id)
  const value=e.target.value
 const  id=question.id
  handleAnswerChange(value,id)
}
  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={handleChange} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={(handleClick)}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
