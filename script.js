document.getElementById("generarPDF").addEventListener("click", function () {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Agregar imagen
    const img = new Image();
    img.src = "blan y negro.png"; // Verifica que el nombre sea correcto
    img.onload = function () {
        doc.addImage(img, "PNG", 10, 10, 50, 50); // (imagen, formato, x, y, ancho, alto)

        // Agregar título
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

        // Agregar texto al PDF
        doc.setFont("helvetica", "normal");
        let y = 70; // Posición inicial en el eje Y
        const espacio = 10; // Espacio entre líneas

        doc.text(`Procesador: ${procesador}`, 20, y);
        doc.text(`Memoria RAM: ${ram}`, 20, y + espacio);
        doc.text(`Almacenamiento: ${almacenamiento}`, 20, y + 2 * espacio);
        doc.text(`Sistema Operativo: ${sistemaOperativo}`, 20, y + 3 * espacio);
        doc.text(`Tarjeta Gráfica: ${tarjetaGrafica}`, 20, y + 4 * espacio);
        doc.text(`Número de Núcleos: ${nucleos}`, 20, y + 5 * espacio);
        doc.text(`Fuente de Poder: ${fuentePoder}`, 20, y + 6 * espacio);
        doc.text(`Placa Base: ${placaBase}`, 20, y + 7 * espacio);
        doc.text(`Refrigeración: ${refrigeracion}`, 20, y + 8 * espacio);

        // Guardar PDF
        doc.save("hoja_de_vida_pc.pdf");
    };
});
