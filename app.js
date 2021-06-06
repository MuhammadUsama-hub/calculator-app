var data=[];
function getNum(num)
{
    var output=document.getElementById("output");
    data.push(num);
    output.innerHTML+=num;
}
function clearResult()
{
    document.getElementById("output").innerHTML="";
     data.length=0; 
     
}
function Result()
{
    console.log(data)
     var x="";
    for(var i=0;i<data.length;i++)
    {
        x+=data[i];
    }
    document.getElementById("output").innerHTML=eval(x);
    data.length=0;
    data.push(eval(x));
}
function del()
{
    var y="";
    data.pop()
    for(var i=0;i<data.length;i++)
    {
        y+=data[i];
    }
    document.getElementById("output").innerHTML=y;
}
  

    
