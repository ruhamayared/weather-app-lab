//Variable for api key
const apiKey = "42ad0843249da76407e89458e88726ac"

//Variable for base url
const baseURL = "https://api.openweathermap.org/data/2.5/weather"

//Render the data
let weatherData, userInput

$p1 = $("#title")
$p2 = $("#temp")
$p3 = $("#feels")
$p4 = $("#desc")

//Function that does weather search
function weatherSearch(cityname){
    const url = `${baseURL}?q=${cityname}&appid=${apiKey}&units=imperial`
    
    //Make our request
    $.ajax(url)
    .then((city) => {
        weatherData = city
        render()
        },
        (error) => {
         console.log('bad request', error)
        }   
    )
}

function render() {
    $p1.text("Weather For: " +  userInput)
    $p2.text(`Temperature: ${weatherData.main.temp} °`)
    $p3.text(`Feels Like: ${weatherData.main.feels_like} °`)
    $p4.text(`Weather: ${weatherData.weather[0].description}`)
}


//Grab the submit button and put a click event on it
$("input[type=submit]").on("click", (event) => {
    // prevent the refresh
    event.preventDefault()

    //Grab text from input box
    userInput = $("input[type=text]").val()

    $("#search").val('')

    //Update the screen
    weatherSearch(userInput)
})

