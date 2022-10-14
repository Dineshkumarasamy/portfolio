const classForm = document.querySelector("#classform");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const lists = document.querySelector(".lists");

classForm.addEventListener("submit" , onSubmit);

function onSubmit(e){
    e.preventDefault();
    //console.log(nameInput.value);
    if(nameInput.value === "" || emailInput.value === ""){
        /*msg.classList.add("error");
        msg.innerHTML = "Please Enter all fields";
        setTimeout(() => msg.remove(),2000);*/
        alert("enter details");
    }else {
        /*msg.classList.add("success");
        msg.innerHTML = "Thanks for signing up";
        setTimeout(() => msg.remove(),2000);*/
        alert("Success");
    }

    /*const li = document.createElement('li');
        li.appendChild(document.
            createTextNode(`${nameInput.value}: ${emailInput.value}`))

            lists.appendChild(li);

            // clearing fields on submit
            nameInput.value = '';
            emailInput.value = '';*/

}