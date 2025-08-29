
### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?



        ............ Answers..........

1. 
getElementById:  Only returns one element. It works with  unique ID in the Dom.
getElementsByClassName: update automatically if DOM changes.Its not an array but Array like.
querySelector: querySelector is a javascript DOM method that returns the first element within the document that match a specified CSS selector.
querySelectorAll:querySelectorAll  is a javascript DOM method that returns a static nodelist of all elements  in the document that match a specified CSS selector.


2. 
create and insert a new element into the DOM in javaScript ivolves a few steps:
    1. Creat the element.( Use document.createElement() to make a new HTML element. )
    2. Customize it.(Add text, classes, or an ID to it.)
    3. Appered it into DOM.(Use appendChild() or insertBefore() to place it in the DOM.)


3. 
Event Bubbling is when an event on child element bubbles up to its parent elements automatically.

Ex: you click a button inside a div. the click event happens on the button first. then the same event moves up to the parent DOM , then to the parent of div . and so on until reaches the document.


4. 
Event delegation is a technique where you attach a single event listener to a parent element instead of multiple child elements. The event bubbles up from the child, and you can handle it in the parent.
Why useful:
Saves memory 
Works for dynamically added elements


5.  
 preventDefault() : stops the default browser action.

 stopPropagation(): stops the event from bubbling up the DOM tree.