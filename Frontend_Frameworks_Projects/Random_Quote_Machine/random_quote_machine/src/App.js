import React, {useState, useEffect, useRef } from "react";
import marked from "marked";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

function App(props) {
  return (<div>
    
    <Router basename="./">
      <div className="navbar-expand">
        <nav className="navbar">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/landingPage">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/quoteMachine">
                Quote Machine
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/markdownpreviewer">
                Markdown Previewer{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/drummachine">
                Drum Machine
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/calculator">
                Calculator
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pomodoro">
                Pomodoro Clock
              </Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/landingPage">
            <LandingPage />
          </Route>
          <Route path="/quoteMachine">
            <QuoteMachine />
          </Route>
          <Route path="/markdownpreviewer">
            <MarkdownPreviewer />
          </Route>
          <Route path="/drummachine">
            <DrumMachine />
          </Route>
          <Route path="/calculator">
            <Calculator />
          </Route>
          <Route path="/pomodoro">
            <Pomodoro />
          </Route>
        </Switch>
      </div>
    </Router>
    <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
    </div>
  );
}

export default App;

function LandingPage(props) {
  return (
    <div id="landingPageContainer">
      <h1>Hello!</h1>
      <p>This is a collection of projects built in React by Ethan Merrill in December of 2020</p>
      <ul className="inline-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/quoteMachine">
            Quote Machine
              </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            to="/markdownpreviewer">
            Markdown Previewer{" "}
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/drummachine">
            Drum Machine
              </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/calculator">
            Calculator
              </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/pomodoro">
            Pomodoro Clock
              </Link>
        </li>
      </ul>
    </div>
  )
}



function QuoteMachine(props) {
  const [quote, setQuote] = useState("EMPTY QUOTE");
  const [author, setAuthor] = useState("author");
  const [quoteData, setQuoteData] = useState(" ");

  const newQuote = () => {
    let randIndex = Math.floor(
      Math.random() * quoteData.length
    );
    let randQuote = quoteData[randIndex];
    // console.log(quoteData)
    setQuote(randQuote.quote);
    setAuthor(randQuote.author);
  };

  useEffect(() => {
    const Data =
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
    const response = fetch(Data)
      .then((response) => response.json())
      .then((data) => setQuoteData(data.quotes));
  }, []);

  useEffect(() => {
    // console.log(quoteData)
    newQuote();
  }, [quoteData]);

  return (
    <div>

      <div className="quote-project">
        <BackgroundImage quote={quote} />
        <div className="quotebox-vert-center">
          <div id="quote-box" className="quote-box card">
            <div className="just-quote">
              <h2 id="text">{quote}</h2>
            </div>
            <h3 id="author">~ {author}</h3>
            <button
              id="new-quote"
              className="btn btn-outline-primary"
              onClick={newQuote}>
              New Quote
            </button>
            <a
              id="tweet-quote"
              href="twitter.com/intent/tweet">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function BackgroundImage(props) {
  // let imgsrc = "https://source.unsplash.com/random?"
  // let key = props.quote
  // useEffect(() => {
  //   key = props.quote
  //   console.log("refreshed")
  // }, [props.quote])

  return (
    // Requires a cachebreaker: https://stackoverflow.com/questions/1077041/refresh-image-with-a-new-one-at-the-same-url
    <div className="background-image-container">
      <img
        id="background"
        // value={key}
        className="random-background"
        src="https://source.unsplash.com/random"></img>
    </div >)
}

function MarkdownPreviewer(props) {
  const marked = require("marked");

  marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    breaks: true,
  });
  const starterText = `  # Header 
  ## subheader
  <a href="google.com">Google</a>
        
      code?
  
  inline <code> code </code> here!

  <code>some code</code>

  \`More Code\`
  - list item

  **Bolded Text**

  > block quote 

  My favorite search engine is [Duck Duck Go](https://duckduckgo.com).

  ![Tux, the Linux mascot](https://d33wubrfki0l68.cloudfront.net/e7ed9fe4bafe46e275c807d63591f85f9ab246ba/e2d28/assets/images/tux.png)
  `;
  const [markdown, setMarkdown] = useState(starterText);
  function createMarkdown(text) {
    return {__html: text};
  }

  return (
    <div>
      {/* <h1>Markdown Previewer</h1> */}
      <div className="markdown-previewer">
        <div>
          <h3>Input Text</h3>
          <textarea
            id="editor"
            className="input-textarea card"
            onChange={(e) => setMarkdown(e.target.value)}
            defaultValue={starterText}></textarea>
        </div>
        <div className="fa-font-size">
          <i class="fas fa-arrow-right fa-xs"></i>
        </div>
        <div>
          <h3>Markdown Output</h3>
          <div
            id="preview"
            className="preview-box card"
            dangerouslySetInnerHTML={createMarkdown(
              marked(markdown)
            )}></div>
        </div>
      </div>
    </div>
  );
}

function DrumMachine(props) {
  // Set Display
  const [displayValue, setDisplayValue] = useState(
    "Drumpad 2000"
  );

  // add keys event listener
  window.addEventListener("keydown", (e) => {
    // console.log(padBank.keyCode(e.key))
    activateButton(e.key, setDisplayValue, "Heater-3");
  });
  // Create each drum pad from array
  let padBank;
  padBank = bankOne.map((elem, idx) => {
    // console.log('keycodekeyCode = {elem.keycode}')
    return (
      <DrumPad
        key={idx}
        id={elem.id}
        keycodekeyCode={elem.keyCode}
        name={elem.id}
        keyTrigger={elem.keyTrigger}
        url={elem.url}
        displayHook={setDisplayValue}
      />
    );
  });
  // console.log(bankOne[0])

  return (
    <div id="drum-machine" className="drum-machine">
      {/* <h1>Drum Machine</h1> */}
      <div className="drum-machine-container">
        <div id="display" className="display">
          <p className="lcd-text">{displayValue}</p>
        </div>
        <h2>AudioSlayer 640</h2>
        <div className="padBankArr">{[...padBank]}</div>
      </div>
    </div>
  );
}

function DrumPad(props) {
  return (
    <div
      id={props.id}
      className="drum-pad"
      onClick={() => {
        activateButton(
          props.keyTrigger,
          props.displayHook,
          props.name
        );
      }}>
      <p className="keyLabel">{props.keyTrigger}</p>
      <audio
        id={props.keyTrigger}
        className="clip"
        src={props.url}></audio>
    </div>
  );
}

const activateButton = (keyTrigger, hook) => {
  keyTrigger = keyTrigger.toUpperCase();
  if (
    ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"].includes(
      keyTrigger
    ) === true
  ) {
    // locate the sound element
    const sound = document.getElementById(keyTrigger);
    // console.log(sound)
    //set the style to pressed by changing the class:
    const button = sound.closest("div");
    // console.log(button)
    button.classList.add("pressed");
    let name = button.id;
    sound.play().then((promise) => {
      button.classList.remove("pressed");
    });
  }
};

