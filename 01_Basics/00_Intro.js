/* ***** JavaScript ***** */
// Developed by Brendan Eich - (then employed by the Netscape Corporation)
/* 
JavaScript (JS) is lightweight interpreted (or just-in-time compiled) programming language with first-class functions. While it is most well-known as the scripting language for web pages, many non browser environments also use it, such as Node.js, Apache, CouchDB, and Adope Acrobat. JS is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, declarative (e.g. fucntiona programming) styles.

"JavaScript (or "JS") is a programming language used most often for dynamic client-side scripts on webpages, but it is also often used on the server-side, using a runtime such as Node.js." 
*/

// • Just-in-time : In computing, just-in-time (JIT) compilation (also dynamic translation or run-time compilations)[1] is compilation (of computer code) during execution of a program (at run time) rather than before execution.[2] This may consist of source code translation but is more commonly bytecode translation to machine code, which is then executed directly."JIT compilation is a combination of the two traditional approaches to translation to machine code—ahead-of-time compilation (AOT), and interpretation—and combines some advantages and drawbacks of both."

// • First-class-functions : A programming language is said to have First-class functions when functions in that language are treated like any other variable. For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.
const foo = () => {
    console.log("foobar");
  };
  foo(); // Invoke it using the variable
  // foobar
  
// • many non browser environment : The use of JavaScript has expanded beyond its web browser roots. JavaScript engines are now embedded in a variety of other software systems, both for server-side website deployments and non-browser applications.

// • Prototype-based : Prototype-based programming is a style of object-oriented programming in which classes are not explicitly defined, but rather derived by adding properties and methods to an instance of another class or, less frequently, adding them to an empty object. "In simple words: this type of style allows the creation of an object without first defining its class."

// • Thread : Thread in computer science is the execution of running multiple tasks or programs at the same time. Each unit capable of executing code is called a thread.

// • Dynamic : Dynamically-typed languages are those (like JavaScript) where the interpreter assigns variables a type at runtime based on the variable's value at the time, its called a dynamic type language.

// • Server-side : A server is a software or hardware offering a service to a user, usually referred to as client. A hardware server is a shared computer on a network, usually powerful and housed in a data center. A software server (often running on a hardware server) is a program that provides services to client programs or a user interface to human clients. "A client program and server program traditionally connect by passing messages encoded using a protocol over an API." for example:• An Internet-connected Web server is sending a HTML file to your browser software so that you can read this page., • Local area network server for file, name, mail, print, and fax, • Minicomputers, mainframes, and super computers at data centers

/* 
JavaScript is primarily used in the browser, enabling developers to manipulate webpage content through the DOM, retrieve content from servers using the fetch() API, store complex data using IndexedDB, draw graphics with canvas, interact with the device running the browser through various APIs, and more. JavaScript is one of the world's most commonly-used languages, owing to the recent growth and performance improvement of APIs available in browsers.
*/

/* ****** Web Scripting ***** */
/*
Web Scripting  
1• A web browser provides an ECMAScript host environment for client-side computation including, for instance, objects that represent windows, menus, pop-ups, dialog boxes, text areas, anchors, frames, history, cookies, and input/output. Further, the host environment provides a means to attach scripting code to events such as change of focus, page and image loading, unloading, error and abort, selection, form submission, and mouse actions. Scripting code appears within the HTML and the displayed page is a combination of user interface elements and fixed and computed text and images. The scripting code is reactive to user interaction, and there is no need for a main program.

2• A web server provides a different host environment for server-side computation including objects representing requests, clients, and files; and mechanisms to lock and share data. By using browser-side and server-side scripting together, it is possible to distribute computation between the client and server while providing a customized user interface for a Web-based application.

3• Each Web browser and server that supports ECMAScript supplies its own host environment, completing the ECMAScript execution environment.
*/

//• Host Environment :  A host environment is a particular choice of definition for all host-defined facilities. A host environment typically includes objects or functions which allow obtaining input and providing output as host-defined properties of the global object.




/* ********Basic****** */

console.log("Bhuppi Here")
/*
What is JavaScript?
JS is a programming language.We use it to give instructions to the computer.

input(code) ----> Computer ----> output
1. Instruction give the (in the form of code) and computer give the output

2. Write the code of javascript

3. JavaScript change the content of HTML

4. JavaScript allows you to make web pages more interactive and accessing and modifying the content and markup used in a web page while it is being viewed in the broswer.

5. You can use JS to add attributes, element and text to the page, or remove them.for exmaple
• Add a paragraph of text after the 
first <hl> element 
• Change the value of c 1 ass 
attributes to trigger new CSS rules 
for those elements 
• Change the size or position of an 
<i mg> element 

6.PROGRAM RULES : You can specify a set of steps for  the browser to follow (like a recipe), which allows it to access or change the  content of a page. For example:
• A gallery script could check which image a user clicked on and display a larger version of that image. 
• A mortgage calculator could collect values from a form, perform a 
calculation, and display repayments. 
• An animation could check the dimensions of the browser window 
and move an image to the bottom of the viewable area (also known as 
the viewport). 

7. JS encompasses many of the traditional rules of programming. It can make the web page feel interacting by responding to what the user does.

8. REACT TO EVENTS : You can specify that a script should run when a specific event has occurred. For example, it could be run when:
• A button is pressed 
• A link is clicked (or tapped) on 
• A cursor hovers over an element 
• Information is added to a form 
• An interval of time has passed 
• A web page has finished loading

*/

/* Before you learn how to read and write the JS language itself you need to before become familiar with some key concepts in computer programming.They will be covered in three sections:
A: What is a Script and how do i crate one?
B: How do computers fits in with the world arround them?
C: How do I write a script for a web page?

Note: Once you have learned the basics, you can start 
*/
