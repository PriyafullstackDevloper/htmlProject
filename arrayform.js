
        function entryFunction() {
            document.getElementById("entry").hidden = false;
            document.getElementById("list").hidden = true;
        }

        function listFunction(){
            document.getElementById("list").hidden = false;
            document.getElementById("entry").hidden = true;
        } 

        // local scope 
        // array to store student data
        let studentArray = ['<div id="list">'];
        // count for no of student
        let currentCount = 1;
        
        // function to add new student
        function addStudent(){
            if(currentCount <= 8){
                currentCount++;
                // use array
                studentArray.push('<div id="list">');
             
                document.getElementById("addData").innerHTML= studentArray;
            
            }
            console.log(currentCount)
            document.getElementById("list").innerHTML = currentCount;

            

        }
        window.onload = function (){
        entryFunction();
        }