const bankOne = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Heater-1",
    url:
      "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Heater-2",
    url:
      "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Heater-3",
    url:
      "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Heater-4",
    url:
      "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Clap",
    url:
      "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Open-HH",
    url:
      "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Kick-n'-Hat",
    url:
      "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Kick",
    url:
      "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Closed-HH",
    url:
      "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

function Calculator(props) {
  const [calcDisplay, setCalcDisplay] = useState("0");

  let calculatorComponents;
  calculatorComponents = calculatorButtonArray.map(
    (elem, idx) => {
      return (
        <CalculatorButton
          key={elem.text}
          text={elem.text}
          value={elem.value}
          hook={setCalcDisplay}
          getHook={calcDisplay}
        />
      );
    }
  );

  const clearDisplay = (anything = "") => {
    setCalcDisplay("0");
  };

  useEffect(() => {
    let updatedVal = decimalCheck(String(calcDisplay));
    updatedVal = operatorCheck(updatedVal);
    setCalcDisplay(updatedVal);
  }, [calcDisplay]);

  const operatorCheck = (displayVal) => {
    const lumpOfOperators = displayVal.match(
      /([\+\/\*]|(\-(?!(\d+|$)))){2,}/g
    );
    if (lumpOfOperators != null) {
      // console.log(`Operator Check found: ${lumpOfOperators.length}`)
      let signReplacement = lumpOfOperators[0].slice(-1);
      console.log(
        `Lump of Operators: ${lumpOfOperators} signReplacement: ${signReplacement} Final Value: ${displayVal.replace(
          lumpOfOperators,
          signReplacement
        )}`
      );
      return displayVal.replace(
        lumpOfOperators,
        signReplacement
      );
    } else {
      return displayVal;
    }
  };

  const decimalCheck = (displayVal) => {
    // check for multiple consecutive decimals
    if (displayVal.match(/(\.{2,})/g)) {
      let replacementNumber = displayVal.replace(
        /(\.{2,})/g,
        "."
      );
      console.log(
        `Tripped consecutive Decimal Checker: ${displayVal.match(
          /(\.{2,})/g
        )} replaced with: ${replacementNumber}`
      );
      displayVal = replacementNumber;
    }
    //check for muliple non-consecutive decimals and keep just the first one.
    if (displayVal.match(/(\d+\.+){2,}/)) {
      // get everything after the first decimal:
      let postFirstDecimal = displayVal
        .match(/(?<=\.)[\d\.]*/)[0]
        .replace(".", "");
      console.log(`postFirstDecimal: ${postFirstDecimal}`);

      displayVal = displayVal
        .match(/(?<=\.)[\d\.]*/)[0]
        .concat(postFirstDecimal);
      console.log(`Tripped Decimal Checker: ${displayVal}`);
      // return displayVal
    }

    return displayVal;
  };
  //This function could definitely be refactored...
  async function evaluate() {
    var tempDisplay = decimalCheck(calcDisplay);
    // multiplication
    let multiplicationPair = calcDisplay.match(
      /(\-?\d+\.?\d*)(\*)(\-?\d+\.?\d*)/
    );
    // let tempDisplay = calcDisplay
    while (multiplicationPair != null) {
      if (multiplicationPair == null) {
        break;
      }
      // console.log(`Multiplication Pair: ${multiplicationPair[0]}`)
      let multiplicationResults = operator(
        multiplicationPair[0]
      );
      tempDisplay = tempDisplay.replace(
        multiplicationPair[0],
        multiplicationResults
      );
      multiplicationPair = tempDisplay.match(
        /(\-?\d+\.?\d*)(\*)(\-?\d+\.?\d*)/
      );
    }
    setCalcDisplay(tempDisplay);
    // console.log(`temp display at multiplication: ${tempDisplay}`)
    // division
    let divisionPair = calcDisplay.match(
      /(\-?\d+\.?\d*)(\/)(\-?\d+\.?\d*)/
    );
    while (divisionPair != null) {
      if (divisionPair == null) {
        break;
      }
      // console.log(`Division Pair: ${divisionPair[0]}`)
      let divisionResults = operator(divisionPair[0]);
      tempDisplay = tempDisplay.replace(
        divisionPair[0],
        divisionResults
      );
      divisionPair = tempDisplay.match(
        /(\-?\d+\.?\d*)(\/)(\-?\d+\.?\d*)/
      );
    }
    setCalcDisplay(tempDisplay);
    // console.log(`temp display at division: ${tempDisplay}`)
    // addition and subtraction operations
    let additionSubtractionPair = calcDisplay.match(
      /(\-?\d+\.?\d*)(\+|\-)(\-?\d+\.?\d*)/
    );
    while (additionSubtractionPair != null) {
      if (additionSubtractionPair == null) {
        break;
      }
      let additionResults = operator(
        additionSubtractionPair[0]
      );
      // console.log(`Addition Subtraction Pair ${additionSubtractionPair[0]} temp display: ${tempDisplay} addition Results: ${additionResults}`)
      tempDisplay = tempDisplay.replace(
        additionSubtractionPair[0],
        additionResults
      );
      additionSubtractionPair = tempDisplay.match(
        /(\-?\d+\.?\d*)(\+|\-)(\-?\d+\.?\d*)/
      );
    }
    setCalcDisplay(tempDisplay);
    // console.log(`temp display at addition/subtraction: ${tempDisplay}`)
    return;
  }

  const operator = (numberPair) => {
    let operator = numberPair.match(
      /(?<=\d)[^\d\w\s.](?=\d|\-)/
    );
    operator = operator[0];
    // console.log(`operator: ${operator}`)
    let numbers = numberPair.match(
      /(?<!\d)(\-?\d+\.?\d*)/g
    );
    numbers[0] = parseFloat(numbers[0]);
    numbers[1] = parseFloat(numbers[1]);

    switch (operator) {
      case "/":
        // console.log(`Number 0 ${numbers[0]} Number 1 ${numbers[1]} Operator: ${operator} Result: ${numbers[0]/numbers[1]}`)

        return numbers[0] / numbers[1];
      case "+":
        // console.log(`Number 0 ${numbers[0]} Number 1 ${numbers[1]} Operator: ${operator} Result: ${numbers[0]+numbers[1]}`)

        return numbers[0] + numbers[1];
      case "-":
        // console.log(`Number 0 ${numbers[0]} Number 1 ${numbers[1]} Operator: ${operator} Result: ${numbers[0]-numbers[1]}`)

        return numbers[0] - numbers[1];
      case "*":
        // console.log(`Number 0 ${numbers[0]} Number 1 ${numbers[1]} Operator: ${operator} Result: ${numbers[0]*numbers[1]}`)
        return numbers[0] * numbers[1];
      default:
        console.log(
          `unknown operator ${operator}  type: typeof: ${typeof operator}`
        );
    }
  };

  return (
    <div className="calculator-container">
      

      <div className="button-grid">
        <div id="display" className="calculator-display">
          <p>{calcDisplay}</p>
        </div>
        <div className="subgrid-cell">
          <CalculatorButton
            className="equals calc-button"
            text="equals"
            value="="
            hook={evaluate}
            getHook={calcDisplay}
          />
          <CalculatorButton
            className="disp-clear calc-button"
            value="clear"
            text="clear"
            hook={clearDisplay}
            getHook={calcDisplay}
          />
        </div>
        {[...calculatorComponents]}
      </div>
    </div>
  );
}

