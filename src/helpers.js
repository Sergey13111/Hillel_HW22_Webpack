export function createNode(element) {
    return document.createElement(element);
};

export function append(parent, el) {
    return parent.append(el);
};

export function prepend(parent, el) {
    return parent.prepend(el);
};
