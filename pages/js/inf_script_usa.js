/*state_usa*/
const states_usa = document.querySelectorAll('.state_usa')
const popupBg = document.querySelector('.info__bg');
const popup = document.querySelector('.info');
/*capital_usa*/
const cu = document.querySelectorAll('.capital_usa')

states_usa.forEach(state_usa => {
    state_usa.addEventListener('click', function(){
        popup.querySelector('.info__photo').setAttribute('src', this.dataset.photo);
        popup.querySelector('.info__title').innerText = this.dataset.title;
        popup.querySelector('.info__text').innerHTML = this.dataset.description;
        popupBg.classList.add('active');
    });
});

document.addEventListener('click', (e) => {
    if(e.target === popupBg) {
        popupBg.classList.remove('active');
    }
})


cu.forEach(capital_usa => {
    capital_usa.addEventListener('click', function(){
        popup.querySelector('.info__photo').setAttribute('src', this.dataset.photo);
        popup.querySelector('.info__title').innerText = this.dataset.title;
        popup.querySelector('.info__text').innerHTML = this.dataset.description;
        popupBg.classList.add('active');
    });
});

document.addEventListener('click', (e) => {
    if(e.target === popupBg) {
        popupBg.classList.remove('active');
    }
})

