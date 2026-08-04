function searchResult(){

let roll=document.getElementById("roll").value;

if(roll==""){
alert("Please Enter Roll Number");
return;
}

document.getElementById("result").style.display="block";

document.getElementById("result").innerHTML=`
<h2>AVN Coaching Center</h2>

<table>

<tr><th>Student</th><td>Demo Student</td></tr>

<tr><th>Roll No.</th><td>${roll}</td></tr>

<tr><th>Physics</th><td>Result Awaited</td></tr>

<tr><th>Chemistry</th><td>Result Awaited</td></tr>

<tr><th>Mathematics</th><td>Result Awaited</td></tr>

<tr><th>Biology</th><td>Result Awaited</td></tr>

<tr><th>Status</th><td>Result Awaited</td></tr>

</table>
`;
}
