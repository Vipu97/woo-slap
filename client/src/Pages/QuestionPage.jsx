import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Responded from "../Components/Responded";
import CustomSpinner from "../Components/CustomSpinner";

const QuestionPage = () => {
  const { code } = useParams();
  const [questions, setQuestions] = useState([]);
  const [response, setResponse] = useState([]);
  const [alreadyResponded, setAlReadyResponded] = useState(false);
  const [loading, setLoading] = useState(true);

  const onSelectOption = (questId, answer) => {
    const updatedResponse = [...response];
    let optionAlreadySelected = false;
    for (let i of updatedResponse) {
      if (i.questId === questId) {
        optionAlreadySelected = true;
        i.answer = answer;
      }
    }
    if (!optionAlreadySelected) updatedResponse.push({ questId, answer });
    setResponse(updatedResponse);
  };
  const submitAnswer = async () => {
    console.log("event");
    await axios.post("/event/response", { response, code });
    setAlReadyResponded(true);
  };
  useEffect(() => {
    const isAlreadySubmitted = async () => {
      setLoading(true);
      const { status } = await axios.get(`/event/isSubmitted/${code}`);
      if (status == 200) setAlReadyResponded(true);
      setLoading(false);
    };
    const fetchQuestions = async () => {
      setLoading(true);
      const { data } = await axios.get(`/question/code/${code}`);
      console.log(data);
      setQuestions(data);
      setLoading(false);
    };
    fetchQuestions();
    if (!alreadyResponded) isAlreadySubmitted();
  }, []);

  if (loading)
    return <CustomSpinner />
  return (
    <>
      {alreadyResponded ? (
        <Responded />
      ) : (
        <div>
          <header className="bg-blue w-full h-[70px] flex py-4 px-12">
            <h1 className="font-black text-2xl text-white">wooclap</h1>
          </header>
          <main className="flex flex-col justify-center gap-20 mt-10">
            {questions.map((quest) => {
              return (
                <div
                  className="flex flex-col justify-center gap-4"
                  key={quest._id}
                >
                  <div>
                    <h1 className="text-2xl font-extrabold text-center">
                      {quest.question}
                    </h1>
                  </div>
                  <div className="flex flex-col justify-center gap-5 px-5">
                    {quest.options.map((option, index) => {
                      let optionsClassNames =
                        "mx-auto w-full py-5 rounded-xl flex items-center px-6 cursor-pointer shadow-question max-w-[600px] hover:scale-105";
                      for (let i of response) {
                        if (
                          i.questId === quest._id &&
                          i.answer === option.input
                        ) {
                          optionsClassNames += " bg-blue";
                        }
                      }
                      return (
                        <div
                          className={optionsClassNames}
                          key={index}
                          onClick={() =>
                            onSelectOption(quest._id, option.input)
                          }
                        >
                          <h1 className="font-medium">{option.input}</h1>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </main>
          <footer className="my-10 flex justify-center">
            <button
              className="w-full py-2 px-5 text-blue font-black text-2xl max-w-[400px] shadow-question rounded-3xl hover:scale-105 hover:border-blue hover:border-2"
              onClick={submitAnswer}
            >
              Submit
            </button>
          </footer>
        </div>
      )}
    </>
  );
};

export default QuestionPage;
