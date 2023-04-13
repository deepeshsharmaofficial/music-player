var headerLogo = document.querySelector('.right-header-item .user-profile-img');
var userProfile = document.querySelector('.right-header-item .user-profile-menu')

var isPresent = false;
function myFunction() {
    console.log('Hello');
    if(!isPresent) {
        userProfile.classList.remove('display-none');
        isPresent = true;
    } else if (isPresent) {
        userProfile.classList.add('display-none');
        isPresent= false;
    }
};


// Search
var fullSearch = document.querySelector('.main-search-input')
function searchFunction() {
    fullSearch.classList.add('main-search-input-display');
}
function goBack() {
    fullSearch.classList.remove('main-search-input-display');
}


// Left Right Scroll
let left_scroll = document.getElementById('left_scroll');
let right_scroll = document.getElementById('right_scroll');
let pop_song = document.getElementsByClassName('content')[0];

left_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 330;
})
right_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft += 330;
})




