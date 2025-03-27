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
        medication = "Painkillers like Ibuprofen";
    } else if (symptoms.includes("stomach pain")) {
        medication = "Antacids & Hydration";
    } else if (symptoms.includes("malaria")) {
        medication = "Coartem & Plenty of Fluids";
    } else if (symptoms.includes("typhoid")) {
        medication = "Ciprofloxacin & Rehydration Therapy";
    } else if (symptoms.includes("diarrhea")) {
        medication = "ORS Solution & Loperamide";
    } else if (symptoms.includes("flu")) {
        medication = "Antihistamines & Warm Fluids";
    }

    document.getElementById("consultationStep").style.display = "none";
    document.getElementById("reviewStep").style.display = "block";
    document.getElementById("medicationText").innerText = medication;
}

function restart() {
    document.getElementById("medicationStep").style.display = "none";
    document.getElementById("loginStep").style.display = "block";
}
