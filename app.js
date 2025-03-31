let logData = [];

function registrerTid() {
  const currentTime = new Date();
  const timeString = currentTime.toLocaleString();
  const note = document.getElementById('note').value || "Ingen note";

  logData.push({ time: timeString, note: note });
  visLog();
}

function visLog() {
  const logDiv = document.getElementById('log');
  logDiv.innerHTML = '';

  logData.forEach(item => {
    const logEntry = document.createElement('div');
    logEntry.textContent = `${item.time} - Note: ${item.note}`;
    logDiv.appendChild(logEntry);
}

function gemNote() {
  const note = document.getElementById('note').value;
  if (note) {
    alert('Note gemt!');
  } else {
    alert('Indtast venligst en note!');
  }
}
