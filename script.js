function displayInfo() {
    const name = document.getElementById("name").value;
    const sex = document.getElementById("sex").value;
    const dob = document.getElementById("dob").value;
    const pob = document.getElementById("pob").value;
    const tel = document.getElementById("tel").value;
    const facebook = document.getElementById("facebook").value;

    const infoDiv = document.getElementById("info");
    infoDiv.innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Sex:</strong> ${sex}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Place of Birth:</strong> ${pob}</p>
        <p><strong>Telephone:</strong> ${tel}</p>
        <p><strong>Facebook:</strong> <a href="${facebook}" target="_blank">${facebook}</a></p>
    `;
}
