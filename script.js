document.addEventListener('DOMContentLoaded', () => {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-message');
  const btnRepo = document.getElementById('btn-repo');
  const btnDeploy = document.getElementById('btn-deploy');

  let toastTimeout;

  function showToast(message) {
    if (!toast || !toastMsg) return;
    clearTimeout(toastTimeout);
    toastMsg.textContent = message;
    toast.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-2');
    toast.classList.add('opacity-100', 'translate-y-0');

    toastTimeout = setTimeout(() => {
      toast.classList.remove('opacity-100', 'translate-y-0');
      toast.classList.add('opacity-0', 'pointer-events-none', 'translate-y-2');
    }, 3000);
  }

  // Repository Button Click Event
  if (btnRepo) {
    btnRepo.addEventListener('click', (e) => {
      showToast('Opening Project BHUMI GitHub Repository...');
      // Guarantees redirection even if default action is blocked
      setTimeout(() => {
        window.open('https://github.com/PillaiSarveshX03/ProjectBHUMI', '_blank');
      }, 150);
    });
  }

  // Deployment Button Click Event
  if (btnDeploy) {
    btnDeploy.addEventListener('click', (e) => {
      showToast('Launching BHUMI Web App on Render...');
      setTimeout(() => {
        window.open('https://bhumi-bzr6.onrender.com/', '_blank');
      }, 150);
    });
  }
});
