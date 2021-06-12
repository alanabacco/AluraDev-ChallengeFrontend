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


//menu-responsive
let checkResponsive = document.getElementById('check-responsive')
checkResponsive.addEventListener('click', () => {
    if(checkResponsive.checked) {
        console.log('Clicou');
        let menu = document.getElementById('menu');
        //menu.classList.add('menu-responsive')
        menu.style.right = '0';
    }
    else {
        //menu.classList.remove('menu-responsive');
        menu.style.right = '-100%';
    }
})