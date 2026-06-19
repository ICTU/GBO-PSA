function downloadPDF(url) {
    if (!url) return;

    const printWindow = window.open(url, '_blank');

    if (printWindow) {
        // Wacht tot de pagina geladen is
        printWindow.onload = function() {
            // Geef browser tijd om CSS te verwerken
            setTimeout(function() {
                printWindow.print();
                printWindow.close();
            }, 500);
        };
    } else {
        alert("Pop-up geblokkeerd! Sta pop-ups toe voor deze site.");
    }
}
