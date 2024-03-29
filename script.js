const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

//Dark or light images
function imageMode(color){
    //Original code but includes repitition
    // image1.src = `img/undraw_proud_coder_${color}.svg`;
    // image2.src = `img/undraw_feeling_proud_${color}.svg`;
    // image3.src = `img/undraw_conceptual_idea_${color}.svg`;

    //Clean way to write to avoid repetition.
    const imageIds = ['proud_coder', 'feeling_proud', 'conceptual_idea'];
    imageIds.forEach((id, index) => {
        window[`image${index + 1}`].src = `img/undraw_${id}_${color}.svg`;
    });
}

//This is the cleanest way to write this code. The alternative method is commented below it.
function toggleDarkLightMode(isDark) {
    nav.style.backgroundColor = isDark ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = isDark ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode';
    isDark ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    isDark ? imageMode('dark') : imageMode('light');
}
// Alternatively,
// Dark mode styles
// function darkMode(){
//     nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
//     textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
//     toggleIcon.children[0].textContent = 'Dark Mode';
//     toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
//     imageMode('dark');
// }

// Light mode function
// function lightMode(){
//     nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
//     textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
//     toggleIcon.children[0].textContent = 'Light Mode';
//     toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
//     imageMode('light');
// }

//Switch theme
function switchTheme(event){
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        toggleDarkLightMode(true); //if we are using the alternative method, we have to call darkMode() function here
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        toggleDarkLightMode(false); //if we are using the alternative method, we have to call lightMode() function here
    }
}

//Event listener
toggleSwitch.addEventListener('change',switchTheme);

//check local storage for theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        toggleDarkLightMode(true);
    }
}