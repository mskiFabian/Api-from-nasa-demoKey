//Example fetch using NASA APi
function getImageData() {
  fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    document.querySelector("h1").textContent = data.title
    document.querySelector("h2").textContent = data.explanation
    document.querySelector("img").src = data.url
    document.querySelector("h3").textContent = data.date
    
  })
  .catch(error => console.error(error));
}
getImageData()




