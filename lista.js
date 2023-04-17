const nameList = ["Aline","Otavio","Camila","Nareba","Jean","Julio","Julio Rodalo","Rany","TI"]

var num_select = -1;


const listE1 = document.getElementById("list");
const searchField = document.getElementById("searchField");
const adicionar = document.getElementById("btAdd");
const filtrar = document.getElementById("btFilter");
const remover = document.getElementById("btRemove");
const selecionar = document.getElementById("btSelect");



filllist()
function filllist(list = nameList){
    listE1.innerHTML = "";
    for(let i=0; i< list.length; i++){

        let listItens = document.createElement("li");

        if (num_select == i){
            listItens.className = "alert alert-dark";
        } else{
            listItens.className = "";
        }
        listItens.innerHTML = list[i];
        listE1.appendChild(listItens);
    }
}


function inputHandler(){
    const filteredList = nameList.filter(e1 => {
        const listItens = e1.toLowerCase();
        const searchWord = searchField.value.toLowerCase();
        return listItens.includes(searchWord)
    })
    filllist(filteredList);
}
function adicionarnome(){
    if(searchField.value === ""){
        alert("Espaço vazio")
    }else{
        nameList.push(searchField.value);
        filllist()
        alert("Nome adicionado")
    }

}

function removernome(){
    
   
    nome = nameList[num_select ];

    nameList.splice(num_select , 1);
    alert ("Nome Removido")

    inputHandler();
}

function seleciona(){

    if (nameList.length == num_select){
        num_select = 0;
    } else{

    num_select += 1;

    }

    inputHandler();




}
    





filtrar.addEventListener("click",inputHandler);
adicionar.addEventListener("click",adicionarnome);
remover.addEventListener("click",removernome);
selecionar.addEventListener("click",seleciona);