# Basic Html and HTML5
|Thing |Description|
|---|---|
| main | most content in the page. Contains the body. does not contain Header, footer, navigation. |
|a tags that go places in the page| set the href to "#elementid" to link them|
|target| target is an anchor tag attribute that specifies to open the link in a new tab.|
| dead links| replace the href with a #. This is useful when manipulating the link using Javascript|
|input elements| Input types: Text Required, just add required in plaintext no quotes to the tag|
|label elements| use a label when nesting radio elements (input type = radio) can add the for attribute to associate it with the id of a nested input tag. For is used by screen readers.|
|checked| just add checked inside a checkbox element to make it checked by default|
|DOCTYPE for HTML5 | Looks like ```<!DOCTYPE html>```

## Questions

<hr>

# Basic CSS

|Thing | Description|
|---|---|
|CSS Classes| ```.example-class{}``|
|backup fonts| ```font-family: lobster, monospace``` will cause the font to be monospace if lobster is not found|
|ID Selector| ```#idbeingselected```|
|clockwise notation| ```padding:toppx, rightpx, bottompx, leftpx```|
|type attribute selector| ```[type='radio']```|
|class hierarchy| the order of the classes in the html tag is what determines which class has priority|
|Short hex Codes| only 4,000 possiblities. EX ```FFF0000``` can be shortened to ```#F00```|
|RGB Values | ```rgb(0,0,0)```|
|:Root Element| Used for declaring variables in css. its a pseudo class selector. This means that variables will be available globally if they are created in the root.
|media Queries| ```@media (max-width:350px){} ``` defines other variables to use for mobile devices


### Variables
declaration: ```--IAMVARIABLE```
usage: ```background-color: var(--penguin-skin, fallbackvalue);```
```
:root {
    --red-color: red;
  }
```
locally declared variables take precidence over root declared variables

### Media Queries

### Hierarchy of style declaraton
0. !important
1. inline style
2. id
3. class
4. 2nd class listed

### Basic CSS: Units

|unit|absolute or relative| relative to what|
|px|absolute| |
|in|absolute| |
|mm|absolute| |
|em|relative| size of elements font|
|rem|relative| relative to the font size of the root element|
|vw|relative| relative to 1% of the width of the viewport|
|vh|relative| relative to 1% of the height of the viewport|
|vmin|relative| relative to 1% of the viewports smaller dimesion|

---

# Applied Visual Design

|thing|description|
|---|---|
|hr Tag| Makes a horizontal line -- Useful!|
|rgba| like RGB, But the a is for opacity. |
|box-shadow| takes values for: offset-x, offset-y, blur-radius, spread-radius, color(in that order)|
| opacity | a useful tag|
|text-transform| takes args: uppercase, lowercase, capitalize, initial, inherit, none. |
|line-height|changes the height of each line in the paragraph|
|Offsets| DO NOT USE Offset-left, just say ```left:10px;``` and this will move it 10px to the right|
|position:fixed|wont move when the user scrolls|
|Float| Can float :left and right for a two column layout or Content::sidebar layout. Quite useful|
|linear-gradient| ```background: linear-gradient(90deg, red, yellow, rgb(204, 204, 255));``` can also be a ```repeating-linear-gradient```|
|set background as photo| simply use url(urlgoeshere)|
|scale| increases the size of the element by the factor specified, I imagine this would be used for animations|
|skew| another function of the transorm property. ```transform:skewX(32deg)```|
|Before and After| ::Before and ::After are pseudo elements used to add something before or after the selected element. for them to work, a content property must be defined:``` .heart::before {content: "";}```|
|Keyframes| @keyframes name {0%{red} 100%{blue}}|
|animation-fill-mode:|set this property to forwards to keep an item highlighted when hovering. If this is not set, it might be on a time interval and snap back to its original state after the interval is over|
|animation-iteration-count| the number of times for the animation to occur. Can be set to infinite|
|animation-timing=function| determines how the animation occurs, can ease in ease out, linear, ease|
|

## Before and After



# Applied Accessibility

