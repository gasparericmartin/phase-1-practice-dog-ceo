window.addEventListener('DOMContentLoaded', (e) => {
    
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(response => response.json())
    .then(data => {
        data.message.forEach(dogPic => {
            const picInsert = document.createElement('img')
            const container = document.getElementById('dog-image-container')
            
            picInsert.src = dogPic
            picInsert.width = 400
            container.appendChild(picInsert)
        })
            

            
    })

    fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(data => {
        console.log(data.message)
        for (breed in data.message) {
            const breedList = document.getElementById('dog-breeds')
            //const breedInsert = document.createElement('li')
            
            if (data.message[breed].length > 0) {
                for (subBreed of data.message[breed]) {
                    const breedInsert = document.createElement('li')
                    breedInsert.textContent = `${breed} ${subBreed}`
                    breedList.appendChild(breedInsert)

                }
            }
            else {
                const breedInsert = document.createElement('li')
                breedInsert.textContent = breed
                breedList.appendChild(breedInsert)
            }
        }
    })
    
    document.getElementById('dog-breeds').addEventListener('click', function(e) {
        e.target.style = 'color:tomato'
    })


    document.getElementById('breed-dropdown').value = ''
    document.getElementById('breed-dropdown').addEventListener('change', filterBreed)

    function filterBreed(e) {
        const dropDownValue = document.getElementById('breed-dropdown').value
        const breedList = document.getElementById('dog-breeds').childNodes

        breedList.forEach(breed => {
            if (breed.innerText) {
                if (!breed.innerText.startsWith(dropDownValue)) {
                    breed.hidden = true
                }
                else {
                   breed.hidden = false 
                }
            }
            
            
        })    
    }

})