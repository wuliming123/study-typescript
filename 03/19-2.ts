// this + 重载
let deck = {
    suits: ['hearts', 'spades', 'clubs', 'diamonds'],
    cards: Array(52),
    createCardPicker: function () {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52)
            let pickedSuit = Math.floor(pickedCard / 13)

            return {
                suit: this.suits[pickedSuit],// 利用箭头函数解决this指向问题
                card: pickedCard % 13
            }
        }
    }
}

let cardPicker = deck.createCardPicker()
let pickedCard = cardPicker()

console.log('card ' + pickedCard.card + ' of ' + pickedCard.suit)