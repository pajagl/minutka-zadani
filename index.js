console.log('funguju!');

const alarm=document.querySelector('.alarm')
const audio=document.querySelector('audio')
const zruseniZvoneni=document.querySelector('.zruseniZvoneni')
const zadaniUzivatele=Number(prompt('zadej cas zvoneni'))

const zvoneni = setTimeout(() => {
    alarm.classList.add('alarm--ring')
    audio.play()
},zadaniUzivatele*1000)

zruseniZvoneni.addEventListener('click', () => {
    audio.pause()
    clearTimeout(zvoneni)
})
