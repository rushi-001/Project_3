const btn1 = document.querySelector("#btn1");
const heading1 = document.querySelector("#Heading1");

btn1.onclick = ()=>{
    const name = prompt("hello, whats your name");
    alert(`Hello, ${name}`);
    heading1.textContent = `welcome ${name}`;
}