let lists = document.getElementsByClassName('list');
let rightBox = document.getElementById('right');
let leftBox = document.getElementById('left');
let messageBox = document.getElementById('message');

function DragandDrop() {
    for (list of lists) {
        list.addEventListener("dragstart", function (e) {
            let selected = e.target;

            rightBox.addEventListener("dragover", function (e) {
                e.preventDefault();
            });
            rightBox.addEventListener("drop", function (e) {
                rightBox.appendChild(selected);
                selected = null;
                showMessage("Item dropped successfully!");
            });
        });
    }
}
DragandDrop();

let initialLeftBoxContent = leftBox.innerHTML;

function reset() {
    rightBox.innerHTML = '';
    leftBox.innerHTML = initialLeftBoxContent;
    showMessage("Reset complete!");
    DragandDrop();
}

function showMessage(text) {
    messageBox.innerHTML = text;
    messageBox.style.display = 'block';
    setTimeout(function () {
        messageBox.innerHTML = '';
        messageBox.style.display = 'none';
    }, 2000);
}