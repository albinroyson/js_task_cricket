let x=document.getElementById(a);
let y=document.getElementById(b);
function add(){
    addtotal=parseInt(x.value) + parseInt(y.value)
    console.log(addtotal);
    document.getElementById("c").value=addtotal;
}