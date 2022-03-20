import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "In the UK, the abbreviation NHS stands for National what Service?",
      answers: [
        {
          text: "Humanity",
          correct: false,
        },
        {
          text: "Health",
          correct: true,
        },
        {
          text: "Honour",
          correct: false,
        },
        {
          text: "Household",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Which Disney character famously leaves a glass slipper behind at a royal ball?",
      answers: [
        {
          text: "Cinderella",
          correct: true,
        },
        {
          text: "Pocahontas",
          correct: false,
        },
        {
          text: "Sleeping Beauty",
          correct: false,
        },
        {
          text: "Elsa",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "What name is given to the revolving belt machinery in an airport that delivers checked luggage from the plane to baggage reclaim?",
      answers: [
        {
          text: "Hangar",
          correct: false,
        },
        {
          text: "Terminal",
          correct: false,
        },
        {
          text: "Concourse",
          correct: false,
        },
        {
          text: "Carousel",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "Which of these brands was chiefly associated with the manufacture of household locks?",
      answers: [
        {
          text: "Phillips",
          correct: false,
        },
        {
          text: "Flymo",
          correct: false,
        },
        {
          text: "Ronseal",
          correct: false,
        },
        {
          text: "Chubb",
          correct: true,
        },
      ],
    },
    {
      id: 5,
      question: "1,000 - The hammer and sickle is one of the most recognisable symbols of which political ideology?",
      answers: [
        {
          text: "Republicanism",
          correct: false,
        },
        {
          text: "Communism",
          correct: true,
        },
        {
          text: "Conservatism",
          correct: false,
        },
        {
          text: "Liberalism",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "2,000 - Which toys have been marketed with the phrase “robots in disguise”?",
      answers: [
        {
          text: "Bratz Dolls",
          correct: false,
        },
        {
          text: "Sylvanian Families",
          correct: false,
        },
        {
          text: "Hatchimals",
          correct: false,
        },
        {
          text: "Transformers",
          correct: true,
        },
      ],
    },
    {
      id: 7,
      question: "4,000 - What does the word loquacious mean?",
      answers: [
        {
          text: "Angry",
          correct: false,
        },
        {
          text: "Chatty",
          correct: true,
        },
        {
          text: "Beautiful",
          correct: false,
        },
        {
          text: "Shy",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "8,000 - Obstetrics is a branch of medicine particularly concerned with what?",
      answers: [
        {
          text: "Childbirth",
          correct: true,
        },
        {
          text: "Broken bones",
          correct: false,
        },
        {
          text: "Heart conditions",
          correct: false,
        },
        {
          text: "Old age",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "6,000 - In Doctor Who, what was the signature look of the fourth Doctor, as portrayed by Tom Baker?",
      answers: [
        {
          text: "Bow-tie, braces and tweed jacket",
          correct: false,
        },
        {
          text: "Wide-brimmed hat and extra long scarf",
          correct: true,
        },
        {
          text: "Pinstripe suit and trainers",
          correct: false,
        },
        {
          text: "Cape, velvet jacket and frilly shirt",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "32,000 - Which of these religious observances lasts for the shortest period of time during the calendar year?",
      answers: [
        {
          text: "Ramadan",
          correct: false,
        },
        {
          text: "Diwali",
          correct: true,
        },
        {
          text: "Lent",
          correct: false,
        },
        {
          text: "Hanukkah",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "64,000 - At the closest point, which island group is only 50 miles south-east of the coast of Florida?",
      answers: [
        {
          text: "Bahamas",
          correct: true,
        },
        {
          text: "US Virgin Islands",
          correct: false,
        },
        {
          text: "Turks and Caicos Islands",
          correct: false,
        },
        {
          text: "Bermuda",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "125,000 - Construction of which of these famous landmarks was completed first?",
      answers: [
        {
          text: "Empire State Building",
          correct: false,
        },
        {
          text: "Royal Albert Hall",
          correct: false,
        },
        {
          text: "Eiffel Tower",
          correct: false,
        },
        {
          text: "Big Ben Clock Tower",
          correct: true,
        },
      ],
    },
    {
      id: 13,
      question: "250,000 - Which of these cetaceans is classified as a “toothed whale”?",
      answers: [
        {
          text: "Gray whale",
          correct: false,
        },
        {
          text: "Minke whale",
          correct: false,
        },
        {
          text: "Sperm whale",
          correct: true,
        },
        {
          text: "Humpback whale",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "500,000 - Who is the only British politician to have held all four “Great Offices of State” at some point during their career?",
      answers: [
        {
          text: "David Lloyd George",
          correct: false,
        },
        {
          text: "Harold Wilson",
          correct: false,
        },
        {
          text: "James Callaghan",
          correct: true,
        },
        {
          text: "John Major",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "1 million - In 1718, which pirate died in battle off the coast of what is now North Carolina?",
      answers: [
        {
          text: "Calico Jack",
          correct: false,
        },
        {
          text: "Blackbeard",
          correct: true,
        },
        {
          text: "Bartholomew Roberts",
          correct: false,
        },
        {
          text: "Captain Kidd",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
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
              <h1 className="endText">You won: {earned}</h1>
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
                  <Trivia
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
