let cardId = document.querySelectorAll('.buy');
console.log(cardId);

cardId.forEach(element => {
    element.addEventListener('click' , () => {
        let id = $(element).attr("dataId")
        console.log(id);
        window.location.href = id
    })
})