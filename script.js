console.log('hello');

const headerTag = document.getElementById('header-tag');

headerTag.addEventListener('click', () => {
    headerTag.textContent = "Hello World";
})