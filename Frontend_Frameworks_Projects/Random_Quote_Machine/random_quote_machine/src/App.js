import React, {useState, useEffect} from "react";
import marked from "marked";

function App(props){
  return(
    <div>
    <QuoteMachine/>
    <MarkdownPreviewer/>
    {/* <DrumMachine/> */}
    </div>
  )
}

export default App;

function QuoteMachine(props){
  const[quote, setQuote] = useState("EMPTY QUOTE")
  const[author, setAuthor] = useState("author")
  const[quoteData, setQuoteData] = useState(' ')

  const newQuote = () =>{
    let randIndex = Math.floor(Math.random() * quoteData.length)
    let randQuote = quoteData[randIndex]
    // console.log(quoteData)
    setQuote(randQuote.quote)
    setAuthor(randQuote.author)
  }

  useEffect(() => {
    const Data =  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
    const response = fetch(Data)
      .then((response) => response.json())
      .then((data) => setQuoteData(data.quotes))
    }, [])

  useEffect(() => {
    // console.log(quoteData)
    newQuote()
  }, [quoteData])

    return (
      <div className = "quote-project">
        <div id ='quote-box' className = "quote-box">
          <div className="just-quote">
          <h2 id = 'text'>{quote}</h2>
          </div>
          <h3 id = 'author'>~ {author}</h3>
          <button id = 'new-quote' onClick = {newQuote}>New Quote</button>
          <a id = 'tweet-quote' href="twitter.com/intent/tweet"><i className="fab fa-twitter"></i></a>
        </div>
      </div>
    )
  }
  
function MarkdownPreviewer(props){
  const marked = require("marked")
  
  marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    breaks: true
  })
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
const[markdown, setMarkdown] = useState(starterText)
  function createMarkdown(text){
   return {__html:text}   
  }

  return(
    <div className = "markdown-previewer">
      <textarea id = "editor" className = "input-textarea card" onChange={e => setMarkdown(e.target.value)} defaultValue = {starterText}>
      
      </textarea>
      <div id="preview" className="preview-box card"  dangerouslySetInnerHTML={createMarkdown(marked(markdown))}>
      </div>
    </div>
  )
}




