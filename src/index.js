import "./styles.scss";
import { createNode, append, prepend } from "./helpers.js";
import { completedChecked } from "./completed.js";
import { removeTask } from "./remove.js";

const form_input = document.forms.form_message;
const {message} = form_input;
const errorMessage = document.querySelector(".error-message");
const ul = document.getElementById("list");

form_input.onsubmit = (event) => {
    event.preventDefault();

    if (message.value.trim().length === 0) {
        message.classList.add("error");
        errorMessage.classList.add("alert");
        errorMessage.innerHTML = "Message field is required";
        return;
    };

    const li = createNode("li");
    const checkbox = createNode("input");
    const span = createNode("span")
    const button = createNode("button");

    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("name", "completed");
    checkbox.setAttribute("class", "form-check-input")
    li.classList.add("text-message");
    span.innerHTML = message.value;
    button.textContent = "Delete";

    append(ul, li);
    append(li, span);
    prepend(li, checkbox);
    append(li, button);
    form_input.reset();
};

function removeError() {
    const isErrorField = message.classList.contains("error");

    if (isErrorField) {
        message.classList.remove("error");
        errorMessage.classList.remove("alert");
        errorMessage.innerHTML = "";
    }
    return;
};

message.onfocus = removeError;

ul.addEventListener("click", (removeTask));

ul.addEventListener("change", (completedChecked));