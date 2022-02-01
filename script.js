document.getElementById("submit").addEventListener("click", (e) => {
    e.preventDefault();

    // Form validation
    function validate() {
        if (document.myForm.empId.value == "") {
            alert("Please provide your Employee ID!");
            document.myForm.empId.focus();
            return false;
        }
        if (document.myForm.empName.value == "") {
            alert("Please provide your Name!");
            document.myForm.empName.focus();
            return false;
        }
        if (document.myForm.PaymentMode.value == "") {
            alert("Select your Payment Mode!");
            document.myForm.PaymentMode.focus();
            return false;
        }

        if (document.myForm.Date.value == "") {
            alert("Please provide the Date!");
            document.myForm.Date.focus();
            return false;
        }
        if (document.myForm.Bill.value == "") {
            alert("Please provide your Bill Amount!");
            document.myForm.Bill.focus();
            return false;
        }
        return true;
    }

    let id = document.getElementById("id").innerText;
    let empId = document.getElementById("empID").value;
    let name = document.getElementById("name").innerText;
    let empName = document.getElementById("empname").value;
    let using = document.getElementById("using").innerText;
    let mode = document.getElementById("payment-mode").value;
    let day = document.getElementById("day").innerText;
    let date = document.getElementById("date").value;
    let amount = document.getElementById("amount").innerText;
    let bill = document.getElementById("bill").value;
    let array = [
        [id, empId],
        [name, empName],
        [using, mode],
        [day, date],
        [amount, bill],
    ];
    let expenseList = Object.fromEntries(array);
    const expenseTable = document.getElementById("expenseTable");

    function output() {
        if (validate()) {
            for (let i = 0; i < Object.keys(expenseList).length; i++) {
                expenseTable.innerHTML += `
            <tr>
                <td>${expenseList[id]}</td>
                <td>${expenseList[name]}</td>
                <td>${expenseList[using]}</td>
                <td>${expenseList[day]}</td>
                <td>$${expenseList[amount]}</td>
                <td><a class="deleteButton">Delete</td>
            </tr>
        `;

                for (let i = 0; i < expenseTable.children.length; i++) {
                    expenseTable.children[i]
                        .querySelector(".deleteButton")
                        .addEventListener("click", function () {
                            this.parentNode.parentNode.remove();
                        });
                }

                break;
            }
        } else {
            return false;
        }
    }

    output();
    function clearData() {
        document.getElementById("reset").click();
    }
    clearData();
});
