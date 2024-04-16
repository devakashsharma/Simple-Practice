let button = document.getElementById("btn");

function capitalize() {
    let userName = document.getElementById("userName").value;
    let para = document.addEventListener("para");
    
    if(userName[0] >= 'A' && userName[0] <= 'Z') {
        // alert("Already Joined");
        para.innerText = "Already Joined";
    }
    else {
        // let userArray = userName.split('');
        // userArray[0] = userArray[0].toUpperCase();
        // userName = userArray.join('');
        // document.getElementById("userName").value = userName;
        // para.innerText = '';

        
    }
}

button = addEventListener("click", capitalize);


/*      let button = document.getElementById("btn");

        function capitalize(){
            let name = document.getElementById("name").value;
            let para = document.getElementById("para");
            if(name[0]>='A' && name[0]<='Z'){
                para.innerText="Already Capitalize!";
            }
            else{
                let nameArr = name.split('');
                nameArr[0]=nameArr[0].toUpperCase();
                name=nameArr.join('');
                document.getElementById("name").value = name;
                para.innerText='';
            }
        }

        button.addEventListener("click", capitalize);*/