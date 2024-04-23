const colors = {
  p: "#388e3c",
  div: "#1565c0",
  span: "#e53935",
  ul: "#5e35b1",
  ol: "#fbc02d",
  header: "#d81b60",
  body: "#25b6da",
  form: "#e4f500",
  padrao: "#ccc",
  get(tag) {
    return this[tag] ? this[tag] : this.padrao;
  },
};

document.querySelectorAll(".tag").forEach((elemento) => {
  const tagName = elemento.tagName.toLowerCase();

  elemento.style.borderColor = colors.get(tagName);

  if (!elemento.classList.contains("nolabel")) {
    const label = document.createElement("label");
    label.style.backgroundColor = colors.get(tagName);
    label.innerHTML = tagName;
    elemento.insertBefore(label, elemento.childNodes[0]);
  }
});
