// Filter User only Expense
let allExpenses = JSON.parse(localStorage.getItem('All Expenses'));
let filterArray = [];

allExpenses.map((expense) => {
    if (expense.userId == JSON.parse(localStorage.getItem('Current User')).userId) {
        filterArray.push(expense)
    }
})


let dashboardData = filterArray;
if (!dashboardData) {
    dashboardData = [];
}
function renderUI() {
    let dashboardTable = document.getElementById('dashboardTable');

    dashboardTable.innerHTML = ` <tr>
    <th>Id</th>
    <th>Description</th>
    <th>Amount</th>
    <th>Category</th>
    <th>Created On</th>
    <th>Actions</th>
</tr>`

    dashboardData.map((data, index) => {
        // console.log(index)
        let { id, description, amount, category, createdOn, } = data;


        let newRow = document.createElement('tr');
        dashboardTable.appendChild(newRow);

        let firstTd = document.createElement('td');
        firstTd.innerHTML = id;
        newRow.appendChild(firstTd)

        let secondTd = document.createElement('td');
        secondTd.innerHTML = description;
        newRow.appendChild(secondTd)

        let thirdTd = document.createElement('td');
        thirdTd.innerHTML = amount;
        newRow.appendChild(thirdTd)

        let fourthTd = document.createElement('td');
        fourthTd.innerHTML = category;
        newRow.appendChild(fourthTd)

        let fifthTd = document.createElement('td');
        fifthTd.innerHTML = createdOn;
        newRow.appendChild(fifthTd)

        let sixthTd = document.createElement('td');
        // sixthTd.innerHTML = 1234;
        newRow.appendChild(sixthTd)

        let editBtn = document.createElement('span');
        editBtn.classList.add('iconBtn')
        editBtn.innerHTML = '<i class="far fa-edit"></i>';
        sixthTd.appendChild(editBtn)
        editBtn.onclick = () => {
            editItem(data);
        }

        let dltBtn = document.createElement('span');
        dltBtn.classList.add('iconBtn')
        dltBtn.innerHTML = '<i class="far fa-trash-alt"></i>';
        sixthTd.appendChild(dltBtn)
        dltBtn.onclick = () => {
            dltItem(data)
        }
    });
}

function editItem(row) {
    localStorage.setItem('objToEdit', JSON.stringify(row));
    localStorage.setItem('currentProcess', 'edit');
    redirect('addExpense')

}

function dltItem(row) {
    console.log(row);
    let index = dashboardData.indexOf(row);
    if (index > -1) {
        console.log(dashboardData);
        dashboardData.splice(index, 1);
        localStorage.setItem("All Expenses", JSON.stringify(dashboardData))
        console.log(dashboardData);
        renderUI()
    }

}



// Welcome Name Print
WelcomeName('welElement')


// Search by Category
let search = () => {
    // Declare variables
    let input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("dashboardTable");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}