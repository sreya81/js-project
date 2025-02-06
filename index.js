let options={
    "method":"GET"
}
fetch("http://localhost:3000/books",options)
  .then(response=>response.json())
  .then(data=>console.log(data))
