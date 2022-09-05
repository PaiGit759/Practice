let stringBase64;
let stringStorage;
var file;
var prstr;
var listCats = 'Barcelona~1|Everest~2|Tom~3|Rafail~4|Maya~5';

function encodeImageFileAsURL(element) {
   file = element.files[0];
  var reader = new FileReader();
  reader.onloadend = function() {
    console.log(file.name, reader.result)
    stringBase64 = reader.result
    document.getElementById("foto").src = stringBase64;

  }
  reader.readAsDataURL(file);
}

function UploadFile(index = 0) {
  //  alert(file.size)
  index = document.getElementById("indexOnloadFile").value;

  stringStorage = localStorage.getItem('storedFotoValue');
  arr = stringStorage.split(' ');
  if (index >= arr.length) {
    alert("Index is outside the array")
    return
  }
       document.getElementById("foto").src = arr[index];//stringBase64;
   }

function buttonOnclickUpload(index = 2) {
stringStorage = localStorage.getItem('storedFotoValue');
arr = stringStorage.split(' ');
     document.getElementById("foto").src = arr[index];//stringBase64;
 }
 
 function buttonOnclickSave() {
  if (file.size>=100000) {
    alert("File size must not exceed 100 KB");
    return;
  }
  //localStorage.setItem('storedFotoValue',"" );

  stringStorage = localStorage.getItem('storedFotoValue') + " " + stringBase64;
  arr = stringStorage.split(' ');

  localStorage.setItem('storedFotoValue',stringStorage);
  aaa = 9;
//       document.getElementById("foto").src = stringBase64;
   }


// menu


function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {

  catId = event.target.id;



  if (catId.includes('elCat')) {
    strIndex = catId.replace('elCat','');
    alert(catId + '=' + strIndex)
  };
  
      if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }

    
function changeListMenuCat()
{ 
listMenuCat = document.getElementById("myDropdown");
listCats = localStorage.getItem('listCats');
arr = listCats.split('|');
arr.sort();
aaa = 9;
prstr = "";

/* for (arrstr of arr) {
  arr1 = arrstr.split('~');
  prstr = prstr + '<a href="#" id="elCat' + arr1[1] + '" > ' + arr1[0] + '</a>';
  aaa = 9;

} */

for (i=1; i <arr.length; i++) {
  arr1 = arr[i].split('~');
  prstr = prstr + '<a href="#" id="elCat' + arr1[1] + '" > ' + arr1[0] + '</a>';
  aaa = 9;

}

listMenuCat.innerHTML =  prstr;
aaa = 9;
}

function onclickVsubmit()
{
  
//  alert('submit!') reset() formForCats

listCats = localStorage.getItem('listCats');
catName = document.getElementById("catName").value ;
arr = listCats.split('|');
listCats = localStorage.getItem('listCats');
listCats = listCats +  '|' + catName + '~' + (arr.length);// 'Barcelona~1|Everest~2|Tom~3|Rafail~4|Maya~5';
 localStorage.setItem('listCats', listCats);
changeListMenuCat();

formForCats = document.getElementById("formForCats").reset();
document.getElementById("foto").src = "";

document.getElementById("submitButton").style = 'display: none;';
document.getElementById("onloadfile").style = 'display: none;';

}

function buttonOnclickUpAddCat() {
  document.getElementById("submitButton").style = 'display: inline-block;';
  document.getElementById("onloadfile").style = 'display: inline-block;';

}

// localStorage.setItem('listCats', listCats);
// localStorage.setItem('listCats', "");


changeListMenuCat();

// localStorage.setItem('storedValue', localStorage.getItem('storedValue') + "|" + storedValue);
  
// document.getElementById("exsamp").innerHTML = "<br><br>" + localStorage.getItem('storedValue');



//document.getElementById("fildForInput").value = localStorage.getItem('inputValueH');
//document.getElementById("fildForInput1").value = localStorage.getItem('inputValueR');

//localStorage.setItem('storedValue', "");
//aaa = document.getElementById("storedValue").innerHTML = "**********";
