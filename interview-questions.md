# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is JSX? What is one syntax difference between HTML and JSX?

Your answer:

JSX stands for JavaScript XML. You can think of JSX as a blend of HTML and JavaScript. JSX allows you to write HTML like syntax inside of your JavaScript for your React components to return. There are differences from HTML and JSX, for example HTML allows you to add classes to elements using the attribute `class`. `class` is a reserved keyword in JavaScript so to add a class in JSX you must use `className`. Another difference is seen when adding a click event to an element. In HTML, an on click event is created using the `onclick` attribute. In JSX you must use `onClick` to add a click event. Below are some more differences between HTML and JSX.

| HTML                      | JSX                     |
| ------------------------- | ----------------------- |
| class="card"              | className="card"        |
| onclick="handleClick()"   | onClick={handleClick}   |
| onchange="handleChange()" | onChange={handleChange} |
| \<!--comment-->           | {/\*comment\*/}         |

Researched answer:

JSX stands fro JavaScript Syntax Extension or JavaScript XML. JSX was created to make it easier for developers to write HTML within JavaScript. Before JSX you had to use `React.createElement()`. For example if you wanted to create an `h1` with the text 'Hello' and a class of 'greeting' you had to write `React.createElement('h1', { className: 'greeting' }, 'Hello')`. With JSX you can write the same thing like so:

```jsx
const Greeting = () => {
    return (
        <h1 className="greeting">Hello</h1>
    )
}
```

JSX makes it a lot easier to read you code and understand what is going on. Valid HTML syntax is not valid JSX syntax. In HTML you can use the `for` attribute to attach a label to an input. `for` is a reserved word in JavaScript so in JSX you would achieve this using `htmlFor`

1. What is yarn? What file(s) are modified when you run the command yarn in your terminal?

Your answer:

When Node.js was created, npm was also created as a way to import dependencies into your project. For example if you want to use React in your project you could use npm to install React alongside your project. Yarn is another package manager. Yarn is often preferred over npm as Yarn provides caching to install these packages faster. Yarn will add a `package.json` file into your project as well as a `yarn.lock` file. The `package.json` file contains information about your project, a list of dependencies, as well as scripts to test or run your application. The `yarn.lock` file is used to keep track of dependency versions. When running the command `yarn add <package-name>` a `node_modules` folder will be created. This is where all dependencies are stored.

Researched answer:

Yarn is a package manager for JavaScript that was created by Facebook to address the limitations with the existing npm package manager. Yarn provides faster and more reliable package instilation, better support for versioning and caching, and better security. When running the yarn command several files may be modified. The `package.json` file is added and used to specify the name, version, and dependencies of your project. When the yarn command is ran it will either add or update the dependencies. The `yarn.lock` file is used to ensure all deps are installed consistently. Running the yarn command may update, add, or remove dependencies. The `node_modules` folder contains all packages that your project depends on. The yarn command will install, update, or remove packages as needed.

3. What is a React component?

Your answer:

A React component is a self encapsulated function that returns JSX. A React component can utilize different hooks from React to add functionality to the component. The useState hook is used to store imformation. When that information is changed, the component is rerendered to display those changes. Components are often separated into different files. This keeps your code base organized. The file containing your component is often named as the component name. When naming your component you sould keep in mind what the component does so you can give it a descriptive name. The component name should also use Pascal Case meaning you capitalize the first letter of every word. The file name should be the same as the component name. These are not requirements but highly encouraged and considered best practices. Components can be given information through properties (props). This enables you to reuse components and just change the data they are given. Below is an example of a card component which takes in a few properties and utilizes state to keep track of how many times the user clicks on the card.

```jsx
import React, { useState } from "react"

const Card = ({ title, description, image }) => {
    const [count, setCount] = useState(0)

    return (
        <div className="card" onClick={() => setCount(count + 1)}>
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
            <p>You clicked this card {count} times.</p>
        </div>
    )
}
```

Researched answer:

A React component is a reusable piece of code that describes a part of a user interface (UI). These are the building blocks fo an applications user interface. React components can be used together to build more complex interfaces. React components can be created by using functions or classes. React components can accept input data called props and manage their internal state using the useState hook. Props are passed to a component as attributes and can customize the components appearance and or behavior. State is a way for components to store and manage its own data that change over time and cause the component to re-render.

