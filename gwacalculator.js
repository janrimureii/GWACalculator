const calcBtn = document.getElementById("CalculateGWA");
 
let displayGwa = document.getElementById("finalGwa");
let displayRemarks = document.getElementById("remarks");

calcBtn.addEventListener('click', calcfunc);

function calcfunc() {
    const prelim = parseFloat(document.getElementById("prelimGrade").value) || 0;
    const midterm = parseFloat(document.getElementById("midtermGrade").value) || 0;
    const prefi = parseFloat(document.getElementById("prefiGrade").value) || 0;
    const finals = parseFloat(document.getElementById("finalsGrade").value) || 0;


    const gwa = parseFloat((prelim * 0.20) + (midterm * 0.20) + (prefi * 0.20) + (finals * 0.40));

    displayGwa.innerHTML=`Average: ${gwa.toFixed(2)}`;
    console.log("triggered ang function");
    
    if (gwa >= 95.50) {
        displayRemarks.innerHTML=`Remarks: 1.00 Excellent!`;
    }
    else if (gwa >= 94.50) {
        displayRemarks.innerHTML=`Remarks: 1.25 Very Good!`;
    }
    else if(gwa >= 91.50) {
        displayRemarks.innerHTML=`Remarks: 1.50 Very Good!`;
    }
    else if(gwa >= 88.50) {
        displayRemarks.innerHTML="Remarks: 1.75 Very Good!";
    }
    else if(gwa >= 85.50) {
        displayRemarks.innerHTML="Remarks: 2.00 Satisfactory";
    }
    else if(gwa >= 81.50) {
        displayRemarks.innerHTML="Remarks: 2.25 Satisfactory";
    }
    else if(gwa >= 77.50) {
        displayRemarks.innerHTML="Remarks: 2.50 Satisfactory";
    }
    else if(gwa >= 73.50) {
        displayRemarks.innerHTML="Remarks: 2.75 Fair";
    }
    else if(gwa >= 69.50) {
        displayRemarks.innerHTML="Remarks: 3.00 Fair";
    }
    else {
        displayRemarks.innerHTML="Remarks: 5.00 Failed";
    }
}

