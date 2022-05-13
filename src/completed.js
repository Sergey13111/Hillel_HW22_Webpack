export function completedChecked (event) {
    const isChecked = event.target.className === "form-check-input";
    
    if (isChecked) {
        const li = event.target.closest("li");
        const btnRemove = li.querySelector("button");
        const span = li.querySelector("span")
        const chbox = event.target;

        span.classList.add("line-through");
        chbox.disabled = true;
        btnRemove.disabled = true;
    };
};
