var stringBase64;
var stringStorage;
var file;
var prstr;
var listCats;
var storedFotoValue;
var storedDateValue;


function encodeImageFileAsURL(element) {
  file = element.files[0];
  var reader = new FileReader();
  reader.onloadend = function () {
    console.log(file.name, reader.result)
    stringBase64 = reader.result
    document.getElementById("foto").src = stringBase64;
  }
  reader.readAsDataURL(file);
}

function UploadFile(index = 0) {
  index = document.getElementById("indexOnloadFile").value;

  stringStorage = localStorage.getItem('storedFotoValue');
  arr = stringStorage.split(' ');
  if (index >= arr.length) {
    alert("Index is outside the array")
    return
  }
  document.getElementById("foto").src = arr[index];
}

function buttonOnclickUpload(index = 2) {
  stringStorage = localStorage.getItem('storedFotoValue');
  arr = stringStorage.split(' ');
  document.getElementById("foto").src = arr[index];
}

function buttonOnclickSave() {
  if (file.size >= 100000) {
    alert("File size must not exceed 100 KB");
    return;
  }
  stringStorage = localStorage.getItem('storedFotoValue') + " " + stringBase64;
  arr = stringStorage.split(' ');

  localStorage.setItem('storedFotoValue', stringStorage);
}

// menu

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {

  catId = event.target.id;

  if (catId.includes('elCat')) {
    strIndex = catId.replace('elCat', '');
     //выведем данные кошек

    listCats = localStorage.getItem('listCats');
    arr = listCats.split('|');
    arr1 = arr[strIndex].split('~');

    catName = arr1[0];
    aaa = 9;

    document.getElementById("catName").value = catName;

    storedDateValue = localStorage.getItem('storedDateValue');
    arr = storedDateValue.split('|');
    arr1 = arr[strIndex].split('~');

    document.getElementById("catDateOfBirth").value = arr1[0];
    document.getElementById("catWhere").value = arr1[1];
    document.getElementById("catBreed").value = arr1[2];
    document.getElementById("catColor").value = arr1[3];
    document.getElementById("catWeight").value = arr1[4];

    storedFotoValue = localStorage.getItem('storedFotoValue');
    arr = storedFotoValue.split(' ');
    document.getElementById("foto").src = arr[strIndex];
  };

  if (!event.target.matches('.nav_link')) {

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

function changeListMenuCat() {
  listMenuCat = document.getElementById("myDropdown");
  listCats = localStorage.getItem('listCats');
  arr = listCats.split('|');
  arr.sort();
  prstr = "";

  for (i = 1; i < arr.length; i++) {
    arr1 = arr[i].split('~');
    prstr = prstr + '<a href="#" id="elCat' + arr1[1] + '" > ' + arr1[0] + '</a>';

  }
  listMenuCat.innerHTML = prstr;
}

function onclickVsubmit() {

  //   список кошек
  listCats = localStorage.getItem('listCats');
  catName = document.getElementById("catName").value;
  arr = listCats.split('|');
  listCats = localStorage.getItem('listCats');
  listCats = listCats + '|' + catName + '~' + (arr.length);
  localStorage.setItem('listCats', listCats);
  changeListMenuCat();

  index = arr.length + 1;

  //   список данных кошек 
  storedDateValue = localStorage.getItem('storedDateValue');

  catDateOfBirth = document.getElementById("catDateOfBirth").value;
  catWhere = document.getElementById("catWhere").value;
  catBreed = document.getElementById("catBreed").value;
  catColor = document.getElementById("catColor").value;
  catWeight = document.getElementById("catWeight").value;

  storedDateValue = storedDateValue + '|' + catDateOfBirth + '~' + catWhere + '~' + catBreed + '~' + catColor + '~' + catWeight;
  localStorage.setItem('storedDateValue', storedDateValue);

  //   список фото кошек 
  if (file == undefined) {
    storedFotoValue = localStorage.getItem('storedFotoValue') + "no_foto";
    localStorage.setItem('storedFotoValue', storedFotoValue);
    formForCats = document.getElementById("formForCats").reset();
    document.getElementById("foto").src = "";

  }

  if (file.size >= 100000) {
    alert("File size must not exceed 100 KB");
  }
  else {
    storedFotoValue = localStorage.getItem('storedFotoValue') + " " + stringBase64;
    localStorage.setItem('storedFotoValue', storedFotoValue);
  }

  formForCats = document.getElementById("formForCats").reset();
  document.getElementById("foto").src = "";

  document.getElementById("submitButton").style = 'display: none;';
  document.getElementById("onloadfile").style = 'display: none;';

}

function buttonOnclickUpAddCat() {

  formForCats = document.getElementById("formForCats").reset();
  document.getElementById("submitButton").style = 'display: inline-block;';
  document.getElementById("onloadfile").style = 'display: inline-block;';
  document.getElementById("foto").src = "";
  stringBase64 = "";

}

if (localStorage.getItem('listCats') == null) {
  localStorage.setItem('listCats', "")
};

if (localStorage.getItem('storedFotoValue') == null) {
  localStorage.setItem('storedFotoValue', "")
};

if (localStorage.getItem('storedDateValue') == null) {
  localStorage.setItem('storedDateValue', "")
};

changeListMenuCat();
