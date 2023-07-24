

// or

const loading = document.getElementById("loading");

const loadingDuration = 1500; // 2s

setTimeout(() => {
  loading.classList.add('loading-none');
}, loadingDuration);