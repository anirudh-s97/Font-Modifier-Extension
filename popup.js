document.getElementById('changeFont').addEventListener('click', function() {
    const selectedFont = document.getElementById('fontSelect').value;
    const customFont = document.getElementById('customFont').value.trim();
    const fontToUse = customFont || selectedFont;
    const fontSize = document.getElementById('fontSizeSelect').value;
  
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      try {
        chrome.tabs.sendMessage(tabs[0].id, { action: "changeFont", font: fontToUse, size: fontSize }, function(response) {
          console.log(response.status);
        });
      } catch (error) {
        console.error('Error sending message:', error);
      }
    });
  });