
// let numVal = document.getElementById("form1").value;

let recipeList = [
  {name: "ragu", list: ["chuck beef", "canned tomato", "beef stock", "italian herbs"]},
  {name: "Chow Mein", list: ["beef mince", "oyster sauce", "carrot", "cabbage"]},
  {name: "Chicken Parma", list: ["chicken breast", "pizza sauce", "mozarella", "breadcrumbs", "ham"]},
  {name: "Meal Prep Chicken", list: ["chicken breast",  "chicken stock"]},
  {name: "Spaghetti Bol", list: ["beef mince", "canned tomato", "beef stock", "italian herbs"]},
  {name: "Pulled Pork", list: ["pork shoulder", "BBQ sauce", "apple cider vinegar", "italian herbs", "chicken stock"]},
]


// alert(randomElement.name)


let modalBody = document.getElementById("modal-text").innerText = recipeList[0];
  let randomElement = recipeList[Math.floor(Math.random() * recipeList.length)];

function changeText() {
  
  modalBody.textContent = randomElement.name

}

// randomBtn.addEventListener("click", changeText()); 