4. What is the difference between state values and props in React?

Your answer:

State is data that is declared in a react component. Props or properites are peices of data that is given to a React component. State is used to store a value that is subject to change. When the state data changes then the component is told to rerender and display the new value. Props are used to pass data into a React component. If you want to repeat a UI element multiple times with different data then you can pass different props into the component to render the different pieces.

Researched answer:

State and props are two inportant concepts that are used to manage and pass data between components. State is an object that is owned and managed by a component. It is used to store data that can change over time and is typically used to keep track of user interactions or other dynamic changes that occur within a component. Props are short for properties and they are a way to pass data from a parent component to a child component. Props are read only meaning that a child component cannot modify its props directly.

5. What is the DOM?

Your answer:

DOM stands for document object model. DOM defines the structure of a web page so that a program can manipulate the documents behavior and style.

Researched answer:

Document Object Model or DOM is a programming interface for web documents that represents the page so that programs can change the document structure, style, and content. The DOM is a tree like structure representation of the elements of an HTML document. The DOM tree has a node for every element, attribute, and piece of text in the document. Nodes can be selected and manipulated using JavaScript or other languages. Using the DOM software developers can create dynamic pages that add, remove, and modify data displayed in the UI based on user interactions or other events.

6. STRETCH: Which is the difference between a div tag and a span tag?

Your answer:

The div tag and span tag are both containers but they differ in what they contain. The div tag is a block element meaning it it will take up the full width available and typically contains a group of other elements. The span tag is an inline element. This means it will shrink to fit the content. Typically spans are used to wrap text. If you want to change the color of one word in a paragraph you should use a span tag. If you want to add a border around a heading and paragraph then you should use a div. Below are examples:

```html

<p>Lorem ipsum dolor sit amet, <span class="highlight">consectetur</span> adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

<div class="card">
    <h2>Heading</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>
```

Researched answer:

The div tag is a division element that is a generic block-level element. It is used to group several elements that are related. The span tag is a generic inline element used to apply styles to a fraction of the content. Both the span and div tag are genaric HTML elements that group related items. These tags differ by the fact that divs add a line break after its content whereas spans only take up the space of its children. If possible you want to avoid using divs and spans as they are not semantic. Semantic elements communicate their intent. The `em` tag is similar to the span tag as it is an inline element but it communicates 'emphasis'. The `strong` tag is used to bold text. Is is an inline element but is communicates that is word is important. The `nav` tag is a block element like divs but communicates that this section is for navigation. Semantics is important for screen readers and for developers. It allows screen readers and developers alike to better interpret your code.

## Looking Ahead: Terms for Next Week

1. Object-oriented programming:

Object-oriented programming, also known as OOP, is a way to organize code around data or objects rather than logic and functions. Some of the benefits of OOP includes logic reusability, scalability, and efficiency. OOP is used in many popular programming languages, including Java, C++, Python, and Ruby. In OOP, an object is an instance of a class, which is the blueprint that defines the properties and behaviors of a set of objects. OOP became popular and a widely used programming paradigm due to its ability to improve code organization, reduce complexity, and increase code reuse.

2. Ruby:

Ruby is a programming language developed by Yukihiro Matsumoto. Ruby was designed to be easy to use and understand. The syntax is both concise and expressive. It is an interpreted language that supports object-oriented programming. Ruby code is typically shorter and more readable than equivalent code in other languages. Ruby on Rails is a framework around Ruby which allows Ruby to be used in web development.

3. Implicit return:

Implicit return refers to a function syntax in which the return statement is omitted. The return value is implicitly returned from the function based on the value of the last expression evaluated in the function. Here is an example:

```js
const trippple = (num) => num * 3;

trippple(3) // --> 9
```

4. Ruby blocks:

In Ruby a block is a piece of code that can be passed as an argument to a method. Blocks are similar to anonymous functions in JavaScript. Blocks are defined using curly braces `{}` or the `do...end` syntax and can be used to execute code within the context of a method.

5. Ruby hashes:

A hash is a collection of key-value pairs, also known as an associative array. This is much like objects in JavaScript. Ruby hashes are unordered meaning that the order in which elements are stored is not guaranteed. Hashes are defined by using curly braces `{}` or the hash keyword. Key and value pairs are separated by a hash rocket `=>`.