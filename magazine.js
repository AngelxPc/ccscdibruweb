// Toggle visibility of magazine details
function toggleDetails(id) {
    const details = document.getElementById(id);
    details.classList.toggle('hidden');
}

// Open modal for zoomable image
function openModal(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    modal.style.display = 'flex';
    modalImage.src = imageSrc;
}

// Close modal
function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
}