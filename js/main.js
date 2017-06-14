var keylist = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+-=';:{}[]";

var temp = '';

function passwordGenerator(x) {
    temp='';
    for(i=0; i<x; i++){
        temp+=keylist.charAt(Math.floor(Math.random()*keylist.length));
            }
        return temp;
}

function populateForm(x){
    document.randomGenerator.output.value = passwordGenerator(x);
}