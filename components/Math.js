import React from "react";
import { useState } from "react";
// import {FaBars, FaTimes} from "react-icons/fa";
// import {useRef} from "react";

const Math = () => {
  const [userInput, setUserInput] = useState('');
  const [apiOutput, setApiOutput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const callGenerateEndpoint = async () => {
    setIsGenerating(true);

    console.log("calling OpenAI");
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userInput }),
    });

    const data = await response.json();
    const { output } = data;
    console.log("openai reposoned...", output.text);

    setApiOutput(`${output.text}`);
    setIsGenerating(false);
  };

  const onUserChangedText = (event) => {
    // console.log(event.target.value)
    setUserInput(event.target.value);
  };

  return (
    <div className="root">
      <div className="container">
        <div className="subject">
          <button className="subj-btn">Math</button>
        </div>
        <div className="prompt-container">
          <textarea
            placeholder="enter math problem here"
            className="prompt-box"
            value={userInput}
            onChange={onUserChangedText}
          />
          <div className="prompt-buttons">
            <a
              className={
                isGenerating ? 'generate-button loading' : 'generate-button'
              }
              onClick={callGenerateEndpoint}
            >
              <div className="generate">
                {isGenerating ? <span className="loader"></span> : <p>Generate</p>}
              </div>
            </a>
          </div>
          {apiOutput && (
            <div className="output">
              <div className="output-header-container">
                <div className="output-header">
                  <h3>Output</h3>
                </div>
              </div>
              <div className="output-content">
                <p>{apiOutput}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Math;
