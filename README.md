<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Learning Journey: Project Checklist</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 900px;
            margin: 20px auto;
            padding: 0 20px;
            background-color: #f9f9f9;
        }
        h1, h2, h3 {
            color: #0056b3;
        }
        h1 {
            text-align: center;
            border-bottom: 2px solid #0056b3;
            padding-bottom: 10px;
        }
        h2 {
            border-bottom: 1px solid #ddd;
            padding-bottom: 5px;
            margin-top: 30px;
        }
        ul {
            list-style: none;
            padding: 0;
        }
        ul li {
            margin-bottom: 8px;
            padding: 5px 0;
        }
        ul li input[type="checkbox"] {
            margin-right: 10px;
            transform: scale(1.2); /* Slightly larger checkboxes */
        }
        .phase-description {
            font-style: italic;
            color: #555;
            margin-bottom: 15px;
        }
    </style>
</head>
<body>
    <h1>JavaScript Learning Journey: Project Checklist</h1>

    <p>This checklist outlines a structured approach to learning JavaScript through small, progressively challenging projects. The goal is to build a strong foundation by practicing core concepts and gradually integrating more advanced topics.</p>

    <h2>Phase 1: The Absolute Basics</h2>
    <p class="phase-description"><em>Focus: Variables, Data Types, Operators, Basic I/O. Get comfortable with syntax and fundamental building blocks. Use <code>console.log()</code> heavily.</em></p>
    <ul>
        <li><label><input type="checkbox"> <strong>"Hello World" Variations:</strong></label>
            <ul>
                <li><label><input type="checkbox"> Display "Hello World" in the console.</label></li>
                <li><label><input type="checkbox"> Display "Hello [Your Name]" using a variable.</label></li>
                <li><label><input type="checkbox"> Display a message with a number (e.g., "Today is day 5 of my journey.").</label></li>
            </ul>
        </li>
        <li><label><input type="checkbox"> <strong>Simple Arithmetic Calculator:</strong></label>
            <ul>
                <li><label><input type="checkbox"> Add two numbers.</label></li>
                <li><label><input type="checkbox"> Subtract two numbers.</label></li>
                <li><label><input type="checkbox"> Multiply two numbers.</label></li>
                <li><label><input type="checkbox"> Divide two numbers.</label></li>
                <li><label><input type="checkbox"> <em>Challenge:</em> Take user input for numbers (using <code>prompt()</code>).</label></li>
            </ul>
        </li>
        <li><label><input type="checkbox"> <strong>Variable Swapping:</strong> Swap the values of two variables without using a temporary variable.</label></li>
        <li><label><input type="checkbox"> <strong>Data Type Checker:</strong> Write a function that takes a variable and logs its data type using <code>typeof</code>.</label></li>
        <li><label><input type="checkbox"> <strong>Temperature Converter (C to F & F to C):</strong></label>
            <ul>
                <li><label><input type="checkbox"> Create a function for Celsius to Fahrenheit conversion ($F = C \times 9/5 + 32$).</label></li>
                <li><label><input type="checkbox"> Create a function for Fahrenheit to Celsius conversion ($C = (F - 32) \times 5/9$).</label></li>
            </ul>
        </li>
    </ul>

    <hr>

    <h2>Phase 2: Control Flow & Functions</h2>
    <p class="phase-description"><em>Focus: If/Else, Loops, Functions, Parameters, Return Values. Introduce decision-making and reusable blocks of code.</em></p>
    <ul>
        <li><label><input type="checkbox"> <strong>Even or Odd Checker:</strong> Write a function that takes a number and returns "Even" or "Odd".</label></li>
        <li><label><input type="checkbox"> <strong>Largest of Two Numbers:</strong> Write a function that takes two numbers and returns the larger one.</label></li>
        <li><label><input type="checkbox"> <strong>FizzBuzz:</strong> Loop from 1 to 100; print "Fizz", "Buzz", "FizzBuzz", or the number.</label></li>
        <li><label><input type="checkbox"> <strong>Factorial Calculator:</strong> Write a function that calculates the factorial of a given number ($n! = n \times (n-1) \times \dots \times 1$).</label></li>
        <li><label><input type="checkbox"> <strong>Simple Interest Calculator:</strong> Create a function that calculates simple interest ($SI = (P \times R \times T) / 100$).</label></li>
        <li><label><input type="checkbox"> <strong>Grade Calculator:</strong> Take a score (0-100) and return a letter grade (A, B, C, D, F).</label></li>
        <li><label><input type="checkbox"> <strong>Vowel/Consonant Checker:</strong> Write a function that determines if a single character is a vowel or a consonant.</label></li>
        <li><label><input type="checkbox"> <strong>Simple Login System (Conceptual):</strong> Check predefined username/password against user input.</label></li>
        <li><label><input type="checkbox"> <strong>Countdown Timer (Console Based):</strong> Take a number from the user and count down to 0, logging each second.</label></li>
        <li><label><input type="checkbox"> <strong>Area Calculator (Rectangle, Circle, Triangle):</strong> Create a function that calculates area based on shape and dimensions.</label></li>
    </ul>

    <hr>

    <h2>Phase 3: Arrays & Objects</h2>
    <p class="phase-description"><em>Focus: Data Structures, Iteration. Work with collections of data.</em></p>
    <ul>
        <li><label><input type="checkbox"> <strong>Array Sum & Average:</strong> Given an array of numbers, calculate their sum and average.</label></li>
        <li><label><input type="checkbox"> <strong>Find Max/Min in Array:</strong> Given an array of numbers, find the maximum and minimum values.</label></li>
        <li><label><input type="checkbox"> <strong>Array Reversal:</strong> Reverse an array without using the built-in <code>reverse()</code> method.</label></li>
        <li><label><input type="checkbox"> <strong>Remove Duplicates from Array:</strong> Create a new array containing only unique elements from a given array.</label></li>
        <li><label><input type="checkbox"> <strong>Object Properties Lister:</strong> Create a person object and iterate through its properties, logging <code>key: value</code>.</label></li>
        <li><label><input type="checkbox"> <strong>Book Object:</strong></label>
            <ul>
                <li><label><input type="checkbox"> Create an object for a book (title, author, yearPublished, isRead).</label></li>
                <li><label><input type="checkbox"> Create an array of book objects and list all book titles.</label></li>
                <li><label><input type="checkbox"> List only unread book titles.</label></li>
            </ul>
        </li>
        <li><label><input type="checkbox"> <strong>Shopping Cart (Array of Objects):</strong> Represent items as objects, add them to a cart array, and calculate the total price.</label></li>
        <li><label><input type="checkbox"> <strong>Simple To-Do List (Array of Strings/Objects):</strong> Implement functions to add, remove, and list to-do items.</label></li>
        <li><label><input type="checkbox"> <strong>Student Grade Tracker (Array of Objects):</strong> Calculate average grade for each student and find the student with the highest average.</label></li>
        <li><label><input type="checkbox"> <strong>Frequency Counter (String/Array):</strong> Given a string or an array, count the frequency of each character/element.</label></li>
    </ul>

    <hr>

    <h2>Phase 4: DOM Manipulation</h2>
    <p class="phase-description"><em>Focus: Interacting with HTML, Events. Bring your JavaScript to life in the browser. You'll need <code>index.html</code> and <code>style.css</code> for these.</em></p>
    <ul>
        <li><label><input type="checkbox"> <strong>Basic Button Click Counter:</strong> A button and a display area; each click increments a displayed counter.</label></li>
        <li><label><input type="checkbox"> <strong>Text Changer:</strong> An input field and a button; change text in a <code>&lt;p&gt;</code> tag based on input.</label></li>
        <li><label><input type="checkbox"> <strong>Image Switcher:</strong> Cycle through an array of image URLs with "Next" and "Previous" buttons.</label></li>
        <li><label><input type="checkbox"> <strong>Background Color Changer:</strong> A button that changes the body's background color randomly on each click.</label></li>
        <li><label><input type="checkbox"> <strong>Show/Hide Element:</strong> A button to toggle the visibility of a <code>&lt;div&gt;</code>.</label></li>
        <li><label><input type="checkbox"> <strong>Basic Form Validation:</strong> A simple form; check if name and email fields are not empty on submission.</label></li>
        <li><label><input type="checkbox"> <strong>Accordion Menu:</strong> Create multiple collapsible sections using JavaScript to toggle their visibility.</label></li>
        <li><label><input type="checkbox"> <strong>Simple Calculator (UI based):</strong> Buttons for numbers and operations; display results in an input field.</label></li>
        <li><label><input type="checkbox"> <strong>Interactive To-Do List (UI based):</strong> Input to add tasks, list of tasks with delete buttons, mark as complete.</label></li>
        <li><label><input type="checkbox"> <strong>Modal Window:</strong> A button that opens and closes a modal overlay.</label></li>
    </ul>

    <hr>

    <h2>Phase 5: Advanced Concepts & APIs</h2>
    <p class="phase-description"><em>Focus: Asynchronous JS, Fetch API, Local Storage, Classes, Modules. Tackle more complex scenarios and real-world interactions.</em></p>
    <ul>
        <li><label><input type="checkbox"> <strong>Quote Generator (Local Data):</strong> An array of quotes; display a random one on button click.</label></li>
        <li><label><input type="checkbox"> <strong>Quote Generator (API Fetch):</strong> Use an API to fetch and display a random quote. Handle loading/errors.</label></li>
        <li><label><input type="checkbox"> <strong>Weather App (API Fetch):</strong> Take city name as input, use a weather API to display current weather.</label></li>
        <li><label><input type="checkbox"> <strong>Typing Speed Test:</strong> Display text, user types it, calculate WPM and accuracy.</label></li>
        <li><label><input type="checkbox"> <strong>Simple Quiz App:</strong> Questions in an array of objects; display one, check answers, keep score.</label></li>
        <li><label><input type="checkbox"> <strong>Tic-Tac-Toe Game:</strong> Implement game logic (player turns, win conditions, draw) for a 3x3 grid.</label></li>
        <li><label><input type="checkbox"> <strong>Memory Game (Card Matching):</strong> Flip cards to find matching pairs; track moves and time.</label></li>
        <li><label><input type="checkbox"> <strong>Hangman Game:</strong> Choose a random word; user guesses letters; display progress.</label></li>
        <li><label><input type="checkbox"> <strong>Drawing App (Canvas API):</strong> Allow users to draw simple lines or shapes on an HTML canvas.</label></li>
        <li><label><input type="checkbox"> <strong>Basic Data Table with Sorting:</strong> Display data from an array of objects in an HTML table; implement column sorting.</label></li>
        <li><label><input type="checkbox"> <strong>Local Storage Counter:</strong> A counter that persists its value using <code>localStorage</code>.</label></li>
        <li><label><input type="checkbox"> <strong>Theme Switcher (Dark/Light Mode):</strong> Toggle between light/dark theme using CSS variables and <code>localStorage</code>.</label></li>
        <li><label><input type="checkbox"> <strong>Custom Countdown Timer (with <code>setInterval</code>/<code>setTimeout</code>):</strong> User inputs date/time, app displays live countdown.</label></li>
        <li><label><input type="checkbox"> <strong>Digital Clock:</strong> Display the current time that updates every second using <code>setInterval</code>.</label></li>
        <li><label><input type="checkbox"> <strong>Image Carousel/Slider:</strong> Display multiple images with navigation (next/previous buttons, dot indicators).</label></li>
        <li><label><input type="checkbox"> <strong>Basic Chat Application (Simulated):</strong> Input for message, display area; simulate messages from other users.</label></li>
        <li><label><input type="checkbox"> <strong>URL Shortener (Conceptual/API Integration):</strong> User inputs long URL, app calls shortening API, displays shortened URL.</label></li>
        <li><label><input type="checkbox"> <strong>Currency Converter (API Integration):</strong> Convert between different currencies using an exchange rate API.</label></li>
        <li><label><input type="checkbox"> <strong>Pagination for Data Display:</strong> Display large lists of items in pages instead of all at once.</label></li>
        <li><label><input type="checkbox"> <strong>Sticky Navigation Bar:</strong> Make a navigation bar stick to the top of the viewport when scrolling past it.</label></li>
        <li><label><input type="checkbox"> <strong>Scroll-to-Top Button:</strong> A button that appears when scrolling down and scrolls user back to top.</label></li>
        <li><label><input type="checkbox"> <strong>Animated Progress Bar:</strong> A progress bar that fills up over time or based on user interaction.</label></li>
        <li><label><input type="checkbox"> <strong>Star Rating Component:</strong> An interactive 5-star rating component where users can select a rating.</label></li>
        <li><label><input type="checkbox"> <strong>Drag and Drop List:</strong> Allow users to reorder items in a list by dragging and dropping them.</label></li>
        <li><label><input type="checkbox"> <strong>Form with Multi-Step Navigation:</strong> Break a long form into multiple steps with "Next" and "Previous" buttons.</label></li>
    </ul>

    <hr>

    <h2>Phase 6: Advanced JavaScript & Framework Preparation</h2>
    <p class="phase-description"><em>Focus: ES6+, OOP, Advanced Patterns. Think about code structure, reusability, and preparation for larger applications/frameworks.</em></p>
    <ul>
        <li><label><input type="checkbox"> <strong>Class-Based Counter:</strong> Reimplement the counter project using a JavaScript <code>class</code>.</label></li>
        <li><label><input type="checkbox"> <strong>Book Library (Class-Based):</strong> Define <code>Book</code> and <code>Library</code> classes; <code>Library</code> manages <code>Book</code> objects.</label></li>
        <li><label><input type="checkbox"> <strong>Polymorphic Animal Sounds:</strong> Create base <code>Animal</code> class and derived classes (`Dog`, `Cat`) with distinct <code>makeSound()</code> methods.</label></li>
        <li><label><input type="checkbox"> <strong>Module-Based Calculator:</strong> Split the calculator logic into separate JavaScript modules (e.g., <code>math.js</code>, <code>ui.js</code>).</label></li>
        <li><label><input type="checkbox"> <strong>Debouncing/Throttling Demo:</strong> Create a search input field; use debouncing to delay API calls.</label></li>
        <li><label><input type="checkbox"> <strong>Promises/Async/Await Demo:</strong> Refactor previous API calls (e.g., Quote Generator, Weather App) to use <code>async/await</code>.</label></li>
        <li><label><input type="checkbox"> <strong>Error Handling Examples:</strong> Implement <code>try...catch</code> blocks for common scenarios (e.g., invalid input, failed API calls).</label></li>
        <li><label><input type="checkbox"> <strong>Data Validation Library (Small Scale):</strong> Write a set of reusable validation functions (e.g., <code>isValidEmail</code>, <code>isNumeric</code>).</label></li>
        <li><label><input type="checkbox"> <strong>Simple Data Filtering/Searching:</strong> Given an array of objects, implement a search bar that filters the data.</label></li>
        <li><label><input type="checkbox"> <strong>Custom Event Emitter:</strong> Create a simple event emitter class that allows <code>on()</code>, <code>emit()</code>, and <code>off()</code> events.</label></li>
    </ul>

    <hr>

    <h2>Phase 7: More Complex Projects & Integration</h2>
    <p class="phase-description"><em>Focus: Combine multiple concepts into a cohesive application.</em></p>
    <ul>
        <li><label><input type="checkbox"> <strong>Pokedex (API):</strong> Fetch data from a Pokémon API; display Pokémon, types, stats; implement search/filtering.</label></li>
        <li><label><input type="checkbox"> <strong>Blog Post Viewer (Dummy API):</strong> Fetch blog posts from a dummy API; display list, click to view details.</label></li>
        <li><label><input type="checkbox"> <strong>Basic E-commerce Product List:</strong> Display products with images, names, prices; add "Add to Cart" button.</label></li>
        <li><label><input type="checkbox"> <strong>Recipe Finder (API):</strong> Search for recipes based on ingredients or keywords using a recipe API.</label></li>
        <li><label><input type="checkbox"> <strong>Movie Database (API):</strong> Search for movies using an API; display movie details, posters.</label></li>
        <li><label><input type="checkbox"> <strong>Calendar View (Basic):</strong> Display a calendar for the current month; allow navigation.</label></li>
        <li><label><input type="checkbox"> <strong>Expense Tracker:</strong> Input for expense name/amount; list expenses, calculate total; use local storage.</label></li>
        <li><label><input type="checkbox"> <strong>Drawing App with Color Picker:</strong> Enhance the drawing app with different brush colors.</label></li>
        <li><label><input type="checkbox"> <strong>Simple Charting (Using Canvas or a basic library like Chart.js):</strong> Display simple bar or pie charts.</label></li>
        <li><label><input type="checkbox"> <strong>Memory Game with Difficulty Levels:</strong> Add options for different grid sizes and number of pairs.</label></li>
        <li><label><input type="checkbox"> <strong>Minesweeper (Simplified):</strong> Implement a simplified version of the game.</label></li>
        <li><label><input type="checkbox"> <strong>Snake Game:</strong> Implement a classic Snake game with simple graphics on a canvas.</label></li>
        <li><label><input type="checkbox"> <strong>Flappy Bird (Simplified):</strong> Implement a very basic version on a canvas.</label></li>
        <li><label><input type="checkbox"> <strong>Kanban Board (Drag-and-Drop):</strong> Simulate a Trello-like board with columns and draggable cards.</label></li>
        <li><label><input type="checkbox"> <strong>Browser Extension (Simple):</strong> Create a very basic extension (e.g., change background color, display time).</label></li>
        <li><label><input type="checkbox"> <strong>Image Gallery with Lightbox:</strong> Clicking on a thumbnail opens a larger image in a modal.</label></li>
        <li><label><input type="checkbox"> <strong>PDF Viewer (Using a library like PDF.js, very advanced):</strong> Display a PDF in the browser.</label></li>
        <li><label><input type="checkbox"> <strong>Video Player Controls:</strong> Build custom controls (play/pause, volume, progress bar) for an HTML <code>&lt;video&gt;</code> element.</label></li>
        <li><label><input type="checkbox"> <strong>Speech Recognition Integration (Web Speech API):</strong> Take voice input and convert it to text.</label></li>
        <li><label><input type="checkbox"> <strong>Text-to-Speech Integration (Web Speech API):</strong> Convert text on the page to spoken audio.</label></li>
    </ul>

    <hr>

    <h2>Phase 8: Advanced Concepts & Architectural Thinking</h2>
    <p class="phase-description"><em>Focus: Larger applications, performance, and best practices.</em></p>
    <ul>
        <li><label><input type="checkbox"> <strong>Client-Side Routing (Single-Page Application Concept):</strong> Build a simple SPA with multiple "pages" without full page reloads.</label></li>
        <li><label><input type="checkbox"> <strong>Performance Optimization Demo:</strong> Identify and optimize a slow part of one of your previous projects.</label></li>
        <li><label><input type="checkbox"> <strong>Web Worker Demo:</strong> Offload a heavy computation to a Web Worker to keep the UI responsive.</label></li>
        <li><label><input type="checkbox"> <strong>Web Components (Simple):</strong> Create a custom HTML element (e.g., a <code>&lt;my-button&gt;</code>) using Web Components.</label></li>
        <li><label><input type="checkbox"> <strong>Unit Testing (Jest/Mocha):</strong> Write unit tests for the functions in one of your projects.</label></li>
        <li><label><input type="checkbox"> <strong>Basic Build Process (Webpack/Parcel - Introduction):</strong> Set up a simple build process to bundle your JavaScript files.</label></li>
        <li><label><input type="checkbox"> <strong>Integration with a Backend (Node.js/Express - Conceptual/Basic):</strong> Create a very simple Node.js backend that serves data to your frontend.</label></li>
        <li><label><input type="checkbox"> <strong>Real-time Collaboration (Conceptual, if you understand WebSockets):</strong> Simulate a shared whiteboard or text editor experience.</label></li>
        <li><label><input type="checkbox"> <strong>Progressive Web App (PWA) Features (Conceptual):</strong> Add a web manifest and service worker to one of your simpler apps.</label></li>
        <li><label><input type="checkbox"> <strong>Your Dream Project (Scaled Down):</strong> Take a larger project idea you have and break it down into manageable JavaScript features.</label></li>
    </ul>

    <hr>

    <h3>Tips for Success:</h3>
    <ul>
        <li><strong>Start Small:</strong> Don't try to build everything at once. Focus on one feature.</li>
        <li><strong>Understand the "Why":</strong> Don't just copy-paste. Understand why the code works.</li>
        <li><strong>Use <code>console.log()</code>:</strong> It's your best friend for debugging.</li>
        <li><strong>Browser Developer Tools:</strong> Learn to use them effectively (Elements, Console, Sources, Network).</li>
        <li><strong>Version Control (Git/GitHub):</strong> Start using Git from day one. Commit frequently.</li>
        <li><strong>Break Down Problems:</strong> If a project feels too big, break it into smaller tasks.</li>
        <li><strong>Practice, Practice, Practice:</strong> Consistency is key. Even 15-30 minutes a day helps.</li>
        <li><strong>Refactor:</strong> Once a project works, go back and try to make your code cleaner and more efficient.</li>
        <li><strong>Read Documentation:</strong> MDN Web Docs are an invaluable resource.</li>
        <li><strong>Community:</strong> Don't hesitate to ask questions on forums, Reddit, or Discord.</li>
    </ul>
</body>
</html>