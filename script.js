document.getElementById('prospectForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Capturamos solo Nombre y Teléfono
    const nombre = this.querySelector('input[type="text"]').value;
    const whatsapp = this.querySelector('input[type="tel"]').value;

    const btn = this.querySelector('.btn-submit');
    const originalText = btn.innerText;
    btn.innerText = "PROCESANDO...";
    btn.disabled = true;

    setTimeout(() => {
        // Mostramos el modal de éxito con el nombre
        document.getElementById('userName').innerText = nombre;
        document.getElementById('successModal').style.display = 'flex';

        // CONFIGURACIÓN DEL MENSAJE SIMPLIFICADO
        const miNumero = "529511271872"; 
        const mensajeWA = `Hola Castores Sport Center, soy ${nombre}. Estoy interesado en integrarme al club y me gustaría que me den más información. ¿Cuándo puedo agendar mi cita?`;
        
        const url = `https://wa.me/${9511271872}?text=${encodeURIComponent(mensajeWA)}`;

        // Redirigir a WhatsApp tras 2 segundos
        setTimeout(() => {
            window.open(url, '_blank');
        }, 2000);

        // Resetear formulario
        btn.innerText = originalText;
        btn.disabled = false;
        this.reset();
    }, 1500);
});

// Función para cerrar el modal (esta va fuera del DOMContentLoaded)
function closeModal() {
    document.getElementById('successModal').style.display = 'none';
}

// Contador (Mantener tu lógica actual abajo)
document.addEventListener('DOMContentLoaded', () => {
    // ... aquí pega tu función de updateCountdown que ya tenías ...
});
document.addEventListener('DOMContentLoaded', () => {
    
    function updateCountdown() {
        const targetDate = new Date("March 6, 2026 00:00:00").getTime();
        const now = new Date().getTime();
        const gap = targetDate - now;

        // Si la fecha ya pasó, detenemos el contador
        if (gap < 0) {
            const container = document.querySelector('.countdown-container');
            if(container) container.innerHTML = "<h3>¡YA ESTAMOS ABIERTOS!</h3>";
            return;
        }

        const second = 1000, minute = second * 60, hour = minute * 60, day = hour * 24;

        // Verificamos que los elementos existan antes de asignarles valor para evitar errores
        const d = document.getElementById("days");
        const h = document.getElementById("hours");  
        const m = document.getElementById("minutes");
        const s = document.getElementById("seconds");

        if (d && h && m && s) {
            d.innerText = Math.floor(gap / day);
            h.innerText = Math.floor((gap % day) / hour);
            m.innerText = Math.floor((gap % hour) / minute);
            s.innerText = Math.floor((gap % minute) / second);
        }
    }

    // Ejecutar inmediatamente para que no aparezca en "00" al cargar
    updateCountdown(); 
    // Actualizar cada segundo
    setInterval(updateCountdown, 1000);
});

// Esta función debe quedar fuera del DOMContentLoaded para que el botón del HTML la encuentre
function closeModal() {
    document.getElementById('successModal').style.display = 'none';
}