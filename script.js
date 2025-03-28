function nextStep(current, next) {
    document.getElementById(current).style.display = "none";
    document.getElementById(next).style.display = "block";
}

function suggestMedication() {
    const symptoms = document.getElementById("symptoms").value.toLowerCase();
    let medication = "No suggestion available";

    if (symptoms.includes("fever") || symptoms.includes("cough")) {
        medication = "Paracetamol & Rest";
    } else if (symptoms.includes("headache")) {
        medication = "Ibuprofen or Paracetamol";
    } else if (symptoms.includes("stomach pain")) {
        medication = "Antacids & Hydration";
    } else if (symptoms.includes("malaria")) {
        medication = "Coartem & Fluids";
    } else if (symptoms.includes("typhoid")) {
        medication = "Ciprofloxacin & Rest";
    }

    document.getElementById("consultationStep").style.display = "none";
    document.getElementById("approvalStep").style.display = "block";
    document.getElementById("medicationText").innerText = medication;
}

function restart() {
    document.getElementById("medicationStep").style.display = "none";
    document.getElementById("loginStep").style.display = "block";
}
