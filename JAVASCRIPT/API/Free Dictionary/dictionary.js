let word = document.querySelector('#input')
let searchBtn = document.querySelector('#search')
let headingWord = document.querySelector('.word')
let definationBox = document.querySelector('.definationBox')


searchBtn.addEventListener('click', function () {
    let searchApi = `https://api.dictionaryapi.dev/api/v2/entries/en/${word.value}`
    fetch(searchApi)
        .then(res => res.json())
        .then(res => {
            headingWord.innerText = res[0].word
            let result = res[0].meanings
            definationBox.innerHTML = ''
            let audio = document.createElement('audio')
            audio.src = res[0].phonetics[0].audio == '' ? '' : res[0].phonetics[0].audio
            audio.controls = true
           
            for (let i = 0; i < result.length; i++) {


                let pTag = document.createElement('p')
                pTag.innerText = 'Part of Speech : ' + result[i].partOfSpeech
               
                let ul = document.createElement('ul')
                for (let j = 0; j < result[i].definitions.length; j++) {
                    let li = document.createElement('li')
                    li.innerText = result[i].definitions[j].definition
                    ul.appendChild(li)  //<!-- Compare The Array Of Object -->
                                        // Append child:- syntax: variable name.appendchild(another variable name)
                                        //  ex: definitionname.appendchild(pTag) -->

                }


                definationBox.appendChild(audio)
                definationBox.appendChild(pTag)
                definationBox.appendChild(ul)
            }
        })
})