|term|description|
|---|---|
|audio Controls| expose hardware audio control to the browser by adding the attribute: controls to an audio tag.|
|Audio Embed| ```<audio><source src="URLHERE" type="audio/mpeg">```|
|Figure tags| Used to show figures, like charts 'n things|
|figure caption tag| |
|fieldset tag| a tag surounds a grouping of radio buttons which binds them together for screen readers|
|legend tag| a tag used to describe the contents of a fieldset radio button array|
|time tag| a tag used totell a screen reader that the enclosed text is a time takes a datetime attribute which takes the numeric time, as opposed to the one written in plain text in between the tag|
|sup tag| used to add a super script, common in the 'th' of dates|
|sr-only class| can make a css class that only shares content with the screen reader (will be hidden on the page). display non and visibility hidden hide content from all users, so you must just move the element very far from the viewport. |
|accesskey attribute| used for keyboard only users. This is what makes it possible to tab through a webpage. | 
|tabindex attribute| indicates an element can be focused on. if 0 then it can be focused on by the user and is reachable by the keyboard. if set to 1, that element is brought to focus first.|

# Responsive Web Design Principles: create a media Query

|Term| Description|
|---|---|
|responsive images| ```max-width:100%; Height:auto;```|
|Viewport sizing| vw is viewport width, so 10vw is 10% of viewport width, vh, vmin is the smaller dimension vmin20 of a (200x300) display would be 40|

# CSS Flexbox
|Term| Description|
|---|---|
|Flex-basis| Specifies the original size of the item before it is adjusted by css|
|flex|Shorthand for the flex-grow, flex-shrink, flex-basis, DO not put commas between the attributes when listing them!|
|order| used to re-arrange elements in a flexbox|
|Align-self| accepts the same argument as align-items and will override any value set by the align-items property. this allows the adjustment of each items alignment individually as opposed to setting them all at once. This is a useful property because float, clear, and vertical align do not work on flex items|


# CSS Grid

|thing|Description |
|---|---|
|Display:grid;| creates a grid|
|grid-template-columns|50px 50px would be a two column grid with columns 50 pixels wide. fr sets the unit to a fraction of the available space. auto sets it to the height of content automatically. % adjusts to the percent width of its container. |
|grid-template-rows| works the same way as columns. |
|grid-column-gap| sets the gap in the columns|
|grid-gap| shorthand for row and column gap. if given one value it sets both as the same, if given two, the first is row and 2nd is column|
|grid-column| example: ```grid-column:1/3;``` this creates an item which will use two columns. Think of the numbers as column lines. this item goes from column line 1 to column line 3. |
|grid-template-areas|groups cells together in an area and then gives them a name. sort of strange looking. Basically a long formatted string. ``grid-template-areas: "header header header`` usually assigned to a class called a container|
| grid-area: | places a element in whatever is defined in the grid template areas. can also take the ``1/3`` lines format as mentioned in the grid columns definition. THe placement is the same. example: ```grid-area: horizontal line to start at / vertical line to start at / horizontal line to end at / vertical line to end at;```|
|: repeat function| ``grid-tempalate-row:repeat(100, 50px)`` creates a 100 row grid with row heights of 50px. repeat is a function that can be inserted in most places in the grid ecosystem its format is repeat(number of times, attribute)|
|minmax() function| defines a min, max which gives some scalability to the element|
|autofill| can be inserted into a repeat function like so: ``repeat(auto-fill, minmax(20px, 1fr))``. it inserts as many rows or columns as possible given the desired size( the second argument in the repeat function)|
|auto-fit| instead of adding more elements, like auto fill, auto-fit will stretch items to fit the container. If all the items do not fit in one row it will move them down to a new one. |
|

# Free Code Camp design livestream notes
<a href="https://www.youtube.com/watch?v=r-GpCakJjxc">video here</a>

