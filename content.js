chrome.runtime.onMessage.addListener(function (request) {
  // var debounceTimeout;
  // function debounce(func, delay) {
  //   clearTimeout(debounceTimeout);
  //   debounceTimeout = setTimeout(func, delay);
  // }

  if (request.action === "runSnippet"  && !document.eventListenerAdded) {
    // Your snippet code here
    document.addEventListener("keydown", function (event) {
      const video = document.querySelector("video");
      // Set the initial volume step
      const volumeStep = 0.1;

      switch (event.key) {
        case "u":
          // debounce(function () {
            video.volume = Math.min(1, video.volume + volumeStep);
          // }, 40);
          break;
        case "y":
          // debounce(function () {
            video.volume = Math.max(0, video.volume - volumeStep);
          // }, 40);
          break;
      }
    });
    document.eventListenerAdded = true;
  }
});
