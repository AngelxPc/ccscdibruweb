// Function to toggle the visibility of magazine details
function toggleDetails(id) {
    const details = document.getElementById(id); // Get the element by ID
    if (details.classList.contains('hidden')) {
        details.classList.remove('hidden'); // Show the details
    } else {
        details.classList.add('hidden'); // Hide the details
    }
}

// Function to open the modal and display the zoomable image
function openModal(imageSrc) {
    const modal = document.getElementById('imageModal'); // Get the modal element
    const modalImage = document.getElementById('modalImage'); // Get the image inside the modal
    modal.style.display = 'flex'; // Show the modal
    modalImage.src = imageSrc; // Set the source of the modal image to the clicked image
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('imageModal'); // Get the modal element
    modal.style.display = 'none'; // Hide the modal
}