- [7:47] Need Whitespace in navbars
- [8:45] *call to action* make it obvious
- [11:46] Viewport widths and whitespace. Target all resolutions
- [19:29] use a two column layout when designing desktop versions. Make it possible to expand to a three column layout
- [24:10] have a primary call to action 
- [25:10] use cards -- I have this down!
- [25:00] *visual hierarchy* place emphasis on the most importat elements and to seperate elements from one another. Ex. Seperation between the title. can use bold, size, color to seperate items.
- [27:30] *floating labels* never rely on just placeholder values. People forget what the text input is about. solve this with dedicated labels or floating labels
- [31:30] Carosels on hero sections are bad. (oof) 
- [34:26] Make animations the right speed.
- [37:41] Don't put progress bars on skills (DUH)
- [38:54] *Borders* Don't use borders to break up sections like ```<hr>```, its an artifact of ye old web. :( ok.
- [41:21] Form width, don't make your forms uber wide in desktop mode
- [49:40] Theming consistency
- [57:30] *Information Architecture* what does it make sense for the primary call to action to do?
- [57:69] How to give cards seperation. change the **HUE** not the actual color. 
- [1:04:00] *drop shadow* make it very subtle. Hardly noticable. People don't really care about your shadows. 
- [1:10:10] make buttons, particularly call to action have solid fill
- 



### resources:
<a href="dribbble.com">Dribbble.com</a>
<a href="behance.net">behance.net</a>

# Javascript

## Basic Javascript

|Thing|Description |
|---|---|
|+= operator, -=, *=, /= | perform mathmatical operation and assignment in one step, example ><br> ```myVar += 5 ``` |
|Escape Quotes | In JavaScript, you can escape a quote from considering it as an end of string quote by placing a backslash (\) in front of the quote. ```var sampleStr = "Alan said, \"Peter is learning JavaScript\".";```|
|Escape Characters | /n /t // |
|```.length```| counts the number of characters in the string it is appended to |
| === operator | this is a strict equality operator. It does not perform a type conversion. for example '3' =/= 3 returns true or false. use this instead of a big if else statement ``` return val === 4 ``` |
| && operator | One condition && another|
| || operator | *logical or operator* returns true if either of the **operands** are true|
|Switch Case | Uses strict equality . ```switch(arg){case "a": do thing break; case "b" etc}```|
|delete object property |```delete mydog.tail```|
|```.hasOwnProperty("propertyName")``` | checks to see if the property exists|
| Recusion | Recursion is the concept that a function can be expressed in terms of itself. |
|Conditional or Ternary Operator |```condition ? expression-if-true : expression-if-false|

## ES6

ECMA Script is a standardized version of JavaScript. ES6 is the latest version of this script and includes:
- Arrow Functions
- Classes
- Module
- Promises
- Generators
- Let and Const

|Thing| Description|
|let | can only be declared once. So when you want to change it, an error is thrown...|
|const| Const Variables are *read-only* |
|Immutable Values| values which cannot be changed, such as using const. Commonly UPPERCASE is used to identify these value types ```IMMUTABLEVARIABLE```|
|```.Object.freeze(obj)```| Locks the object so it cannot be added to, read, or deleted. )|
|Arrow Functions| ```const myFunc = () => {}``` Used when a function is often passed as an argument to another function. THey can also have parameters. You add parameters between the empty parentheses. |
|Default Parameters| A LOT Like Python: ```const myfunction (argument = 1) => ```|
|Rest Parameter | ```myFunction(...args)``` creates an array of arguments which can have other functions such as ```map()```,```filter()```, and ```reduce()```. |
|Spread Operator | Think of it as a way of looking at an array all at once. Ex: ```Math.max(..array)``` this would yield the largest item in an array regardless of its position | 
|Destructuring |Neatly assigns values taken directly from an object ```const { name, age } = user;``` this works if user has the properties of `user.name`, `user.age`. <br> Variables can also be assigned this way. `const{varName:varValue, var2Name:var2Value}` |
|Destructuring in funct args| `const profileUpdate = ({ name, age, nationality, location }) => {`<br>`/* do something with these fields */}`|
|template literal | Love these things. `"some normal text ${var} Woah, what is that?"`|
|Object Literal Declarations| `const getMousePosition = (x, y) => ({ x, y });` This means you don't need to say `return {x:x,y:y}|
|Declarative Functions| when defining functions in objects you can remove the function keyword. woppdee do|
|Class syntax | not an actual class, just a simplified way of making a constructor. `calss SpaceShuttle { constructor(targetPlanet)}}`|
|Promises | Promise is a constructor function, so the new keyword must be used ex: `const myPromise = new Promise((resolve, reject)=> {})`|