function CalculatorButton({text, value, hook, getHook}) {
  return (
    <div
      id={text}
      className="calculator-number calc-button"
      onClick={() => {
        hook(numberParser(value, getHook));
      }}>
      <p className="button-text">{value}</p>
    </div>
  );
}

function numberParser(value, getHook) {
  if (getHook == "0") {
    return value;
  } else {
    return `${getHook}${value}`;
  }
}

const calculatorButtonArray = [
  {text: "one", value: 1},
  {text: "two", value: 2},
  {text: "three", value: 3},
  {text: "four", value: 4},
  {text: "five", value: 5},
  {text: "six", value: 6},
  {text: "seven", value: 7},
  {text: "eight", value: 8},
  {text: "nine", value: 9},
  {text: "zero", value: 0},
  {text: "decimal", value: "."},
  {text: "subtract", value: "-"},
  {text: "multiply", value: "*"},
  {text: "divide", value: "/"},
  {text: "add", value: "+"},
];

function Pomodoro(props) {
  const [
    currentSessionType,
    setCurrentSessionType,
  ] = useState("Session");
  const audioElement = useRef(null);
  const [intervalId, setIntervalId] = useState(null);
  const [sessionLen, setSessionLen] = useState(25);
  const [pBreak, setPBreak] = useState(5);
  const [timeLeft, setTimeLeft] = useState(
    sessionLen + ":00"
  );

  const TimerObject = new TimeObject(sessionLen, 0);

  useEffect(() => {
    // console.log(TimerObject.getStringTime());;
    if(currentSessionType=="Session"){
      TimerObject.setTimeWithString(sessionLen+":00")
      setTimeLeft(TimerObject.getStringTime());
        // TEMP FOR TESTING:
      // const timerRe = new RegExp(/^(\d{2,4})[\.:,\/](\d{2})$/);
      // console.log(document.getElementById('time-left').innerText)
      // console.log(`innerText of SessionLen: ${document.getElementById('time-left').innerText}  | What the FCC tester is finding: ${timerRe.exec(document.getElementById('time-left').innerText)[2]}`)

    }
  }, [sessionLen]);

  useEffect(() => {
    // console.log(TimerObject.getStringTime());;
    if(currentSessionType=="Break"){
      TimerObject.setTimeWithString(pBreak+":00")
      setTimeLeft(TimerObject.getStringTime());
    }
  }, [pBreak]);

  useEffect(() => {

    if (currentSessionType === "Session" && timeLeft=="00:00") {
      console.log("FLIPFROM sesh")
      setCurrentSessionType("Break");
    }
      if (currentSessionType === "Break" && timeLeft=="00:00") {
      console.log("FLIPFROM Break")
      setCurrentSessionType("Session");
    }
  },[timeLeft])

  const isStarted = intervalId !== null;

  const handleStartStopClick = () => {
    if (isStarted) {
      clearInterval(intervalId);
      setIntervalId(null);
    } else {
      // decrement Timeleft by one every second
      TimerObject.setTimeWithString(timeLeft)
      const newIntervalId = setInterval(() => {
        setTimeLeft((prevTimeLeft) => {
          // console.log(`TimeLeft: ${timeLeft} prevTimeLeft: ${prevTimeLeft}`)
          TimerObject.subtractSeconds(1);
          if (currentSessionType === "Session" && prevTimeLeft=="00:00") {
            // console.log("FLIPFROM sesh")
            // setCurrentSessionType("Break");
            TimerObject.setMinutes(pBreak)
            TimerObject.setSeconds(0)
            audioElement.current.play();
          }
          // if break
          if (currentSessionType === "Break" && prevTimeLeft=="00:00") {
            // console.log("FLIPFROM Break")
            // setCurrentSessionType("Session");
            TimerObject.setMinutes(sessionLen)
            TimerObject.setSeconds(0)
            audioElement.current.play();
          }
          
          return TimerObject.getStringTime()
        });
      }, 1000);

      setIntervalId(newIntervalId);
    }
  };
// https://github.com/AryanJ-NYC/fcc-pomodoro-clock/blob/04-reset-button/src/App.js
  const handleResetButtonClick = () => {
    audioElement.current.load();
    if (isStarted) {
      handleStartStopClick()
    } 
    setSessionLen(25);
    setPBreak(5);
    TimerObject.setMinutes(sessionLen);
    TimerObject.setSeconds(0);
    setCurrentSessionType("Session")
    setTimeLeft(TimerObject.getStringTime());
    // TEMP FOR TESTING:
    // const timerRe = new RegExp(/^(\d{2,4})[\.:,\/](\d{2})$/);
    // console.log(`RESET BUTTON CLICK |--| innerText of SessionLen: ${document.getElementById('time-left').innerText}  | What the FCC tester is finding: ${timerRe.exec(document.getElementById('time-left').innerText)[2]}`)
  }

  return (

      <div id="pomodoro-container">
      <div className="background-image-container">
        <img className="random-background" src={"https://images.unsplash.com/photo-1536060316316-2466bda904f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"}></img>
      </div>
      <div className="pomodoro-vert-center">
        <div className="pomodoro">
          <div className="break-section card">
          <div id="break-label" className="break-label ">
            Break Length
          </div>
            <div className="timer-adjustment">
          <ModButton
                incOrDec="decrement"
            target="break"
            hook={pBreak}
            setHook={setPBreak}
            TimerObject={TimerObject}
            setTimeLeft={setTimeLeft}
            handleRestButtonClick = {handleResetButtonClick}
          />
              <div id="break-length" className="pomo-display">
                {pBreak}
              </div>
          <ModButton
                incOrDec="increment"
            target="break"
            hook={pBreak}
            setHook={setPBreak}
            TimerObject={TimerObject}
            setTimeLeft={setTimeLeft}
            handleResetButtonClick = {handleResetButtonClick}
          />
            </div>
          </div>
          <div className="session-section card">
            <div id="session-label" className="session-label">
              Session Length
            </div>
            <div className="timer-adjustment">
            <ModButton
                incOrDec="decrement"
              target="session"
              hook={sessionLen}
              setHook={setSessionLen}
              TimerObject={TimerObject}
              setTimeLeft={setTimeLeft}
              handleResetButtonClick = {handleResetButtonClick}
            />
              <div id="session-length" className="pomo-display">
                {sessionLen}
              </div>
            <ModButton
                incOrDec="increment"
              target="session"
              hook={sessionLen}
              setHook={setSessionLen}
              TimerObject={TimerObject}
              setTimeLeft={setTimeLeft}
              handleResetButtonClick = {handleResetButtonClick}
            />
            </div>
          </div>
          <div className="timer-section">
          <TimerLabel currentSessionType = {currentSessionType}/>


            <div id="time-left" className="pomo-display large">{timeLeft}
              <div
                id="reset"
                onClick={handleResetButtonClick}>
                <i class="fas fa-sync"></i>
              </div>
            </div>
            <StartStop
            id="start_stop"
            handleStartStopClick={handleStartStopClick}
            startStopButtonLabel={
              isStarted ? '<i class="fas fa-pause"></i>' : '<i class="fas fa-play"></i>' 
            }
            timeLeft={timeLeft}
          />
          </div>

        </div>
      </div>

      <div className="image-credit"><span>Photo by <a href="https://unsplash.com/@emmamatthews?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Emma Matthews Digital Content Production</a> on <a href="https://unsplash.com/s/photos/productive?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span></div>
      <audio id="beep" ref={audioElement}>
        <source src="https://onlineclock.net/audio/options/default.mp3" type="audio/mpeg" />
      </audio>
    </div >
  );
}


