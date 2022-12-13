const ERROR_MESSAGE = '#ff3300';
const INFO_MESSAGE = '#6699ff';
const WARN_MESSAGE = '#ff9900';
const SUCCESS_MESSAGE = '#33cc33';

// Добавление строки происходит в том случае, если нет незаполненных
// значений key в строках. Пустое поле value допустимо.
function addRow() {
    if (getEmptyColKey() == 0) {
        document.getElementById('buttonclass').remove()
        document.querySelector('.table').insertAdjacentHTML('beforeend', createLine());
        document.querySelector('.table').insertAdjacentHTML('beforeend', createAddButton());
        document.getElementById('button_add').addEventListener('click', addRow)
        el = document.getElementsByClassName('button-delete')
        for(i=0; i<el.length; i++) {
            el[i].addEventListener('click', removeRow)
        }
    } else {
		showPopupMessage("Введите пару ключ-значение или ключ с пустым значением", ERROR_MESSAGE);
	}
  }

// Получение количества пустых строк по значению ключа
function getEmptyColKey() {
    el = document.getElementsByClassName('key')
    let empty = 0
    for(i=0; i<el.length; i++) {
        if (el[i].value == '') {
            empty++
        }
    }
    return empty
}

// Получение количества строк таблицы
function getNumAllCol() {
    el = document.getElementsByClassName('key')
    return el.length
}

function createLine() {
    return `<tr id='row'>
      <td class="b-no-border"><input type="text" class="table-field input key"></td>
      <td class="b-no-border"><input type="text" class="table-field input value"></td>
      <td class="b-no-border"><input type="button" class="button-delete" id="btn_delete" value="X"></td>
    </tr>`;
}

function createAddButton() {
    return `<tr id="buttonclass">
      <td class="b-no-border" colspan=2><input type="button" class="button-add" id="button_add" value="Добавить значение"></td>
    </tr>`;
}

function removeRow(e) {
    if (getNumAllCol() != 1) {
        el = document.getElementsByClassName('button-delete')
        console.log(el.length)
        e.target.parentNode.parentNode.remove()
    } else {
		showPopupMessage("Невозможно удалить", ERROR_MESSAGE);
	}
}

function showPopupMessage(text, color) {
	var x = document.getElementById("snackbar");
	x.innerHTML = text;
	x.style.background = color;
	x.className = "show";
	setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

const todo = {
    init() {
        document.querySelector('.table').insertAdjacentHTML('beforeend', createLine());
        document.querySelector('.table').insertAdjacentHTML('beforeend', createAddButton());
        document.getElementById('button_add').addEventListener('click', addRow)
        document.getElementById('btn_delete').addEventListener('click', removeRow)
        console.log('Init Success')
    }
}

todo.init();