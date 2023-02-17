 var empId = localStorage.getItem("myValue");
        //alert("The Value Received is " + empId);

        $(document).ready(function () {

            if (empId > 0) {
                fetch("http://localhost:3000/employees/" + empId).then(
                    (res) => res.json()
                ).then((response) => {
                    //console.log(response)

                    //for name 
                    document.getElementById('txtName').value = response.name;

                    //for profile image 
                    const radioProfile = document.getElementsByName("profile");
                    for (let i = 0; i < radioProfile.length; i++) {
                        if (radioProfile[i].value === response.profile) {
                            radioProfile[i].checked = true;
                            break;
                        }
                    }

                    //for gender

                    const radioGender = document.getElementsByName("gender");
                    for (let i = 0; i < radioGender.length; i++) {
                        if (radioGender[i].value === response.gender) {
                            radioGender[i].checked = true;
                            break;
                        }
                    }

                    // for checkboxes department
                    var checkboxValue = response.department;
                    //console.log(checkboxValue)
                    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
                    //console.log(checkboxes.length);
                    for (let i = 0; i < checkboxes.length; i++) {
                        //console.log(checkboxValue.includes(checkboxes[i].value));
                        if (checkboxValue.includes(checkboxes[i].value)) {
                            //console.log(checkboxes[i].value);
                            checkboxes[i].checked = true;
                        }
                    }
                    
                    //for salary

                    const selectSal = document.getElementById('salary');
                    const index = Array.from(selectSal.options).findIndex(option => option.value === response.salary)
                    selectSal.selectedIndex = index;

                    //for date

                    var date = response.startdate;
                    date = date.split("-");
                    var day = date[0];
                    var month = date[1];
                    var year = date[2];
                    //console.log(date + " " + day + " " + month + " " + year)

                    const selectDay = document.getElementById('day');
                    const indexDay = Array.from(selectDay.options).findIndex(option => option.value === day)
                    selectDay.selectedIndex = indexDay;

                    const selectMonth = document.getElementById('month');
                    const indexMonth = Array.from(selectMonth.options).findIndex(option => option.value === month)
                    selectMonth.selectedIndex = indexMonth;

                    const selectYear = document.getElementById('year');
                    const indexYear = Array.from(selectYear.options).findIndex(option => option.value === year)
                    selectYear.selectedIndex = indexYear;

                    //for notes

                    document.getElementById('txtNote').value = response.Notes;

                    //remove the user id
                    //localStorage.removeItem("myValue");
                })
            }


        });
