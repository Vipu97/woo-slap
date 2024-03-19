import React, { useEffect, useState } from "react";
import axios from "axios";
import CustomSpinner from "../Components/CustomSpinner";

const EventResultPage = ({ response, code }) => {
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchAllQuestions = async () => {
      setLoading(true);
      const { data } = await axios.get(`/question/code/${code}`);
      setQuestions(data);
      setLoading(false);
    };
    fetchAllQuestions();
  }, []);

  const countVotes = (id, option) => {
    let votes = 0;
    for (let i of response) {
      for (let j of i.response) {
        if (j.questId === id && j.answer === option) votes++;
      }
    }
    return votes;
  };
  const countCorrectAnswer = (answers, questId) => {
    let count = 0;
    for (let i of response) {
      for (let j of i.response) {
        if (j.questId == questId && answers.includes(j.answer)) count++;
      }
    }
    return count;
  };
  if (loading) return <CustomSpinner />;
  return (
    <main className="mt-8 flex flex-col gap-y-20">
      {questions.map((ques, index) => {
        return (
          <div className="shadow-result py-4 px-5 rounded-2xl" key={index}>
            <div className="flex font-black items-center justify-between">
              <div
                className="flex gap-2 text-[22px]
                 text-[#1d254f]"
              >
                <h1>{index + 1}.</h1>
                <h1>{ques.question}</h1>
              </div>
              {ques.type === "mcq" && (
                <div className="flex flex-col items-end w-48">
                  <p className="text-[#00c58c] font-black">
                    {countCorrectAnswer(ques.answers, ques._id)} correct answer
                  </p>
                  <p className="text-gray-500 font-medium">
                    out of {response.length} respondent
                  </p>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-4 mt-5">
              {ques.options?.map((option, index) => {
                const votes = countVotes(ques._id, option.input);
                let votesPercentage = votes;
                if (votes != 0)
                  votesPercentage = (votes * 100) / response.length;
                return (
                  <div
                    key={index}
                    className="h-12 flex gap-2 items-center justify-between"
                  >
                    <div className="flex items-center">
                      <div className="w-10">
                        {option.isAnswer && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="#00c58c"
                            className="w-8 h-10"
                          >
                            <path
                              fillRule="evenodd"
                              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </div>
                      <h1 className="w-48 shrink-0">{option.input}</h1>
                    </div>
                    <div className="w-full max-w-[500px] grow flex justify-center">
                      <div
                        className={`flex justify-center 
                           bg-blue rounded-3xl relative right-16`}
                        style={{ width: `calc(${votesPercentage}% - 2rem)` }}
                      >
                        <p
                          className={`font-extrabold text-[13px] text-center w-16 ${
                            votes === 0 ? "text-blue" : "text-white"
                          }`}
                        >
                          {Math.round(votesPercentage)}%
                        </p>
                      </div>
                    </div>
                    <h1 className="w-32 text-right">{votes} Votes</h1>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default EventResultPage;
