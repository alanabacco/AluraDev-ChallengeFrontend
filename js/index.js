//muda cor da borda do editor
var selectColor = document.querySelector('#select-color');
var editor = document.getElementById('campo-editor');

selectColor.addEventListener('input', () => {
    color = selectColor.value;
    editor.style.border = `solid ${color} 16px`;
    console.log(color);
});

//highlight.js
const codeArea = document.querySelector('.codigo-wrapper');
const codeLing = document.querySelector('#select-ling');
const btnHljs = document.querySelector('#btn-highlight');

function changeLing() {
    const code = codeArea.querySelector('code');
    codeArea.innerHTML = `<code class="preview hljs ${codeLing.value}" id="campo-editor" contenteditable="true" aria-label="editor"></code>`;
    codeArea.firstChild.innerText = code.innerText;
}

codeLing.addEventListener('change', () => {
    changeLing();
})

btnHljs.addEventListener('click', () => {
    const code = codeArea.querySelector('code');
    hljs.highlightBlock(code);
})

//icone menu
// const selectMenu = document.querySelector('.hamburguer');
// selectMenu.addEventListener('click', function(event) {
//     const menu = document.querySelector('.header__menu');
//     menu.classList.toggle('active');


//     const menuIcone = event.target;
//     menuIcone.setAttribute('class', menuIcone.classList.contains('fa-times') ? 'fas fa-bars hamburguer' : 'fas fa-times')
// })