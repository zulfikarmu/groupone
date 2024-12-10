const dynamicText = document.getElementById("typing-text");

// Array of words to "type"
const words = ["Zulfikar", "Azizi", "Faldi", "Vincent", "Putri", "Aza", "Keysa", "GroupOne"];
let wordIndex = 0;
let charIndex = 0;

function typeEffect() {
  if (charIndex < words[wordIndex].length) {
    // Add next character to the dynamic text
    dynamicText.textContent += words[wordIndex][charIndex];
    charIndex++;
    setTimeout(typeEffect, 100); // Delay between typing each character
  } else {
    // Wait before deleting the text
    setTimeout(deleteEffect, 1000);
  }
}

function deleteEffect() {
  if (charIndex > 0) {
    // Remove last character
    dynamicText.textContent = words[wordIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(deleteEffect, 50); // Delay between deleting each character
  } else {
    // Move to the next word
    wordIndex = (wordIndex + 1) % words.length; // Loop back to the start
    setTimeout(typeEffect, 500);
  }
}

// Start the typing effect
typeEffect();
