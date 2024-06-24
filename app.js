let n = prompt("Write a Number For Multiplication Table Print");
n = parseInt(n);

if (!isNaN(n)) {
    let tableContainer = document.getElementById('table-container');
    tableContainer.innerHTML = ''; 

    for (let i = 1; i <= 10; i++) {
        let result = n * i;
        let paragraph = document.createElement('p');
        paragraph.textContent = `${n} x ${i} = ${result}`;
        tableContainer.appendChild(paragraph);
    }
} else {
    alert("Please enter a valid number.");
}
