function nextStep(current, next) {
    document.getElementById(current).style.display = "none";
    document.getElementById(next).style.display = "block";
}

function approvePrescription() {
    const symptoms = document.getElementById("reviewSymptoms").value.toLowerCase();
    const weight = parseFloat(document.getElementById("weight").value);
    const patientName = document.getElementById("patientName").value;
    let medication = "No suggestion available. Consult a doctor.";

    if (symptoms.includes("fever") && symptoms.includes("chills")) {
        medication = weight > 50 ? 
            "Artemether-Lumefantrine 80/480mg (2 tablets twice daily for 3 days)" : 
            "Artemether-Lumefantrine 40/240mg (1 tablet twice daily for 3 days)";
    } 
    else if (symptoms.includes("fever") && symptoms.includes("abdominal pain") && symptoms.includes("diarrhea")) {
        medication = weight > 50 ? 
            "Ceftriaxone 1g IV daily for 5 days or Azithromycin 500mg daily for 5 days" : 
            "Ceftriaxone 500mg IV daily for 5 days or Azithromycin 250mg daily for 5 days";
    } 
    else if (symptoms.includes("severe cough") && symptoms.includes("difficulty breathing")) {
        medication = weight > 50 ? 
            "Amoxicillin 500mg three times daily for 7 days or Azithromycin 500mg daily for 3 days" : 
            "Amoxicillin 250mg three times daily for 7 days or Azithromycin 250mg daily for 3 days";
    } 
    else if (symptoms.includes("diarrhea") && symptoms.includes("vomiting") && symptoms.includes("dehydration")) {
        medication = "ORS (Oral Rehydration Salts) and Zinc tablets 20mg daily for 10 days";
    } 
    else if (symptoms.includes("headache")) {
        medication = weight > 50 ? "Ibuprofen 400mg every 8 hours as needed" : "Ibuprofen 200mg every 8 hours as needed";
    } 
    else if (symptoms.includes("stomach pain") || symptoms.includes("indigestion")) {
        medication = weight > 50 ? "Omeprazole 40mg once daily" : "Omeprazole 20mg once daily";
    } 
    else if (symptoms.includes("skin rash") || symptoms.includes("itching")) {
        medication = weight > 50 ? "Cetirizine 10mg once daily" : "Cetirizine 5mg once daily";
    } 
    else if (symptoms.includes("joint pain") && symptoms.includes("rash") && symptoms.includes("fever")) {
        medication = "Dengue or Chikungunya suspected. Consult a doctor immediately.";
    }

    document.getElementById("reviewStep").style.display = "none";
    document.getElementById("medicationStep").style.display = "block";
    document.getElementById("medicationText").innerText = medication;
    document.getElementById("patientDisplay").innerText = patientName;
}

function restart() {
    document.getElementById("goodbyeStep").style.display = "none";
    document.getElementById("loginStep").style.display = "block";
}

document.getElementById("consultationStep").addEventListener("submit", function() {
    document.getElementById("reviewPatient").innerText = document.getElementById("patientName").value;
    document.getElementById("reviewSymptoms").value = document.getElementById("symptoms").value;
});
