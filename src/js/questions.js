const javaScriptQuestions = [
  {
   questionOne: `What is JavaScript?`,
   optionOne:`JavaScript is a scripting language used to make the website interactive`,
   optionTwo: `JavaScript is an assembly language used to make the website interactive`,
   optionThree: `JavaScript is a compiled language used to make the website interactive`,
   optionFour: `None of the above`,
   correctAnswerAndExplanation: `Explanation: JavaScript is a scripting language used along with HTML and CSS to make the website interactive along. It is used both on the client-side and server-side.`,
  },

  {
    questionTwo: `Among the given statements, which statement defines closures in JavaScript?`,
    optionOne:`JavaScript is a function that is enclosed with references to its inner function scope`,
    optionTwo: `JavaScript is a function that is enclosed with references to its lexical environment`,
    optionThree: `JavaScript is a function that is enclosed with the object to its inner function scope`,
    optionFour: `None of the above`,
    correctAnswerAndExplanation: `Answer: b
    Explanation: A closure is a function that is enclosed with references to its lexical environment. A closure allows an inner function to access the scope of an outside function. Closures are formed every time a function is created in JavaScript, during function creation time.`,
   },

   {
    questionThree: ` Arrays in JavaScript are defined by which of the following statements?`,
    optionOne:`It is an ordered list of values`,
    optionTwo: `It is an ordered list of objects`,
    optionThree: `It is an ordered list of string`,
    optionFour: `It is an ordered list of functions`,
    correctAnswerAndExplanation: `Answer: a
    Explanation: An array in JavaScript is an ordered list of values, each value is referred to as an element, and it is identified by an index. An array can include values of many sorts and the length of an array dynamically sized.`,
   },

   {
    questionFour: `Which of the following scoping type does JavaScript use?` ,
    optionOne:`Sequential`,
    optionTwo: `Segmental`,
    optionThree: `Lexical`,
    optionFour: `Literal`,
    correctAnswerAndExplanation: `Answer: c
    Explanation: JavaScript, like most current programming languages, employs lexical scoping. This means that functions are performed with the variable scope in effect when they were defined, rather than the variable scope in effect when they are invoked.
    `,
   },

   {
    questionFive: `Upon encountering empty statements, what does the JavaScript Interpretor do?`,
    optionOne:`Throws an error`,
    optionTwo: `Ignores the statements`,
    optionThree: `Gives a warning`,
    optionFour: `None of the above`,
    correctAnswerAndExplanation: `Ignores the statements - In JavaScript, the interpreter will ignore the empty statements whenever it encounters them.`,
   },

   {
    questionSix: `What keyword is used to check whether a given property is valid or not`,
    optionOne:`in`,
    optionTwo: `is in `,
    optionThree: `exists `,
    optionFour: `lies`,
    correctAnswerAndExplanation: `in - The in keyword is used to check whether the given property is valid or not in Javascript.`,
   },

   {
    questionSeven: `Which function is used to serialise an object into a JSON string in JavaScritpt`,
    optionOne:`stringify()`,
    optionTwo: `parse()`,
    optionThree: `convert()`,
    optionFour: `None of the above`,
    correctAnswerAndExplanation: `stringify() - The JSON.stringify() function is used to convert a JSON object into string format.`,
   },

   {
    questionEight: `The localStorage and sessionStorage belongs to?`,
    optionOne:`Window Object`,
    optionTwo: `Element Object`,
    optionThree: `Hash Object`,
    optionFour: `DOM Object`,
    correctAnswerAndExplanation: `Answer: a
    Explanation: Browsers that implement the “Web Storage” draft specification define two properties on the Window object: localStorage and sessionStorage. Local storage and Session storage are the web storage objects. Session storage is destroyed once the user closes the browser whereas, Local storage stores data with no expiration date.`,
   },

   {
    questionNine: `What is the main difference between localStorage and sessionStorage? `,
    optionOne:`Lifetime`,
    optionTwo: `Scope`,
    optionThree: `Both Lifetime and Scope`,
    optionFour: `Storage Location`,
    correctAnswerAndExplanation: `Answer: c
    Explanation: The difference between localStorage and sessionStorage has to do with lifetime and scope: how long the data is saved for and who the data is accessible to. Session storage is destroyed once the user closes the browser whereas, Local storage stores data with no expiration date.`,
   },

   {
    questionTen: `What is Event Bubbling in JavaScript`,
    optionOne:`The process of capturing an event at the element on which it occurred and then propogating it to its parent elements`,
    optionTwo: `The process of capturing an event at the parent element and then propogating it to its child elements`,
    optionThree: `The process of capturing an event and stopping it from propogating to its parent elements`,
    optionFour: `The process of capturing an event and preventing it from being handled by any other element`,
    correctAnswerAndExplanation: `optiontwo- Event bubbling in JavaScript refers to the process of capturing an event at the element on which it occurred and then propagating it to its parent elements. This allows for event handling at multiple levels in the DOM hierarchy, simplifying the event handling code and enabling the handling of events on nested elements without explicitly attaching event listeners to each individual element.`,
   },
];