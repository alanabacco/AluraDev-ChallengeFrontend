//muda cor da borda do editor
const selectColor = document.querySelector('#select-color');
const editor = document.getElementById('campo-editor');

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

//local storage
const btnSave = document.querySelector(".btn-save");
const titleProject = document.querySelector("#nome-projeto");
const descriptionProject = document.querySelector("#descricao-projeto");

btnSave.addEventListener('click', () => {
    if (typeof(Storage) !==  "undefined"){
        const project = montaProjeto();
        saveLocalStorage(project);
        //console.log(project);
    } else {
        console.log("Não suporta o localstorage");
    }
})

function montaProjeto() {
    let projeto = {
        'id': atribuiId(),
        'detalhesDoProjeto': {
            'codigo': codeArea.querySelector("code").innerText,
            'borda': selectColor.value,
            'nomeDoProjeto': titleProject.value,
            'descricaoDoProjeto': descriptionProject.value,
            'linguagem': codeLing.value
        }
    }
    return projeto;
}

let numeroId = 1;

if (localStorage.lenght > 0) {
    numeroId = localStorage.length;
}

function atribuiId() {
    if (localStorage.length == 0) {
        return 0;
    } else {
        if (localStorage.lenght == numeroId) {
            let novoId = numeroId;
            numeroId++;
            return novoId;
        }
    }
}

/*
function atribuiId() {
    return localStorage.lenght;
}*/

function saveLocalStorage(objectJson) {
    localStorage.setItem(objectJson.id, JSON.stringify(objectJson));
}

//limpar localStorage: localStorage.clear();