## Regular Expressions

|Thing| Description|
|`/thing/`|this is the typical regular expression, no frills, just what you are looking for between two forward slashes|
|`/Thing/i`| the `i` means that the case should be `i`gnored|
|`matches = somestr.match(/thing/)`| this will return all the matches found|
|`/thing/g`|will search for a thing in the string more than once, for example is there were two 'things' in a sentence|
|`/thing/i` Chaining flags | `/thing/gi` : looks for thing ignoring case and multiple matches|
|`/a|b/` Or character | Matches a or b
| `/t./`Wildcard Character | `/thin./` the period  will look for any character|
|`th[aeio]ng/`| Match anything in the brackets. Also using brackets, you can look for items between a range of letters or numbers ex: `[a-e0-9]`|
|`^` Inverse Match| `[^thingsthatwillnotbematched]|
|`+` Flag | match a character that appears more than once in a row. |
| `?` Lazy Match | finds the smallest part of the string that satisfies that pattern. |
|`/^thing/` Start Match| Finds all matches that start with `thing`|
|`/thing$/` End Match | match a string that ends with x: `this is something`|
|`/\w/` All Alphanumeric character match | matches all alphanumeric characters in a given string includes underscores but not spaces. |
|`/\W/` All Non-alphanumeric Match| Matches all non-alphanumeric characters in a string|
|`/\d/` Digit Character match | Matches all digits. `/\D/` is the inverse|
|`/\s/` Whitespace | searches for spaces, will reutrn an array with all spaces matching length `\S` is the inverse|
|`/a{3,5}/` Set number match | match a thing the range listed between the curly brackets times. A minimum or maximum number of times can also be specified: `{2,} {,3}`|
|`/th?ings/` optional Character | This example would match things, as well as tings| 
|``4(?=u), 4(!=u)`` Positive & Negative lookahead| looks for characters before or after the character preceeding the parenthese| 
|`regexstr.test(teststr)` Boolean Test | returns True or False |


## Debugging

|Thing| Description|
|`console.clear()`|Clears the console |
|`typeof thing`| outputs the type of thing, must be logged to the console to appear|


## Object Oriented Programming


|Thing| Description|
|`instanceof`| every time an object is created it is made to be an instance of its constructor. You can verify that an object is in fact from the constructor with the instance of method. |
|own properties| can check own properties using the `.hasOwnProperty` operator. |
|Prototypes | properties in the prototype are shared by ALL instances of the object. EX: `Thing.prototype.attribute = 4` all attributes of the thing now have the value of 2. When setting prototypes, you can also make properties equal to functions. However when creating objects using the protype, set the constructor as a property, so that the instanceof method still works. |
|`isPrototypeOf`| shows what the object is a prototype of. `Dog.prototype.isPrototypeOf(beagle)`|
|Supertypes AKA Parent| make a type a level above the other types with shared attributes, in accordance with the DRY methodology|
|inheritance| There is an object hierarchy. Properties can be inherited from the higher level supertypes| 
|Object Hierarchy| Just look at this example (Highest to lowest): object -> animal -> bird -> duck.|
| Mixins | Functions what when passed an object, add a function to the object. Like passing a bird to a fly mixin grants it the ability to fly|
|immediately invoked function expression| does what it says on the tin. indicated by two parentheses at the end of the function. I have used this before. Often used to group related functionality into **modules**. `motionModule.glideMixin(duck)`. this code looks at the motion module, gets the glide mixin, then adds that mixin to the object passed to it.|


## Functional Programming

|Thing| Description|
|callbacks|functions that are passed into another function that decide the invocation of that function|
|Don't alter variable or object| take the variable or object as an argument and return modified copies of them. |
|Declare function parameters| any computation inside a function relies exclusively upon these declared, internal variables|
|arr.map method| Iterates over each item in an array and returns a new array containing the results of calling the callback function on each element. It does this without mutating the original array|
|arr.reduce | iterates over each item in an array and returns a single value. There is a callback function that accepts 4 arguments: 1. accumulator: assigned the reuturn value of the callback from the previous iteration 2. current element being processed 3. index od that element 4. array which reduce is being called on. |
| .every | checks every element in an array against a condition, it every element passes, it returns true|
| .some | if *any* element in an array passes a test, true is returned|
| .arity | the number of arguments required by  a function.|
|*Currying* | basically a way to make functions that can take arguments like this: `curried(1)(2)` Useful if you can't give a function all of the arguments at once. *partial application* is when you apply a few arguments to a function, and then another function that is applied to more arguments (WHAT?) `impartial.bind(this, 1, 2);`|


## Intermediate Algorithm Scripting

# Front End Frameworks

## Bootstrap

|Thing| Description|
|`img-responsive` class | makes images responsive |
|`btn-primary` | uses the primary color of the application. Good for highlighting actions you want the user to take. |
|`btn-info` | color used for information| 
|`btn-danger`| warn buttons|
|span to target inline elements| wrap text in span and add a class to modify its appearance. This seems bulky to me. |
|`col-xs-1`| this class is added to a div to create columns. The number on the end can be 1-12 depending on the size of the column. |
|`text-center`| a bootstrap class for centering text, seems useful|
|`well`| A class that creates a visual sense of depth. |

## JQuery
JQuery is an older Javascript in between. It is pre es6, and well written, but somewhat obsolete at this point. However many legacy pages still use it, so it is good to know. 


|Thing| Description|
|make elements bounce |   `$("button").addClass("animated bounce");` Also requires the anumate.css library |
|change element properties | `$("#target1").prop("disabled",true)` |
|change CSS of elements | `$("#target1").css("color", "red");` |
|Change html of elements | `$(".target").html("innerHtmlText here" )`|
|Append element to div | `$("button").appendTo("#someElement")`|
|Clone Element | `$("button"}).clone()` |
|target a parent Element | ``$("element").parent()` |
|Target children of an element| `$("element").children()` | 
| target number of children down the tree | `$(".target:nth-child(3)").addClass("animated bounce");` |

