document.addEventListener("DOMContentLoaded", function() {
    const ativarQrCode = document.getElementById('ativarQrCode');
    const avisoQRCode = document.getElementById('avisoQRCode');

    ativarQrCode.addEventListener('change', function() {
        if (this.checked) {
            avisoQRCode.style.display = "block";
        } else {
            avisoQRCode.style.display = "none";
        }
    });
});