document.getElementById('download-pdf').addEventListener('click', function() {
    const pdf = new jsPDF('p', 'mm', 'a4');
    pdf.setFont('Arial'); // Use Arial font
    pdf.setFontSize(12);

    const content = document.getElementById('content');
    const lines = pdf.splitTextToSize(content.innerText, 190); // Split content to fit A4 width
    const pageHeight = 295; // A4 height in mm
    const margin = 10; // Margin from the top
    let yPosition = margin; // Start position

    for (let i = 0; i < lines.length; i++) {
        if (yPosition + 6 > pageHeight - margin) {
            pdf.addPage(); // Add new page
            yPosition = margin; // Reset Y position for the new page
        }
        pdf.text(lines[i], margin, yPosition); // Add text line
        yPosition += 6; // Line height
    }

    // Check and remove the last empty page
    const totalPages = pdf.internal.getNumberOfPages();
    if (yPosition === margin && totalPages > 1) {
        pdf.deletePage(totalPages); // Remove the last empty page
    }

    // Save the PDF
    pdf.save('download.pdf');
});
