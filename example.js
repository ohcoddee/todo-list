const div = document.createElement("div");
// <div></div>

div.className = "form-check";
// <div class="form-check"></div>

const input = document.createElement("input");
// <input />
input.className = "form-check-input";
input.type = "checkbox";
input.value = "";
input.id = "flexCheckDefault";

const label = document.createElement("label");
label.className = "form-check-label";
label.htmlFor = "flexCheckDefault";
label.innerText = "Default checkbox";

div.appendChild(input);
div.appendChild(label);

document.body.appendChild(div);

const todoInput = document.querySelector(".write-your-todo");

todoInput.addEventListener("keydown", onKeyDown);

function onKeyDown(event) {
  if (event.code === "Enter") {
    console.log("야 니 엔터 눌렀어");
    // 여기서 그걸하면된다
  } else {
    console.log("야 니 엔터 말고 다른거 눌렀어 눌렀어");
  }
}
