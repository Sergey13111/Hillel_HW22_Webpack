export function removeTask(event) {
    const isRemoveButton = event.target.nodeName === "BUTTON";

    if (isRemoveButton) {
        const messageBlock = event.target.closest(".text-message");
        return messageBlock.remove();
    } 
};

