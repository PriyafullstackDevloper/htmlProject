//  how to add html in js
 let currentCount = 1;
 let bricksArray = [' <div class="brick"></div>'];


 function addBrick(){
    // show number
    if(currentCount <= 12){
    currentCount++;
// use array
    bricksArray.push('<div class="brick"></div>');
    document.getElementById("right-container").innerHTML = bricksArray;
}
    document.getElementById("count").innerHTML = currentCount;
    document.getElementById("count").style.color = "#90D26D";

}

function removeBrick(){
    // zero last remove number
    if( currentCount >= 1){
    currentCount--;
    bricksArray.pop('<div class="brick"></div>');
    document.getElementById('right-container').innerHTML = bricksArray;
    
   }
    document.getElementById("count").innerHTML = currentCount;
    document.getElementById("count").style.color = "#E72929";

}
// without array