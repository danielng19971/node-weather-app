console.log('Client side javascript file is loaded!')

const form = document.querySelector('form')
const search = document.querySelector('input')
const p = document.querySelector('#p1')
form.addEventListener('submit',(e)=>{
    e.preventDefault()

    const location = search.value
    p.textContent = "Loading"
    const input = 'http://localhost:3000/weather?address='+location
    fetch(input).then((response)=>{
        
        response.json().then((data)=>{
            if(data.error){
                p.textContent = data.error
            }else{
                console.log(data.temperature)
                console.log(data.wind_speed)
                console.log(data.Location)
                p.textContent = data.Location+data.temperature
            }

        })
    })

})