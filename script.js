async function searchResult() {

    const roll = document.getElementById("roll").value.trim();
    const test = document.getElementById("test").value;

    const error = document.getElementById("error");
    const result = document.getElementById("result");

    error.innerHTML = "";
    result.style.display = "none";

    if (roll === "") {
        error.innerHTML = "⚠️ कृपया Roll Number दर्ज करें";
        return;
    }

    if (test === "") {
        error.innerHTML = "⚠️ कृपया Test चुनें";
        return;
    }

    try {

        const response = await fetch("students.json");
        const students = await response.json();

        const student = students.find(
            s => s.roll == roll && s.test == test
        );

        if (!student) {
            error.innerHTML = "❌ Result नहीं मिला";
            return;
        }

        document.getElementById("studentName").innerText = student.name;
        document.getElementById("studentRoll").innerText = student.roll;
        document.getElementById("testName").innerText = student.test;

        document.getElementById("marks").innerHTML = `
        <tr>
            <td>Physics</td>
            <td>${student.physics}</td>
        </tr>

        <tr>
            <td>Chemistry</td>
            <td>${student.chemistry}</td>
        </tr>

        <tr>
            <td>Mathematics</td>
            <td>${student.mathematics}</td>
        </tr>

        <tr>
            <td>Biology</td>
            <td>${student.biology}</td>
        </tr>
        `;

        document.getElementById("total").innerText = "Result Awaited";
        document.getElementById("percentage").innerText = "Result Awaited";

        const status = document.getElementById("status");
        status.innerText = student.status;

        if (student.status === "PASS") {
            status.className = "pass";
        } else if (student.status === "FAIL") {
            status.className = "fail";
        } else {
            status.className = "awaited";
        }

        result.style.display = "block";

    } catch (e) {

        error.innerHTML = "❌ students.json लोड नहीं हो सका";

        console.log(e);

    }

}
