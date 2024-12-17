const dobInput = document.getElementById("dob");
const calculateBtn = document.getElementById("calculate-btn");
const resultDiv = document.getElementById("result");

calculateBtn.addEventListener("click", function() {
    const dobValue = dobInput.value;

    if (!dobValue) {
        resultDiv.innerHTML = 'Please enter your date of birth.';
        return;
    }

    const dob = new Date(dobValue);
    if (isNaN(dob)) {
        resultDiv.innerHTML = 'Invalid date format. Please enter a valid date.';
        return;
    }

    const ageInMs = Date.now() - dob.getTime();
    const ageDate = new Date(ageInMs);
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);
    

    resultDiv.innerHTML = `Your age is ${age} years.`;
});
