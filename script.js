// TODAY
const buttonToday = document.querySelector('.js-button-today');
const today = document.querySelector('.js-today');

buttonToday.addEventListener('click', ()=> {
    today.classList.toggle('today')
})

// MODAL
const modal = document.querySelector('.js-modal');
const day = document.querySelectorAll('.calendar__day');
const close = document.querySelector('.js-close');

for(let i = 0; i < day.length; ++i){
    day[i].addEventListener('click', (e) => {
        modal.style.display = 'block';
        if(e.target.className = "calendar__day" ){
            console.log(e.target);
            form.addEventListener('submit' , (e) => {
                e.preventDefault();
                const data = new FormData(e.target);
                console.log(data.get('event'));
                
                e.target.innerHTML = '<span>'+data.get('event')+'</span>';
                
                modal.style.display = 'none';
                form.reset();
            });
        }
    });
}


close.addEventListener('click', (event) =>{
    event.preventDefault();
    modal.style.display = 'none';
})

const form = document.querySelector('.js-form');

