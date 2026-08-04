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
`
<h2 style="text-align:center;color:#0b6efd;">AVN Coaching Center</h2>

<table style="width:100%;border-collapse:collapse;" border="1" cellpadding="8">

<tr>
<th>Student Name</th>
<td>${student.name}</td>
</tr>

<tr>
<th>Father Name</th>
<td>${student.father}</td>
</tr>

<tr>
<th>Roll Number</th>
<td>${student.roll}</td>
</tr>

<tr>
<th>Test</th>
<td>${student.test}</td>
</tr>

<tr>
<th>Physics</th>
<td>${student.physics}</td>
</tr>

<tr>
<th>Chemistry</th>
<td>${student.chemistry}</td>
</tr>

<tr>
<th>Mathematics</th>
<td>${student.mathematics}</td>
</tr>

<tr>
<th>Biology</th>
<td>${student.biology}</td>
</tr>

<tr>
<th>Status</th>
<td><b>${student.status}</b></td>
</tr>

</table>
`;

} catch (error) {

document.getElementById("result").style.display = "block";

document.getElementById("result").innerHTML = `
<h2 style="color:red;text-align:center;">
Result Load Error
</h2>
`;

}

}
