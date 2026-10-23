/**
 * Project BHUMI - Interactive Script
 * SIES Graduate School of Technology
 */

document.addEventListener('DOMContentLoaded', () => {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-message');
  const btnRepo = document.getElementById('btn-repo');
  const btnDeploy = document.getElementById('btn-deploy');

  let toastTimeout;

  /**
   * Displays a temporary notification toast at the bottom of the screen
   * @param {string} message - The text message to display
   */
  function showToast(message) {
    if (!toast || !toastMsg) return;

    // Clear existing timer if triggered consecutively
    clearTimeout(toastTimeout);

    toastMsg.textContent = message;
    toast.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-2');
    toast.classList.add('opacity-100', 'translate-y-0');

    // Hide toast after 3 seconds
    toastTimeout = setTimeout(() => {
      toast.classList.remove('opacity-100', 'translate-y-0');
      toast.classList.add('opacity-0', 'pointer-events-none', 'translate-y-2');
    }, 3000);
  }

  // Repository Button Event Listener
  if (btnRepo) {
    btnRepo.addEventListener('click', () => {
      showToast('Redirecting to Project BHUMI GitHub Repository...');
    });
  }

  // Deployment Button Event Listener
  if (btnDeploy) {
    btnDeploy.addEventListener('click', () => {
      showToast('Launching BHUMI Web App on Render...');
    });
  }
});
