function addNewWEField() {
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");

    let weOb = document.getElementById("we");
    let weAddbuttonOb = document.getElementById("weAddButtton");

    weOb.insertBefore(newNode, weAddbuttonOb);
}
function addNewEQField() {
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");

    let eqOb = document.getElementById("eq");
    let eqAddbuttonOb = document.getElementById("eqAddbutton");

    eqOb.insertBefore(newNode, eqAddbuttonOb);
}
function addNewSKField() {
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("skField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");

    let skOb = document.getElementById("sk");
    let skAddbuttonOb = document.getElementById("skAddbutton");

    skOb.insertBefore(newNode, skAddbuttonOb);
}

function generateCV(){
    let nameField = document.getElementById("nameField").value;
    let nameT2 = document.getElementById("nameT1");
    nameT1.innerHTML = nameField;
    document.getElementById('nameT2').innerHTML=nameField;

    document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;

    document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;

    document.getElementById("gT").innerHTML=document.getElementById("gmailField").value;

    document.getElementById("giT").innerHTML=document.getElementById("githubField").value;

    document.getElementById("lT").innerHTML=document.getElementById("linkedInField").value;

    document.getElementById("iT").innerHTML=document.getElementById("instaField").value;

    document.getElementById("interestsT").innerHTML=document.getElementById("interestField").value;

    document.getElementById("profileT").innerHTML=document.getElementById("profileField").value;



    let wes=document.getElementsByClassName("weField");
    let str = '';
    for (let e of wes)
    {
        str=str + '<li> Niantic Data Scientist Intern Seattle, WA April 2022 - December 2022</li>';
        str=str + '<li> Seattle University Tutor Center Statistics and Mathematics Tutor Seattle, WA | April 2020 - April 2022</li>';


    }
    document.getElementById("weT").innerHTML=str;

    let eds=document.getElementsByClassName("eqField");
    let str1 = '';
    for (let e of eds)
    {
        str1 += '<li> Masters Degree in Computer Science  Los Angeles, California </li>';
        

    }
    document.getElementById("educationT").innerHTML=str1;

    let sks=document.getElementsByClassName("skField");
    let str2 = '';
    for(let a of sks)
    {
        str2=str2+ '<li> Regression Analysis </li>';
        str2=str2+ '<li> Machine Learning  </li>';
        str2=str2+ '<li> Python </li>';

    }
    document.getElementById("skT").innerHTML=str2;

    let file=document.getElementById("imgField").files[0]

    console.log(file);

    let reader=new FileReader();

    reader.readAsDataURL(file);

    console.log(reader.result);

    reader.onloadend=function(){
        document.getElementById('imgTemplate').src = reader.result;
    };

    

    document.getElementById("cv-form").style.display="none";
    document.getElementById("cv-template").style.display="block";
}
function printCV()
{
    window.print();

}


