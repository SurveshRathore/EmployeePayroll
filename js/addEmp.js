function getOption(tagname) {
            selectElement = document.querySelector(tagname);
            output = selectElement.value;
            return output;

        }
        function displayRadioValue(tagname) {
            var ele = document.getElementsByName(tagname);
            for (i = 0; i < ele.length; i++) {
                if (ele[i].checked)
                    return ele[i].value;
            }
        }

function addEmployee() {
            const name = document.getElementById('txtName');
            const profileImage = displayRadioValue('profile');
            const gender = displayRadioValue('gender');
            const department = displayRadioValue('department');
            const salary = getOption('#salary');
            const day = getOption('#day');
            const month = getOption('#month');
            const year = getOption('#year');
            const notes = document.getElementById('txtNote');
            const date = day + '-' + month + '-' + year;

            // alert(`${name.value} ${profileImage.value} ${gender}  ${salary} ${notes.value}`);
            //alert(`${name.value} ${profileImage} ${gender} ${department} ${salary} ${date}`);

            const form = {
                "name": name.value,
                "profile": profileImage,
                "gender": gender,
                "department": department,
                "salary": salary,
                "startdate": date,
                "Notes": notes.value
            }

            console.log(JSON.stringify(form));

            $.ajax({

                type: 'POST',
                url: 'http://localhost:3000/employees/',
                dataType: 'json',
                contentType: 'application/json',
                data: JSON.stringify(form),
                processData: false,

                success: function (res) {
                    console.log(res)

                },
                error: function (err) {
                    console.log(err)
                }
                // dataType: 'json',
                // data: formToJson($("form")),
                // contentType: 'application/json;charset=UTF-8',
                // success: function (res) {
                //     console.log(res)

                // },
                // error: function (err) {
                //     console.log(err)
                // }
            });

            //move to display the table
            window.location.href = "../templates/payrolldetail.html";
            

        }
