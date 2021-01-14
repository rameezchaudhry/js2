// Q.change case
//1
alert(prompt("Enter value to change in Capital letter:","apple").toUpperCase());

//2
var inputWord = prompt("Enter value to change in title case:","Word");
var titleCase = inputWord[0].toUpperCase() + inputWord.slice(1).toLowerCase();
alert(titleCase);


//Q.Strings: measuring length and extracting parts
//1
var favMobileModel = prompt("Enter favorite mobile phone model","Iphone X");
alert("The length of user input = "+favMobileModel.length);
//2
var lastChar = favMobileModel[favMobileModel.length-1]
alert("The last charachter of user input = " + lastChar);


//Q.Strings: finding segments
//1
var find = "Pakistani";
var findAlph = find.indexOf("n");
if(findAlph != -1)
{
    alert("Index number of n in Pakistan  ="+findAlph);
}

//2
var userName = prompt("Enter User name : ","w@qar" );
if(userName.indexOf("@") != -1 || userName.indexOf(".")!= -1 || userName.indexOf(",")!= -1 || userName.indexOf("!")!= -1)
{
alert("Enter a Valid User name");
}

//3
var word = "The quick brown fox jumps over the lazy dog";
var space = 0;
for(i=0;i<word.length;i++)
{
      if(word[i].indexOf(" ") != -1)
    {
        ++space;
    }
}
alert(space+1);


//Q. Strings: finding a character at a location
//1
 var  findWord = "Pakistani";
 document.write(findWord.charAt(2));


//Q. Strings: replacing characters
//1
var city = "Hyderabad";
document.write(city.replace("Hyder","Islam"));

//2 
var message = "Ali and Sami are best friends. They play cricket and football together.";
document.write(message.replace(/and/g,"&"));


//Q. Rounding numbers
//1
//a
var num =parseFloat(prompt("Enter number","3.45214"));
//b
var roundNumb = Math.round(num);
//c
var floorNumb = Math.floor(num);
//d
var ceilNumb = Math.ceil(num);
document.write("User number =" + num +"<br>");
document.write("Round number =" + roundNumb +"<br>");
document.write("floor number =" + floorNumb +"<br>");
document.write("ceil number =" + ceilNumb +"<br>");

//2
//a
var num =parseFloat(prompt("Enter number","-3.45214"));
//b
var roundNumb = Math.round(num);
//c
var floorNumb = Math.floor(num);
//d
var ceilNumb = Math.ceil(num);

document.write("User number =" + num +"<br>");
document.write("Round number =" + roundNumb +"<br>");
document.write("floor number =" + floorNumb +"<br>");
document.write("ceil number =" + ceilNumb +"<br>");

//Q. Generating random numbers
//1
var diceNumb = Math.random()*6;
var diceRound = Math.ceil(diceNumb);
document.write("Dice value = "+diceRound)

//2
var coinNum = Math.random()*2;
var toss = Math.ceil(coinNum);
if(toss == 2)
{
    document.write("Head")
}
else 
if(toss == 1)
{
    document.write("Tale")
}

//3
var userNumber= +prompt("Enter Number 1 to 10 :");
var secretNumber= Math.ceil(Math.random()*10);
console.log(secretNumber);
if(userNumber == secretNumber)
{
    alert("Congrats you enter secret number");
}
else
{
    alert("try again");
}


//Q. Converting strings to integers and decimals
//1
var weight = prompt("Enter your weight","50.22");
 document.write("a.  = "+parseInt(weight) + "<br>");
 document.write("b.  = "+parseInt(weight) + "kgs <br>");
 document.write("c.  = "+parseFloat(weight) + "kgs <br>");
 document.write("d.  = "+parseFloat(weight) + "kilogram <br>");


//Q. Converting strings to numbers, numbers to strings
//1
var valueString = "472";
var ValueNum = Number(valueString);
document.write("type = " +typeof(valueString)+"<br>");
document.write("Value = "+valueString+"<br>");
document.write("after Convert type = " +typeof(ValueNum)+"<br>");
document.write("Value = "+ValueNum+"<br>");

//2
var num = 35.36;
var numToString = num.toString();
var removeDot = numToString.replace(".","")

document.write("type = " + typeof(num) +"<br>");
document.write("Value = "+ num +"<br>");
document.write("after Convert type = " + typeof(removeDot) +"<br>");
document.write("Value = " + removeDot + "<br>");


//Q. Controlling the length of decimals
//1
var percentage = (30/45)*100;
var fixed = percentage.toFixed(2);
document.write("before fixed lenght of decimal " + percentage + "<br>")
document.write("length of decimal fixed in to 2 decimal = " + fixed);