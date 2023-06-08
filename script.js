let lists = document.getElementsByClassName('list');
let rightBox = document.getElementById('right');
let leftBox = document.getElementById('left');
let messageBox = document.getElementById('message');


// Function to handle drag and drop functionality
function DragandDrop() {
    for (list of lists) {
        list.addEventListener("dragstart", function (e) {
            let selected = e.target;

            // Allow dropping in the right container
            rightBox.addEventListener("dragover", function (e) {
                e.preventDefault();
            });

            // Handle dropping of items in the right container
            rightBox.addEventListener("drop", function (e) {
                rightBox.appendChild(selected);
                selected = null;
                showMessage("Item dropped successfully!");
            });
        });
    }
}
DragandDrop();

// Store the initial content of the left container
let initialLeftBoxContent = leftBox.innerHTML;

// Function to reset the containers to their initial state
function reset() {
    rightBox.innerHTML = '';
    leftBox.innerHTML = initialLeftBoxContent;
    showMessage("Reset complete!");
    DragandDrop();
}


// Function to display a message on the UI
function showMessage(text) {
    messageBox.innerHTML = text;
    messageBox.style.display = 'block';
    setTimeout(function () {
        messageBox.innerHTML = '';
        messageBox.style.display = 'none';
    }, 2000);
}