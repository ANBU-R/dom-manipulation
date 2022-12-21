let data = [
  {
    mid: "M12345",
    name: "A",
    email: "A@gmail.com",
  },
  {
    mid: "M45454",
    name: "B",
    email: "B@gmail.com",
  },
  {
    mid: "M45690",
    name: "C",
    email: "C@gmail.com",
  },
  {
    mid: "M23452",
    name: "D",
    email: "D@gmail.com",
  },
  {
    mid: "M09323",
    name: "E",
    email: "E   @gmail.com",
  },
  {
    mid: "M08328",
    name: "F",
    email: "F@gmail.com",
  },
];

let main = document.querySelector(".main");
let midList = document.createElement("ul");
let content = document.createElement("div");
let indexList = document.createElement("ul");
main.appendChild(midList);
main.appendChild(content);
main.appendChild(indexList);

//content
content.innerHTML = `
   <p>ID:${data[0].mid}</p>
   <p>Name:${data[0].name}</p>
   <p>Email:${data[0].email}</p>
`;

data.forEach((emp, index) => {
  //mid
  let midChild = document.createElement("li");
  midChild.innerHTML = `
      <button>
      ${emp.mid}
      </button>
      `;
  midChild.children[0].dataset["mid"] = emp.mid;
  midChild.children[0].addEventListener("click", reset);

  midList.appendChild(midChild);

  //index
  let indexChild = document.createElement("li");
  indexChild.innerHTML = `
    <button>
    ${index + 1}
    </button>
    `;
  indexChild.children[0].dataset["mid"] = emp.mid;
  indexChild.children[0].addEventListener("click", reset);
  indexList.appendChild(indexChild);
  //add active class
  if (index == 0) {
    indexChild.children[0].classList.add("active");
    midChild.children[0].classList.add("active");
  }
});

function reset(event) {
  let mid = event.target.dataset.mid;
  let current;
  data.forEach((emp, index) => {
    if (emp.mid == mid) {
      midList.children[index].children[0].classList.add("active");
      indexList.children[index].children[0].classList.add("active");
      content.innerHTML = `
      <p>ID:${emp.mid}</p> 
   <p>Name:${emp.name}</p>
   <p>Email:${emp.email}</p>
        `;
    } else {
      midList.children[index].children[0].classList.remove("active");
      indexList.children[index].children[0].classList.remove("active");
    }
  });
}
