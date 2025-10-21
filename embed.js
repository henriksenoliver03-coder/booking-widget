(function(){
  const container = document.currentScript.parentElement || document.body;
  const iframe = document.createElement('iframe');
  iframe.src = 'https://henriksenoliver03-coder.github.io/booking-widget/widget.html';
  iframe.style.width = '100%';
  iframe.style.minHeight = '800px';
  iframe.style.border = '0';
  iframe.loading = 'lazy';
  iframe.title = 'Booking Calendar';
  container.appendChild(iframe);
})();
