const form = document.querySelector("form_search");
const input = document.querySelector("form_search");
const msg = document.querySelector("form-err-msg");
const list = document.querySelector("cities");


const apiKey = "d9c877a16e54d5b2e6758b72d1668057";


form.addEventListener("submit", e =>{
    e.preventDefault()

    // msg.textContent = ""
    // msg.classList.remove('visible')

    let inputVal = input.value

    const listItemsArray = Array.from(list.querySelectorAll('.cities li'))

    if(listItemsArray.length > 0){
        const filteredArray = listItemsArray.filter(element =>{
            let content = ''
            let cityName = element.querySelector('.city-name').textContent.toLowerCase()
            let cityCountry = element.querySelector('.city-country').textContent.toLowerCase()


            if (inputVal.includes(',')){
                if(inputVal.split(',')[1].length > 2){
                    inputVal = input.split(',')[0]
    
                    content = cityName
                }else{
                    content = `${cityName}, ${cityCountry}`
                }
            }else{
                content = cityName
            }
            return content = inputVal.toLowerCase()
        })

     console.log(filteredArray);
    }


})