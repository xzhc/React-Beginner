export function User({ name, age }) {
  return (
    //declarative
    <h1>
      {name}: <span style={{ color: "red" }}>{age}</span>
    </h1>
  );
}

//imperative
//create H1
const name = "xzh";
const age = 25;
const h1 = document.createElement("h1");
//put name in h1
h1.innerText = { name };
//create span in h1 that is red
const span = document.createElement("span");
span.style.color = "red";
//put age in span
span.innerText = { age };
//put span in h1
h1.appendChild(span);
