const quotes = [
  { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
  { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
  { text: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar" },
  { text: "Do something today that your future self will thank you for.", author: "Unknown" },
  { text: "Great things never come from comfort zones.", author: "Unknown" }
];

const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const btn = document.getElementById("newQuote");
const box = document.querySelector(".quote-box");

btn.addEventListener("click", () => {
  box.classList.add("fade");

  setTimeout(() => {
    const random = Math.floor(Math.random() * quotes.length);
    quoteEl.textContent = `"${quotes[random].text}"`;
    authorEl.textContent = `— ${quotes[random].author}`;
    box.classList.remove("fade");
  }, 500);
});
