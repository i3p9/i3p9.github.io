var quotes = ["Eat everyday - Me", 
"Sleep is needed - Also me", 
"Hello there - Me", 
"Always give up if you can not solve stuff - Also me", 
"I like you - ME"
];

function newQuote(){
var random = Math.floor(Math.random() * (quotes.length));
document.getElementById('randomQuote').innerHTML = quotes[random];
}

function toBlue(){
    document.getElementById("container").className = "blue"
}
function toYellow(){
    document.getElementById("container").className = "yellow"
}
function toGreen(){
    document.getElementById("container").className = "green"
}
function toOrange(){
    document.getElementById("container").className = "orange"
}

function convert(){
    var valueinput=document.getElementById("valueinput").value;
    var x = document.getElementById("choice");
    var i = x.selectedIndex;
    var option=x.options[i].text;
    if(option=="poundtokg") {
        document.getElementById("outputbox").innerHTML = valueinput/ 2.205 +" Kilograms";
    } else{
        document.getElementById("outputbox").innerHTML=valueinput*2.205+ " Pounds";
    }
}

function numberplay(){
    var nums=document.getElementById("numinput");
    nums=nums.value.split(",");
    var sumofnums=0;
    for(i=0; i<nums.length; i++){
        sumofnums+=parseInt(nums[i]);
    }
    var mean=sumofnums/nums.length;
    var maximum=Math.max.apply(Math,nums);
    var minimum=Math.min.apply(Math,nums);
    document.getElementById("maxout").innerHTML=maximum;
    document.getElementById("minout").innerHTML=minimum;
    document.getElementById("sumout").innerHTML=sumofnums;
    document.getElementById("avgout").innerHTML=mean;
    document.getElementById("reverseout").innerHTML=nums.reverse();
}

function clearall(){
    document.getElementById("textbox").value="";
}

function caseconvert(){
    var textdata=document.getElementById("textbox").value;
    if(textdata==textdata.toUpperCase()) {
        document.getElementById("textbox").value=textdata.toLowerCase();
    } else {
        document.getElementById("textbox").value=textdata.toUpperCase();
    }
}

function sorttext(){
    var textdata=document.getElementById("textbox").value.split("\n");
    textdata.sort();
    textdatanew="";
    for(i=0; i<textdata.length; i++) {
        if(textdata[i]!=""){
            textdatanew=textdatanew+textdata[i]+"\n";
        }
    }
    document.getElementById("textbox").value=textdatanew;
}

function reversetext() {
    var textdata=document.getElementById("textbox").value.split("\n");
    textdata.reverse();
    textdatanew="";

    for(i=0; i<textdata.length; i++) {
        if(textdata[i]!=""){
            textdatanew=textdatanew+textdata[i]+"\n";
        }
    }
    document.getElementById("textbox").value=textdatanew;
}

function addNumber() {
    var textdata=document.getElementById("textbox").value.split("\n");
    textdatanew="";
    for(i=0; i<textdata.length; i++) {
        textdatanew=textdatanew+(i+2)+" "+textdata[i*1]+"\n";
    }
    document.getElementById("textbox").value=textdatanew;
}

function shuffle() {
    var textdata=document.getElementById("textbox").value.split("\n");
    textdatanew="";
    var j, x, i;
    for (i = textdata.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = textdata[i];
        textdata[i] = textdata[j];
        textdata[j] = x;
    }
    for(i=0; i<textdata.length; i++) {
        if(textdata[i]!=""){
            textdatanew=textdatanew+textdata[i]+"\n";
        }
    }
    document.getElementById("textbox").value=textdatanew;
}