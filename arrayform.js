 // count for no of student
 let currentCount = 1;
 // array to store student data
 let student = [];
        

//  entry function
        function entryFunction() {
            document.getElementById("entry").hidden = false;
            document.getElementById("list").hidden = true;
        }
       
// data show

        function inputData(){
            console.log("inputData");
            currentCount++;
            let output;


            let information = {};
            information["firstName"] = document.getElementById("first-name").value;
            information["lastName"] = document.getElementById("last-name").value;
            information["contactNo"] = Number(document.getElementById("contact-no").value);
            information["dob"] = Number(document.getElementById("dob").value);
            information["address"] = document.getElementById("address").value;
            information["rollNo"] = document.getElementById("roll-No").value;
            information["email"] = document.getElementById("email").value;
            information["age"] = document.getElementById("age").value;


            student.push(i);
            console.log(studentArray,information);
            document.getElementById("data").innerHTML = output;


            for (let i = 0; i < student.length; i++) {
                let output = student[i];
    
    
                // student.push( '<tr></tr>');
                console.log("student entry", student, information);
    
    
    
                document.getElementById("create-table").innerHTML = student,information ;

        }
    }
        function listFunction(){
            document.getElementById("list").hidden = false;
            document.getElementById("entry").hidden = true;

            // for(i=0,i < studentArray.length; i++) {
            //     let output = studentArray[i];


            // }
        } 

     
        window.onload = function (){
        entryFunction();
        }
