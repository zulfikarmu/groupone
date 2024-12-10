const texts = ["Zulfikar", "Azizi", "Faldi", "Vincent", "Putri", "Aza", "Keysa", "GroupOne", ]; // Array teks
const typingSpeed = 100; // Kecepatan mengetik
const deletingSpeed = 50; // Kecepatan menghapus
const delayBetweenTexts = 1000; // Delay antar teks

const typingElement = document.getElementById("typing-text");
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeText() {
  const currentText = texts[textIndex]; // Teks saat ini

  if (isDeleting) {
    // Mode menghapus
    typingElement.innerHTML = currentText.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length; // Pindah ke teks berikutnya
    }
  } else {
    // Mode mengetik
    typingElement.innerHTML = currentText.substring(0, charIndex++);
    if (charIndex > currentText.length) {
      isDeleting = true;
      setTimeout(typeText, delayBetweenTexts); // Tunggu sebelum menghapus
      return;
    }
  }

  const speed = isDeleting ? deletingSpeed : typingSpeed;
  setTimeout(typeText, speed);
}

// Mulai efek
typeText();
