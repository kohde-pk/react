if (‘serviceWorker’ in navigator) {
  return new Promise((resolve, reject) => {
  window.addEventListener(‘load’, () => {
  const swUrl = process.env.NODE_ENV === ‘production’? ‘/service-worker.js’: ‘/custom-service-worker.js’;