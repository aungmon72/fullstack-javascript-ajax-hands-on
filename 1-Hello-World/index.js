
document.addEventListener("DOMContentLoaded",async function() {
    let url = "https://4geeksacademy.github.io/exercise-assets/txt/hello.txt"
    // let data = await 
    let content = document.querySelector("#content")
    let response = await axios.get(url)
    let responseData = response.data
    console.log(responseData)

    content.innerHTML=responseData
})
