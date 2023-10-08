1. what is React?

ans. React is javascript library that is used to create interactive,fast,effective user interfaces.



2. Who made React?

ans.React was developed by Jordon walke, a software engineer at facebook and it was first deployed on facebook's feed in 2011 and then on instagram in 2013.


3. what is Babel?

ans. In the context of javascript it is a javascript compiler that convert ECMAscript2015+ code into previous version code that can be used by older version browses.But , in the context of react it is used to translate JSX code into regular javascript that browser can understand.It is a go-to tool for this transformation.




4. How does Babel convert html code in React into Valid code?

ans. Babel does'nt convert html code into react. instead, it mainly focuses on transpiling JSX syntax-which is a javascript extension that allows you to describe the structure of user interfaces.it looks like HTML.And Babel transform this JSX code into javascript that creates and maniputlates the virtual DOM.



5. What is reactDOM used for?Explain with example.

Ans.ReactDOM is a package within React library that is used to render react component to the actual HTML DOM.

Example:
const app=()=><h1>hello world</h1>

ReactDOM.render(<app/>,document.getElementById("root"));




6. What are the packages that you need to import for react to work with?


Ans.The packages that must to be imported before using react are react,react-dom,babel,react-scripts, Node.js and npm.




7. how do you add react to a application?

Ans. we can add react in two ways first is to a new project and second is to an exisiting project both of them involves the following step:

To a new project:
a> install create React App globally(if not installed)

npm install -g create-react-app
 
b>create a new React app

npm create-react-app app-name

c> navigate into your new app's directory

cd app-name

d> start the development server:

npm start


To an existing project:

a>initialize a new npm project(if not already initialized):

npm init -v

b> install React and reactDom

npm install react react-dom

c> create a file with a root domain
d> create a javaScript file for your React code:
e>Run your application:


8. what is React.createElement?

Ans.The React.createElement is a function that is used to create and return a new React element.It allows you to define the structure of your user interface using a syntacx that resembles HTMl or XML.

syntax:
React.createElement(type, [props], [...children])


9. What are the three properties that createElement accept?

Ans. The three properties that createElement accepts are Type(string or React Component) of the React element ,props(object) containg properties and element ,children(react element or text content)

10. What is the meaning of render and root in React?

Ans. In React render is the process of create a virutal representaion of the React elements or user interface elements and updating the DOM to reflect these changes.And the Root is the DOM element where the top-level React Components is mounted.