const TimerLabel = ({currentSessionType}) =>{
  let className
  if (currentSessionType == "Session") {
    className = "badge bg-success"
  } else if (currentSessionType == "Break") {
    className = "badge bg-secondary"
  }
  return (<div id="timer-label" className={className}>{currentSessionType}</div>)
}

const StartStop = ({
  handleStartStopClick,
  startStopButtonLabel,
}) => {
  return (
    <div className="start-stop-container">
      <button
        type="button"
        className="btn btn-primary btn-lg"
        id="start_stop"
        onClick={handleStartStopClick}
        dangerouslySetInnerHTML={{ __html: startStopButtonLabel }}>
      </button>
    </div>
  );
};

const ModButton = (props) => {
  // console.log(props)
  let TimerObject = props.TimerObject;
  let icon
  if (props.incOrDec == "increment" && props.hook < 60) {
    icon = '<i class="fas fa-plus"></i>';
  } else if (props.incOrDec == "decrement" && props.hook > 1) {
    icon = "<i class='fas fa-minus'></i>";
  } else {
    icon = "<i class='fas fa-times-circle'></i>"
  }

  return (
    <div>
      <button
        id={props.target + "-" + props.incOrDec}
        className="button"
        dangerouslySetInnerHTML={{ __html: icon }}
        onClick={(e) => {
          const startStopElement = document.getElementById("start_stop");

          let crementer;
          if (props.incOrDec == "increment" && props.hook < 60) {
            crementer = "+";
          } else if (props.incOrDec == "decrement" && props.hook > 1) {
            crementer = "-";

          } else {
            // console.log("session timelength Max-ed or Min-ed")
            return
          }
          // deal with the timer object

          if (TimerObject.getMinutes() > 0) {
            TimerObject.setMinutes(props.hook + parseInt(`${crementer}1`));
          }

          if (startStopElement.innerHTML!="Stop") {           
            props.setHook(TimerObject.getMinutes());
          }
        }}>
      </button>
    </div>
  );
};

