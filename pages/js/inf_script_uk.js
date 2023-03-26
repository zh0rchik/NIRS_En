/*region_uk*/
const regions = document.querySelectorAll('.region_uk')
const popupBg = document.querySelector('.info__bg');
const popup = document.querySelector('.info');

regions.forEach(region_uk => {
    region_uk.addEventListener('click', function(){
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