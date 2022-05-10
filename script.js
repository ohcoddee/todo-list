const div = document.createElement("div");
const input = document.createElement("input");
const label = document.createElement("label");

div.className = "form-check";

input.className = "form-check-input";
input.type = "checkbox";
input.value = "";
input.id = "flexCheckDefault";

label.className = "form-check-label";
label.htmlFor = "flexCheckDefault";
label.innerText = "Default checkbox";

// document.body.appendChild(div);
// div.appendChild(input);
// div.appendChild(label);

function onKeyDown(event) {
  if (event.code === "Enter") {
    console.log("pressed");
  } else {
    console.log("❌");
  }
}