## SASS
*Syntactically Awesome Stylesheets* 
A language extension of CSS. Makes it easier to simplify and maintain stylesheets. It is a css preprocessor. SCSS is the more modern edition. requires EOL `;` characters. 
|Thing | Description | 
|setting variables| vairables start with a `$` and are then followed by the variable name.  then `:` and the initial variable value | 
|nesting CSS| place elements inside of other elements with curly braces. | 
|*mixin* | essentially functions which can return whatever is applicable I suppose? `@mixin border-radius($radius){`<br>`-webkit-border-radius: $radius;`<br>`}`|
| logic in stylesheets | `@if`, `@else` followed by curly braces. |
| for loops | `@for i 1 through 12{}` 'start through end' or 'to end' use. Start to end excludes the end number as a part of the count and start through end does not.  | 
|Extending classes | `@extend: className` in the body of a class will copy all of the properties of the extended class into the new class. |

## React

A frontend Javascript framework build by Facebook

|Thing|Description|
|JSX| syntax extension of js. JSX funcction always require a wrapper div Ex: `const jsx=<div> <p>p1</p><p>p2</p></div>`|
|Comments| `{/*comment*/}`|
|Rendering Elements|`ReactDOM.render(JSX_element, Document.getElementById("someElementID"))`|
|classes | class is a reserved word in javascript, so to add classes to elements, use the word `classname`|
|self closing tags | Everything can be a self closing tag! |
|Stateless Functional Component | *accepts Props and returns JSX* A component that can receive data and render it, but does not manage or track changes to the data. |
|Stateless Compoment AKA *React Components*| Extends  React.Component, does not use internal state.| 
|Class Components | `Class SomeComponent extends React.Component {constructor(props) {super(props);} render() {return(<div><p>fthisd</p></div>)}}`|
|Child Components | components rendered within other components simply look like `<ChildComponent/>` | 
|Props | as long as you have a constructor with a super, props are passed to a class component like so: `<ClassComponent someProp="thePropValue"/>` this prop is then accessed in the component like so: `return(<div><p>the value of the passed property is: {props.someProp}</p></div>)` this syntax only works in functional components, not class components.|
|States| Any data the application needs to know about that can change over time. Create a state by declaring a state property on the component class in its constructor. (below super).  Do not rely on previous state value to set new one. States are asynchronous. Most application structures have one parent component with state that passes various priops down to stateless child components|
|bind to method constructor |If you have a method in the React Component you will need to bind it: `this.toggleVisibility = this.toggleVisibility.bind(this);`|
|Lifecycle Methods| These methods provide opportunities to perform actions at specific points in the lifecycle of each component:`componentDidMount(), shouldComponentUpdate(), componentDidUpdate, componentWillUnmount()`. |
|`componentDidMount()`| place all api calls or calls to server in this method. Also a good place to attach event listeners |
|`shouldComponentUpdate()`|This method is useful to optimize performance. It allows you to declare if child components should update or not. The default behavior is for the component to always update when new props or state is received. This function can prevent that. The method takes nextProps and nextState as parameters. Add this method to your react component and if it returns true, it will re-render. Can use if statements based on props to lead to true to true or false returns. Chick if the component actually updated using `componentDidUpdate()` |
|Inline Styles | Set the style tag equal to a javascript object when writing in JSX. Like so: `<div style={{color: "yellow", fontSize: 16}}>Mellow Yellow</div>`|
|JSX Inline Conditionals | this code will display the h1 only if the this.state.display is true: `{this.state.display&&<h1>Displayed!</h1>}`|
|Ternary expressions | `condition ? expressionIfTrue : expressionIfFalse;` |
|`renderToString()` | Method used for rendering React on the server. 


