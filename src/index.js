const generateBtn = document.getElementById('generate')
const url = "https://v2.jokeapi.dev/joke/Any"
const jokeSetupEl = document.getElementById("setup")
const jokeDeliveryEl = document.getElementById("delivery")

generateBtn.addEventListener('click',  async function() {
    () => {
        jokeSetupEl.textContent = ""
        jokeDeliveryEl.textContent = ""
          }
    const response = await fetch(url)
    const data = await response.json()
   jokeSetupEl.textContent = data.setup
    jokeDeliveryEl.textContent = data.delivery

})