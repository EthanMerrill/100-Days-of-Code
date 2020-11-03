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
|