class TimeObject {
  constructor(minutes, seconds) {
    this.minutes = parseInt(minutes);
    this.seconds = parseInt(seconds);
  }
  getSeconds() {
    return parseInt(this.seconds);
  }
  getMinutes() {
    return parseInt(this.minutes);
  }
  getStringTime() {
    if (this.minutes < 10 && this.minutes[0] != 0) {
      this.minutes = `0${this.minutes}`;
    }
    if (this.seconds < 10 && this.seconds[0] != 0) {
      this.seconds = `0${this.seconds}`;
    }
    return `${this.minutes}:${this.seconds}`;
  }

  setTimeWithString(string){
    this.minutes = string.split(":")[0]
    this.seconds = string.split(":")[1]
  }
  setMinutes(minutes) {
    if (minutes > 0) {
      this.minutes = minutes;
    }
  }
  setSeconds(seconds) {
    this.seconds = seconds;
  }

  subtractSeconds(amount) {
    if (amount > 59) {
      console.log(
        "cannot subtract more than 59 seconds because Ethan doesn't want to write code for that"
      );
      return;
    }
    if (this.minutes == 0 && this.seconds == 1) {
      this.seconds = 0;
    } else if (this.seconds > 0) {
      this.seconds -= amount;
    } else if (this.seconds == 0 && this.minutes > 0) {
      this.minutes -= 1;
      this.seconds = 59;
    }
    // console.log(`minutes: ${this.minutes} seconds: ${this.seconds}`)
  }
}
