const textarea = document.getElementById("message");
const counter = document.getElementById("counter");
const maxLength = 250;

textarea.addEventListener("input", () => {
    const currentLength = textarea.value.length;
    counter.textContent = `${currentLength}/${maxLength}`;
    if (currentLength >= maxLength) {
        textarea.classList.add("limit-reached");
    } else {
        textarea.classList.remove("limit-reached");
    }
});
