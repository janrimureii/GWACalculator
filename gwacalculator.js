const prelim = parseFloat(document.getElementById("prelimGrade").value) || 0;
const midterm = parseFloat(document.getElementById("midtermGrade").value) || 0;
const prefi = parseFloat(document.getElementById("prefiGrade").value) || 0;
const finals = parseFloat(document.getElementById("finalsGrade").value) || 0;

console.log({prelim, midterm, prefi, finals});

const calcBtn = document.getElementById("CalculateGWA");
 
let displayGwa = document.getElementById("finalGwa");
let displayRemarks = document.getElementById("remarks");

calcBtn.addEventListener('click', calcfunc);

function calcfunc() {

    const gwa = parseFloat((prelim * 0.20) + (midterm * 0.20) + (prefi * 0.20) + (finals * 0.40));

    displayGwa.innerHTML=gwa;
    console.log("triggered ang function");
    
}

