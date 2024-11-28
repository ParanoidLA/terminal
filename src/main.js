const COMMANDS = {
 help: `
Need some guidance? Don't worry, I got you! Here are the commands you can use:

  - <span class="code">about</span>:  
    Get to know the genius behind this. Spoiler: It's Lakshya Agrawal.

  - <span class="code">experience</span>:  
    Flexing professional muscles, internships, and projects.

  - <span class="code">education</span>:  
    Because grades still matter...sometimes.

  - <span class="code">skills</span>:  
    A brag list of what Lakshya can do (Hint: It’s a lot).

  - <span class="code">contact</span>:  
    Wanna slide into the DMs? Here are the socials.

  - <span class="code">projects</span>:  
    Where innovation meets caffeine-fueled creativity.

  - <span class="code">certifications</span>:  
    The official proof that Lakshya is awesome.

  - <span class="code">linkedin</span>:  
    The place where people pretend to be super professional.

  - <span class="code">whois</span>:  
    The TL;DR on Lakshya Agrawal.

  - <span class="code">party</span>:  
    Warning: Might cause spontaneous celebrations!


  - <span class="code">sudo rm -rf</span>:  
    Oh, so you're a hacker now? Nice try! 😂
`,
  experience:
    "Currently a Frontend Engineering Intern at GoPool. Previously developed apps and course content at Shabzak Tech. Focus areas include React Native and seamless user experiences.",
  education:
    "B.Tech IT, Shri Ramdeobaba College of Engineering and Management (CGPA: 8.11). Completed 12th with 81.54% and 10th with 93%.",
  skills:
    '<span class="code">Languages:</span> C/C++, Python, SQL, Swift (Basic)<br><span class="code">Web Development:</span> HTML, CSS, React.js, MERN Stack (Basic)<br><span class="code">Mobile Development:</span> Android Development, React Native<br><span class="code">Utilities:</span> Linux, Git, AWS, Power BI<br><span class="code">Soft Skills:</span> Leadership, Event Management',
  contact:
    'Reach me on:<br>["<a href="https://github.com/ParanoidLA" target="_blank" class="social link">GitHub</a>", "<a href="https://linkedin.com/in/lakshyagrawal" target="_blank" class="social link">LinkedIn</a>", "<a href="https://leetcode.com/Lakshyagrawal/" target="_blank" class="social link">LeetCode</a>"]',
  projects:
    '<span class="code">CineQuest:</span> A movie information app created with React Native.<br><span class="code">Photo Finder:</span> A photo gallery app that fetches images via Pixabay API and allows liking photos.<br><span class="code">Biometric Voting System:</span> Secure voting system using Mantra MFS100.<br><span class="code">E-commerce Analysis:</span> Analyzed sales trends using Python and SQL.<br><span class="code">Network Anomaly Detection:</span> ML-based system for anomaly detection using CICIDS dataset.',
  certifications:
    "Certified in Python (NPTEL), AWS Cloud Practitioner, and Google UX Design.",
  friends: {
    notfound: "No friends found. Feeling lonely? 😅",
  },
  linkedin: {
    link: '<a href="https://linkedin.com/in/lakshyagrawal" target="_blank">linkedin.com/in/lakshyagrawal</a>',
  },
  naina: "❤️❤️❤️",
  yash: "🫂🫂🫂",
  shraddha: "🥵🤯🫣",
  gunjan: "🤑🤑🤑💰💸💵",
  jainam: "🤡🤡🤡",
  lakshya: "Supreme leader",
  whoami:"depends on a lot of things",
  whois:
    "Lakshya Agrawal: Aspiring developer with a flair for innovation. Passionate about web and mobile development, data analysis, and making a mark in the tech world.",
  party: "🎉🎉🎉 It's party time!",
  "sudo rm -rf": "Hecker hei bhai",
  about:"Hii Lakshya here!! checkout help for more valid commands"

};
let userInput, terminalOutput;

const app = () => {
  userInput = document.getElementById("userInput");
  terminalOutput = document.getElementById("terminalOutput");
  document.getElementById("dummyKeyboard").focus();
};

const execute = function executeCommand(input) {
  let output;
  input = input.toLowerCase();

  if (input.length === 0) {
    return;
  }

  // "Secret" party command
  if (input === "party") {
    startTheParty();
  }
  if (input === "clear") {
    terminalOutput.innerHTML = ''; // Clear terminal output
    output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> Command executed: ${input}</div>`;
    terminalOutput.innerHTML = `${terminalOutput.innerHTML}<div class="terminal-line">${output}</div>`;
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
    return;
  }
  

  // "Secret" party command
  if (input === "sudo rm -rf") {
    whooops();
  }

  output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
  if (!COMMANDS.hasOwnProperty(input)) {
    output += `<div class="terminal-line">no such command: <span class="output">"${input}"</span></div>`;
    console.log("Oops! no such command");
  } else {
    output += `<div class="output"> ${COMMANDS[input]} </div>`;
  }

  terminalOutput.innerHTML = `${terminalOutput.innerHTML}<div class="terminal-line">${output}</div>`;
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
};

const key = function keyEvent(e) {
  const input = userInput.innerHTML;

  if (e.key === "Enter") {
    execute(input);
    userInput.innerHTML = "";
    return;
  }

  userInput.innerHTML = input + e.key;
};

const backspace = function backSpaceKeyEvent(e) {
  if (e.keyCode !== 8 && e.keyCode !== 46) {
    return;
  }
  userInput.innerHTML = userInput.innerHTML.slice(0, userInput.innerHTML.length - 1);
};

document.addEventListener("keydown", backspace);
document.addEventListener("keypress", key);
document.addEventListener("DOMContentLoaded", app);

// TOP SECRET, DON'T READ
const startTheParty = () => {
  var confettiSettings = {
    target: "canvas",
    max: "1000",
    size: "1",
    animate: true,
    props: ["square", "triangle", "line"],
    colors: [
      [165, 104, 246],
      [230, 61, 135],
      [0, 199, 228],
      [253, 214, 126]
    ],
    clock: "25",
    rotate: true,
    width: "1680",
    height: "971",
    start_from_edge: true,
    respawn: false
  };
  var confetti = new ConfettiGenerator(confettiSettings);
  confetti.render();
};

const whooops = () => {
  document.body.querySelector(".hero").remove();
  document.body.style.background = "#000";
  document.body.style.width = "100vw";
  document.body.style.height = "100vh";
};
// Close button functionality
document.getElementById("closeBtn").addEventListener("click", function() {
  const terminal = document.querySelector(".terminal");
  terminal.style.display = "none"; // Hides the terminal
});

// Minimize button functionality
document.getElementById("minBtn").addEventListener("click", function() {
  const terminalWindow = document.querySelector(".terminal-window");
  if (terminalWindow.classList.contains("minimized")) {
    terminalWindow.classList.remove("minimized");
    terminalWindow.style.height = "100%"; // Restore to original height
  } else {
    terminalWindow.classList.add("minimized");
    terminalWindow.style.height = "30px"; // Set minimized height
  }
});

// Maximize button functionality
document.getElementById("maxBtn").addEventListener("click", function() {
  const terminalWindow = document.querySelector(".terminal-window");
  if (terminalWindow.classList.contains("maximized")) {
    terminalWindow.classList.remove("maximized");
    terminalWindow.style.width = "100%"; // Restore to original width
    terminalWindow.style.height = "100%"; // Restore to original height
  } else {
    terminalWindow.classList.add("maximized");
    terminalWindow.style.width = "100vw"; // Set to full width
    terminalWindow.style.height = "100vh"; // Set to full height
  }
});