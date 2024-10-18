chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "changeFont") {
      document.body.style.fontFamily = request.font;
      document.body.style.fontSize = request.size;
      sendResponse({status: `Font changed to ${request.font} with size ${request.size}`});
    }
  });