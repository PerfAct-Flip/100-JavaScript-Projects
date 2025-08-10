"use strict"

// DOM Elements
// The lines below are commented out, just like in your code.
const quoteBox = document.querySelector('#quoteBox');
const generatorButton = document.querySelector('#generatorButton');

//API
const api_url ="https://thequoteshub.com/api/";

async function getapi() {
  try {
    const response = await fetch(api_url);
    if (!response.ok) {
      throw new Error(`API returned an error: ${response.status}`);
    }
    const data = await response.json();
    console.log("API response received:", data); // This log will show up once
    const text = data.text;
    const author = data.author;
    const quoteHtml = `
      <blockquote>
        &ldquo;${text}&rdquo;
        <footer>&mdash; ${author}</footer>
      </blockquote>
    `;
    return quoteHtml;
  }
  catch (error) {
    console.log("Error fetching quote. ", error);
    return "<blockquote><p>Failed to load quote. Please try again later.</p></blockquote>";
  }
}

// THIS IS THE KEY TEST.
// The code will check if the generatorButton variable exists.
if (generatorButton) {
  console.log("The 'if (generatorButton)' condition is TRUE.");
  generatorButton.addEventListener('click', async () => {
    console.log("The button has been clicked."); // This log should appear on click.
    if (quoteBox) {
      quoteBox.innerHTML = "<blockquote><p>Loading...</p></blockquote>";
      const quoteHTML = await getapi();
      quoteBox.innerHTML = quoteHTML;
    }
  })
} else {
  console.log("The 'if (generatorButton)' condition is FALSE.");
}

getapi();