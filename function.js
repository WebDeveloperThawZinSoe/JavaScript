function JustDoIT(){
    console.log("This is Just Do IT");
}
JustDoIT();


function DoYourSelf(name = "Unknow"){ //parameter // default parameter
    console.log("Your name is " + name);
}
DoYourSelf("Myo Zayar Thant"); //arguments

var myFun = function(){ // anonymous function
    console.log("This is anno param");
}
myFun();

var contactFun = function(name,age){ // anonymous function with parameters
    console.log("My name is " + name);
    console.log("My age is " + age);
}
contactFun("Thaw Zin Soe",20);