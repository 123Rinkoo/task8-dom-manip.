let form=document.getElementById("addForm");
let itemlist= document.getElementById("items");
// console.log(itemlist)
form.addEventListener("submit", additem);
itemlist.addEventListener('click', removeItem);

function additem(e){
    e.preventDefault(); //intial behaviour prevent karta hai khalli ni hone deta hai.
    let newitem= document.getElementById('item').value;

    let li=document.createElement('li');
    li.className="list-group-item";
    li.appendChild(document.createTextNode(newitem));
    // console.log(li)
    itemlist.appendChild(li);
    //@@@@@@ pehle value pta krke, li bnake, then itemlist mai append kar do...
     // ...................................................
     var edit =document.createElement("button");
     edit.className="btn btn-danger btn-sm float-right delete";
     edit.appendChild(document.createTextNode("edit"));
     li.appendChild(edit);
    // ...............................................
    var delbtn=document.createElement("button");
    delbtn.className="btn btn-danger btn-sm float-right delete";
    delbtn.appendChild(document.createTextNode("X"));
    li.appendChild(delbtn);
   



}

function removeItem(e)
{
    if(e.target.classList.contains("delete")){
        if(confirm('are you sure')){
            var li=e.target.parentElement;
            itemlist.removeChild(li);
        }
    }
}

