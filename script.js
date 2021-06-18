//create Input.
const MyInput = document.createElement('input');
document.body.appendChild(MyInput);

//create Button.
const MyButton = document.createElement('button');
document.body.appendChild(MyButton);

MyButton.innerHTML = "Add";

const ul = document.createElement('ul');
document.body.appendChild(ul);


MyButton.addEventListener("click",doit);

let number =0;

const  myobject = {};

function doit(){
    number++;

    const li = document.createElement("li");
    ul.appendChild(li);

    li.innerHTML = MyInput.value;

    myobject[number] = MyInput.value;
    console.log(myobject);
    
    MyInput.value = "";

}
