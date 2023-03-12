/*country_official*/
const countries_official = document.querySelectorAll('.country_official')
const popupBg = document.querySelector('.info__bg');
const popup = document.querySelector('.info');
/*country_one_of_official*/
const countries_one_of_official = document.querySelectorAll('.country_one_of_official')
const ocean= document.querySelectorAll('.oceania')

countries_official.forEach(country_official => {
    country_official.addEventListener('click', function(){
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


countries_one_of_official.forEach(country_one_of_official => {
    country_one_of_official.addEventListener('click', function(){
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

ocean.forEach(oceania => {
   oceania.addEventListener('click', function(){
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