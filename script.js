

// Scroll Down Button
const scrollButton = document.getElementById('scroll-btn');

// Add click event listener for smooth scroll
scrollButton.addEventListener('click', () => {
  // Scroll smoothly to the video section
  const videoSection = document.getElementById('video-section');
  videoSection.scrollIntoView({ behavior: 'smooth' });
});

// Disable Right-Click (Context Menu)
document.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  alert('Right-click is disabled on this website.');
});

// Disable Key Combinations for Inspect Element (F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U)
document.addEventListener('keydown', (e) => {
  // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
  if (
    e.key === 'F12' || 
    (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) || 
    (e.ctrlKey && e.key === 'U')
  ) {
    e.preventDefault();
    alert('Inspecting is disabled on this website.');
  }
});
