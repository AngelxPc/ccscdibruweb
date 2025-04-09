// Function to toggle student details
function showDetails(id) {
    const details = document.getElementById(id);
    if (details.classList.contains('hidden')) {
        details.classList.remove('hidden');
    } else {
        details.classList.add('hidden');
    }
}

// Function to open modal for zoomable image
function openModal(imageSrc) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-btn" onclick="closeModal()">&times;</span>
            <img src="${imageSrc}" alt="Student Photo" class="modal-image">
        </div>
    `;
    document.body.appendChild(modal);
}

// Function to close modal
function closeModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
    }
}