## Redux

Treat the state as a global immutable object. the flow is action->reducer->store this is a loop. all components should be stateless. 

|thing|Description|
|reducer| a function that takes the current state and the action then returns the next state. `const reducer = (state=5) => {return state;}`|
|redux store | the single source of truth for the state of the application `const store = Redux.createStore(reducer)`|
|updating state| State updates are triggered by dispatching *actions* to the store. Actions can also carry a payload such as a username and password. Actions are just Javascript objects: `const action = {type:'LOGIN'}`. After the action is defined, it has to be sent to the store. To send it to the store, define an *action creator*.: `const actionCreator = () => {` <br/>  `return action` <br/>`}`|
|Action Creators | return an object with a type property that specifies that the action has occurred| 
|Dispatch| A method used to dispatch actions to the redux store. call `store.dispatch(actionCreator())` with the action creator as the argument. |
|Const Action types | best practice is to use Const when declaring action types, then reference these types whenever used |
|Store listeners | ``store.subscribe()` allows you to subscribe listener functions to the store. |
|`combineReducers()`|good practice is to create a reducer for each unique application state. Example: a note taking app which has Authenication would have one reducer for auth, and one for the text and notes. In this example combine reducers would look like so: <code>const rootReducer Redux.combineReducers({auth: authenticationReducer,notes: notesReducer});</code>|
|Asynchronous actions | Use reduc thunk middleware. pass agrument to `Redux.applyMiddleware(ReduxThunk.default)`|
|`object.assign`| For copying objects. |
|Redux Wrapper| To Add react-redux to an app, wrap it in tags like so: `<Provider store = {store}>` <br>`<App/>`<br>`</Provider>`|
|Presentational Components | components are typically refered to as presentational if they are not directly connected to redux.|
|Container Components| These components are responsible for dispatching actions to the store and often pass store state to child components as props. |
|


# Module Bundlers Notes

*what is a module bundler* take multiple js files and combine into one large file used to load the js app in the browser.
|Thing| Description|
|*loaders*| a way to handle any file that's not plain javascript like sass, typescript or css. |
|*Plugins*|tap into the compilation lifecycle of webpack. |
|*Dev Server*| Watches files and serves up files. Can configure for compression and hot module replacement. Will watch source directory for changes and will recompile if a file is saved|
|
