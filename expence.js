
let addbtn=document.getElementById('addexpense');

addbtn.addEventListener('click',adddata);

function adddata(){
   let data;
    let amount=document.getElementById('amount').value;
    let description=document.getElementById('description').value;
    let category=document.getElementById('choosecategory').value;

    if(localStorage.getItem('data')==null){
        data=[];
   }
   else{
       data=JSON.parse(localStorage.getItem('data'));
   }

   data.push({
     amount,
      description,
     category,
   });

    localStorage.setItem("data",JSON.stringify(data));
    showdata();
    document.getElementById('amount').value='';
    document.getElementById('description').value='';
    document.getElementById('choosecategory').value='';


}


function showdata(){
    let data;
    if(localStorage.getItem('data')==null){
         data=[];
    }
    else{
        data=JSON.parse(localStorage.getItem('data'));
    }

    let html='';
    data.forEach(function(element,index) {
        html+=`<ul>
        <li> ${element.amount}
         ${element.description}
        ${element.category}
        
        <button  onclick="deleteData('${index}')" class="btn btn-danger">Delete</button>
               <button id="update" onclick="editData('${index}')"  class="btn btn-secondary">Edit</button>
        
        </li></ul>`
        
    });
    document.getElementById('itemlist').innerHTML=html;
 
}

document.onload=showdata();


function deleteData(index){
    let data;
    if(localStorage.getItem('data')==null){
         data=[];
    }
    else{
        data=JSON.parse(localStorage.getItem('data'));
    }

    data.splice(index,1);
    
    localStorage.setItem("data",JSON.stringify(data));
    showdata();
}


function editData(index){
    document.getElementById('addexpense').style.display='none';
    document.getElementById('Updatedetail').style.display='block';
    let data;
    if(localStorage.getItem('data')==null){
         data=[];
    }
    else{
        data=JSON.parse(localStorage.getItem('data'));
    }

    document.getElementById('amount').value=data[index].amount;
    document.getElementById('description').value=data[index].description;
    document.getElementById('choosecategory').value=data[index].category;

    document.querySelector('#Updatedetail').onclick=function(){
        
        data[index].amount=document.getElementById('amount').value;
        data[index].description=document.getElementById('description').value;
        data[index].category=document.getElementById('choosecategory').value;
        localStorage.setItem("data",JSON.stringify(data));
        showdata();
        document.getElementById('amount').value='';
        document.getElementById('description').value='';
        document.getElementById('choosecategory').value='';

        document.getElementById('addexpense').style.display='block';
        document.getElementById('Updatedetail').style.display='none';

    }
    
   
}