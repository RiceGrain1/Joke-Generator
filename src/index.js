const generateBtn = document.getElementById('generate')
const url = "https://v2.jokeapi.dev/joke/Any"
const jokeSetupEl = document.getElementById("setup")
const jokeDeliveryEl = document.getElementById("delivery")
const genBtn = document.getElementById("generate")



generateBtn.addEventListener('click', async function () {
   spin()
    const response = await fetch(url)
    console.log(response)
    const data = await response.json()
    stopSpin()
    jokeSetupEl.textContent = data.setup
    jokeDeliveryEl.textContent = data.delivery

    console.log(data)

})

function spin() {
    genBtn.innerHTML = `<svg fill="currentColor" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32px" height="32px" viewBox="0 0 26.349 26.35" xml:space="preserve" data-darkreader-inline-fill="" style="--darkreader-inline-fill: #28292a; --darkreader-inline-stroke: #d8d7d4;" stroke="#ffffff" data-darkreader-inline-stroke=""><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <circle cx="13.792" cy="3.082" r="3.082"></circle> <circle cx="13.792" cy="24.501" r="1.849"></circle> <circle cx="6.219" cy="6.218" r="2.774"></circle> <circle cx="21.365" cy="21.363" r="1.541"></circle> <circle cx="3.082" cy="13.792" r="2.465"></circle> <circle cx="24.501" cy="13.791" r="1.232"></circle> <path d="M4.694,19.84c-0.843,0.843-0.843,2.207,0,3.05c0.842,0.843,2.208,0.843,3.05,0c0.843-0.843,0.843-2.207,0-3.05 C6.902,18.996,5.537,18.988,4.694,19.84z"></path> <circle cx="21.364" cy="6.218" r="0.924"></circle> </g> </g> </g></svg>`
    genBtn.classList.add("animate-spin")
    genBtn.classList.remove("bg-green-600")
    genBtn.classList.remove("hover:bg-green-700")
    
}

function stopSpin() {
    genBtn.classList.remove("animate-spin")
    genBtn.classList.add("bg-green-600")
    genBtn.innerHTML = `Generate`
}

