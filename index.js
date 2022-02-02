let player = {
    chips: 100
}
let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ''
let messageEl = document.getElementById('message-el')
let sumEl = document.querySelector('.sum-el')
let cardsEl = document.getElementById('cards-el')



let playerEl = document.getElementById('player-el')
playerEl.textContent = `Chips: $${player.chips}`


function getRandomCard() {
    return Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = 'Cards: '
    for(let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + ' '
    }

    sumEl.textContent = 'Sum: ' + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got BlackJack!"
        hasBlackJack = true
        playerEl.textContent = `Chips: $${player.chips += 20}`
    } else {
        message = "You're out of the game!"
        isAlive = false
        playerEl.textContent = `Chips: $${player.chips -= 10}`
    }
    messageEl.textContent = message
}

function newCard() {
    if(isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}