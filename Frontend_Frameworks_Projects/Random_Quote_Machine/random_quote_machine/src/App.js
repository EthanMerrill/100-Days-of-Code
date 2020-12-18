import React, {useState, useEffect} from "react";


function App(props){
  const[quote, setQuote] = useState("EMPTY QUOTE")
  const[author, setAuthor] = useState("author")
  const[quoteData, setQuoteData] = useState('')

  useEffect(() => {
    const Data =  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
    const response = fetch(Data)
      .then((response) => response.json())
      .then((data) => {
        setQuoteData(data.quotes);
      })
    }, [])

  const newQuote = () =>{
    const Data =  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
    fetch(Data)
      .then((response) => response.json())
      .then((data) => {
        let quoteArr = data.quotes;
        let randIndex = Math.floor(Math.random() * quoteArr.length)
        let randQuote = quoteArr[randIndex]
        console.log(randQuote)
        setQuote(randQuote.quote)
        setAuthor(randQuote.author)
      })
  }

    return (
      <div>
      <div class = "quote-box">
      <h2>{quote}</h2>
      <h3>Author: {author}</h3>
      </div>
      <button onClick = {newQuote}>Button</button>
    </div>
    )
  }
  


export default App;

