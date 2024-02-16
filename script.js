document.addEventListener("DOMContentLoaded", function() {
    const textInput = document.getElementById("input");
    const result = document.getElementById("result");
    const checkBtn = document.getElementById("btn");

    textInput.addEventListener("keyup", function(event) {
      if (event.key === "Enter") {
        event.preventDefault(); // Prevent form submission
        if (textInput.value.trim() === "") {
          showError("Please input a value");
        } else {
          checkPalindrome();
        }
      }
    });

    checkBtn.addEventListener("click", function() {
      if (textInput.value.trim() === "") {
        showError("Please input a value");
      } else {
        checkPalindrome();
      }
    });

    function checkPalindrome() {
      const text = textInput.value.toLowerCase().replace(/[^a-z0-9]/g, "");
      const reversedText = text.split("").reverse().join("");

      if (text === reversedText) {
        result.textContent = textInput.value + " is a palindrome";
      } else {
        result.textContent = textInput.value + " is not a palindrome";
      }
    }

    function showError(message) {
      alert(message);
    }
});
