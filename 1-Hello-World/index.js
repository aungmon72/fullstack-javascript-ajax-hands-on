
document.addEventListener("DOMContentLoaded",async function() {
    let url = "https://4geeksacademy.github.io/exercise-assets/txt/hello.txt"
    // let data = await 
    let content = document.querySelector("#content")
    let response = await axios.get(url)
    let responseData = response.data
    console.log(responseData)

    content.innerHTML=responseData

    let content2 = document.querySelector("#content2")
    content2.innerHTML="Hello World Again"

    let paragraph = document.querySelector("#paragraph")
    paragraph.innerHTML="Hello World from Paragraph"

    let paragraph2 = document.querySelector("#paragraph2")
    paragraph2.innerHTML="Hello World from Paragraph2"

    let paragraph3 = document.querySelector("#paragraph3")
    paragraph3.innerHTML="Hello World from Paragraph3"

    // let textInput = document.querySelector("textInput")
    let textOutput = document.querySelector("textOutput")
    textOutput.innerHTML = "Testing"
    while (true) {
        displayTextOutput()
    }
})

function displayTextOutput (){
//    textOutput.innerHTML = textInput.value
    let textInput = document.querySelector("textInput")
    let textInputButton = document.querySelector("textInputButton")
    let textOutput = document.querySelector("textOutput")
    textInputButton.addEventListener("click", async function() {
        textOutput.innerHTML=textInput.data
    })
    //textInput.addEventListener("")
}

displayTextOutput()
