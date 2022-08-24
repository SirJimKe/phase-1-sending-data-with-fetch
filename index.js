const p = document.createElement('p');

function submitData(name, email){
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
    })
  })
  .then(resp => resp.json())
  .then(data => {
    console.log(data);
    p.textContent = data.id;
    document.body.appendChild(p);
  })
  .catch(error => {
    alert("ERROR");
    p.textContent = error.message;
    document.body.appendChild(p);
  })
}

submitData("Steve", "steve@steve.com")
