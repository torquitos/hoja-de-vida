document.getElementById("generarPDF").addEventListener("click", function () {
    let selects = document.querySelectorAll("select");
    let valid = true;

    selects.forEach(select => {
        if (select.value === "" || select.value.includes("Seleccione")) {
            valid = false;
            select.style.border = "2px solid red"; 
        } else {
            select.style.border = ""; 
        }
    });

    if (!valid) {
        alert("❌ Debes seleccionar todas las opciones antes de descargar el PDF.");
        return; 
    }

    // 
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFont("helvetica", "bold");
    doc.text("Hoja de Vida del PC", 70, 20);

    // Obtener valores del formulario
    const procesador = document.getElementById("procesador").value;
    const ram = document.getElementById("ram").value;
    const almacenamiento = document.getElementById("almacenamiento").value;
    const sistemaOperativo = document.getElementById("sistema_operativo").value;
    const tarjetaGrafica = document.getElementById("tarjeta_grafica").value;
    const nucleos = document.getElementById("nucleos").value;
    const fuentePoder = document.getElementById("fuente_poder").value;
    const placaBase = document.getElementById("placa_base").value;
    const refrigeracion = document.getElementById("refrigeracion").value;

    let y = 40;
    const espacio = 10;

    doc.setFont("helvetica", "normal");
    doc.text(`Procesador: ${procesador}`, 20, y);
    doc.text(`Memoria RAM: ${ram}`, 20, y + espacio);
    doc.text(`Almacenamiento: ${almacenamiento}`, 20, y + 2 * espacio);
    doc.text(`Sistema Operativo: ${sistemaOperativo}`, 20, y + 3 * espacio);
    doc.text(`Tarjeta Gráfica: ${tarjetaGrafica}`, 20, y + 4 * espacio);
    doc.text(`Número de Núcleos: ${nucleos}`, 20, y + 5 * espacio);
    doc.text(`Fuente de Poder: ${fuentePoder}`, 20, y + 6 * espacio);
    doc.text(`Placa Base: ${placaBase}`, 20, y + 7 * espacio);
    doc.text(`Refrigeración: ${refrigeracion}`, 20, y + 8 * espacio);

    doc.save("hoja_de_vida_pc.pdf");
});
