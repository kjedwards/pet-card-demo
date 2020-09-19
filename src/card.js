const cardInit = () => {
    const cardHtml = `
        <div class="aap-pet-card">Second test</div>
    `
    const cards = document.getElementsByClassName("aap-card")
        Array.prototype.filter.call(cards, card => {
        card.innerHTML = cardHtml;
    })
}