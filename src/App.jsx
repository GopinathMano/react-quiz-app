import "./app.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Quiz from "./components/Quiz.jsx";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "What is the HTML tag under which one can write the JavaScript code?",
      answers: [
        {
          text: " <javascript>",
          correct: false,
        },
        {
          text: " <script>",
          correct: true,
        },
        {
          text: " <scripted>",
          correct: false,
        },
        {
          text: "<js>",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Which of the following is not a reserved word in JavaScript?",
      answers: [
        {
          text: "program",
          correct: true,
        },
        {
          text: "interface",
          correct: false,
        },
        {
          text: "throws",
          correct: false,
        },
        {
          text: "short",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "What is the JavaScript syntax for printing values in Console?",
      answers: [
        {
          text: "print(5) ",
          correct: false,
        },
        {
          text: " print.console(5);",
          correct: false,
        },
        {
          text: "console.print(5); ",
          correct: false,
        },
        {
          text: "console.log(5);",
          correct: true,
        },
      ],
    },{
      id: 4,
      question: "Which of the following is the pop() method does?",
      answers: [
        {
          text: "Display the first element  ",
          correct: false,
        },
        {
          text: "  Decrements length by 1",
          correct: true,
        },
        {
          text: " Increments length by 1 ",
          correct: false,
        },
        {
          text: "None of the mentioned",
          correct: false ,
        },
      ],
    },{
      id: 5,
      question: "Which of the following option is correct if reverse() and join() are used together?",
      answers: [
        {
          text: " Reverses and stores  ",
          correct: true ,
        },
        {
          text: " Reverses and concatenates   ",
          correct: false,
        },
        {
          text: "Only Reverses ",
          correct: false,
        },
        {
          text: "None of the mentioned",
          correct: false ,
        },
      ],
    },{
      id: 6,
      question: "Which of the following option is correct when a function with no return type is called?",
      answers: [
        {
          text: "Dynamic function",
          correct: false,
        },
        {
          text: "Procedures",
          correct: true,
        },
        {
          text: "Static function ",
          correct: false,
        },
        {
          text: "Method",
          correct: false,
        },
      ],
    },{
      id: 7,
      question: "Which of the following scope is used by the JavaScript?",
      answers: [
        {
          text: "Segmental ",
          correct: false,
        },
        {
          text: "Lexical",
          correct: true,
        },
        {
          text: "Literal ",
          correct: false,
        },
        {
          text: "Sequential",
          correct: false,
        },
      ],
    },{
      id: 8,
      question: "Which of the following in reduce operation called?",
      answers: [
        {
          text: "filter and fold ",
          correct: false,
        },
        {
          text: "fold",
          correct: false,
        },
        {
          text: " finger and fold ",
          correct: false,
        },
        {
          text: "inject and fold ",
          correct: true,
        },
      ],
    },{
      id: 9,
      question: "Which of the following is an advantage of using JavaScript?",
      answers: [
        {
          text: " Increased interactivity.  ",
          correct: false,
        },
        {
          text: "Less server interaction. ",
          correct: false,
        },
        {
          text: " Immediate feedback from the users.  ",
          correct: false,
        },
        {
          text: "All of the above.",
          correct: true,
        },
      ],
    },{
      id: 10,
      question: "Which function of an Array object calls a function for each element in the array?",
      answers: [
        {
          text: "forEach()  ",
          correct: true,
        },
        {
          text: "every() ",
          correct: false,
        },
        {
          text: "forEvery()  ",
          correct: false,
        },
        {
          text: "each()",
          correct:false ,
        },
      ],
    },{
      id: 11,
      question: "Which was the first browser to support JavaScript?",
      answers: [
        {
          text: " Mozilla Firefox ",
          correct: false,
        },
        {
          text: "Netscape ",
          correct: true,
        },
        {
          text: "Google Chrome  ",
          correct: false,
        },
        {
          text: "IE",
          correct: false ,
        },
      ],
    },{
      id: 12,
      question: "In JavaScript which of the following is done when interpreter encounters?",
      answers: [
        {
          text: " Throws an error",
          correct: false,
        },
        {
          text: "Shows a warning",
          correct: false,
        },
        {
          text: "Prompts to complete the statement ",
          correct: false,
        },
        {
          text: "Ignores the statements",
          correct: true,
        },
      ],
    },{
      id: 13,
      question: "What is the correct syntax for creating an object?",
      answers: [
        {
          text: "var book = Object(); ",
          correct: false,
        },
        {
          text: "var book = new Object();",
          correct: true,
        },
        {
          text: " var book = new Book(); ",
          correct: false,
        },
        {
          text: " var book = new OBJECT();",
          correct:false ,
        },
      ],
    },{
      id: 14,
      question: " Which of the following is not the JavaScriopt operator?",
      answers: [
        {
          text: "typeof ",
          correct: false,
        },
        {
          text: "this ",
          correct: true,
        },
        {
          text: "delete ",
          correct: false,
        },
        {
          text: "new",
          correct:false ,
        },
      ],
    },{
      id: 15,
      question: " What happens when a document loads in javascript?",
      answers: [
        {
          text: "window.onload = displayTime; ",
          correct: true,
        },
        {
          text: "onload = displayTime; ",
          correct: false,
        },
        {
          text: " window.onload = start; ",
          correct: false,
        },
        {
          text: "window. = displayTime;",
          correct: false,
        },
      ],
    }
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "₹ 1,000" },
        { id: 2, amount: "₹ 2,000" },
        { id: 3, amount: "₹ 3,000" },
        { id: 4, amount: "₹ 5,000" },
        { id: 5, amount: "₹ 10,000" },
        { id: 6, amount: "₹ 20,000" },
        { id: 7, amount: "₹ 40,000" },
        { id: 8, amount: "₹ 80,000" },
        { id: 9, amount: "₹ 1,60,000" },
        { id: 10, amount: "₹ 3,20,000" },
        { id: 11, amount: "₹ 6,40,000" },
        { id: 12, amount: "₹ 12,50,000" },
        { id: 13, amount: "₹ 25,00,000" },
        { id: 14, amount: "₹ 50,00,000" },
        { id: 15, amount: "₹ 1,00,00,000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Quiz
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
