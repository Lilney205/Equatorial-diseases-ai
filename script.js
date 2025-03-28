function nextStep(current, next) {
    document.getElementById(current).style.display = "none";
    document.getElementById(next).style.display = "block";
}

function suggestMedication() {
    const symptoms = document.getElementById("symptoms").value.toLowerCase();
    let medication = "No recommendation available";

    const medicationDB = {
        "fever": "Paracetamol & Rest",
        "cough": "Cough Syrup & Hydration",
        "headache": "Ibuprofen",
        "stomach pain": "Antacids",
        "malaria": "Coartem",
        "typhoid": "Ciprofloxacin"
    };

    for (let key in medicationDB) {
        if (symptoms.includes(key)) {
            medication = medicationDB[key];
        }
    }

    document.getElementById("medicationText").innerText = medication;
    nextStep('consultationStep', 'doctorStep');
}

function approveMedication() {
    document.getElementById("finalMedication").innerText = document.getElementById("medicationText").innerText;
    nextStep('doctorStep', 'medicationStep');
}

function restart() {
    document.getElementById("medicationStep").style.display = "none";
    document.getElementById("loginStep").style.display = "block";
}
