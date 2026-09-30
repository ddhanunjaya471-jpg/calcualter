let input = document.querySelector(".dis")


function addvalue(value){
    input.value += value
}
function allclear(){
    input.value = ""
}
function oneclear(){
    input.value = (input.value).slice(0,-1)
}
function add(){
    input.value = eval(input.value)
}