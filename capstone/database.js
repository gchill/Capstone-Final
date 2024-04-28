var names = ["John","Mat","Patrick"];
var dates=["01/05","12/05","01/05"];
var times=["5","6:30","7"];
var size=["2","5","4"];
var table=[10,3,5]
function check(){
 var inputValue = document.getElementById("name_check").value;
 if (names.includes(inputValue)) {
    document.write("You do have a reservation on "+ Math.floor(Math.random()* 3) + 1 + "/"+Math.floor(Math.random()*12));
    
    document.write(" your table number is " + Math.floor(Math.random() * 10) + 1)} 
    else {
    document.write("You do not have a reservation");
}
}
function add(){
var inputValue = document.getElementById("name").value
var inputValue2 = document.getElementById("date").value
var inputValue3 = document.getElementById("time").value
var inputValue4 = document.getElementById("size").value
names.push(inputValue);
dates.push(inputValue2);
times.push(inputValue3);
size.push(inputValue4);
alert("Reservation placed")
}
function showData(){
    document.write(names)
}
function checkData(){
    
    var inputValue = document.getElementById("date").value;
    if(dates.includes(inputValue)){
       
      document.write("there are reservations on that day")
        
    }else{
        document.write("no reservations on that date")
    }

}

