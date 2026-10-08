const textInput = document.getElementById("textInput");
const charCount = document.getElementById("charCount");
const wordCount = document.getElementById("wordCount");
const sentenceCount = document.getElementById("sentenceCount");
const remaining = document.getElementById("remaining");
const clearBtn = document.getElementById("clearBtn");

const maxCharacters = 5000;

function updateCounter() {
    const text = textInput.value;

    // Character count
    const characters = text.length;

    // Word count
    const trimmedText = text.trim();

    const words = trimmedText === ""
        ? 0
        : trimmedText.split(/\s+/).length;

    // Sentence count
    const sentences = trimmedText === ""
        ? 0
        : trimmedText
            .split(/[.!?]+/)
            .filter(sentence => sentence.trim().length > 0)
            .length;

    // Update UI
    charCount.textContent = characters;
    wordCount.textContent = words;
    sentenceCount.textContent = sentences;

    // Remaining characters
    remaining.textContent =
        `${maxCharacters - characters} characters remaining`;
}

// Live update while typing
textInput.addEventListener("input", updateCounter);

// Clear button
clearBtn.addEventListener("click", () => {
    textInput.value = "";
    updateCounter();
    textInput.focus();
});