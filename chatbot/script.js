async function sendMessage() {
  const inputEl = document.getElementById('userInput');
  const messagesEl = document.getElementById('messages');
  const sendBtn = document.getElementById('sendBtn');
  const text = (inputEl && inputEl.value || '').trim();
  
  if (!text) return;

  appendMessage('user', text);
  inputEl.value = '';
  // Resetear altura del textarea
  inputEl.style.height = 'auto'; 
  sendBtn.disabled = true;

  const loadingId = appendMessage('bot', 'Escribiendo...', true);
  messagesEl.scrollTop = messagesEl.scrollHeight;

  try {
    const response = await fetch('http://localhost:3000/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: text })
    });

    if (!response.ok) throw new Error('Error en el servidor');

    const data = await response.json();
    const reply = data.reply || "No recibí respuesta.";
    
    replaceMessage(loadingId, reply);

  } catch (error) {
    replaceMessage(loadingId, 'Error: No se pudo conectar con el asistente.');
    console.error(error);
  } finally {
    sendBtn.disabled = false;
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }
}

function appendMessage(who, text, isTemp){
  const messagesEl = document.getElementById('messages');
  if (!messagesEl) return null;
  const el = document.createElement('div');
  el.className = 'message ' + (who === 'user' ? 'user' : 'bot');
  el.textContent = text;
  if (isTemp) {
    el.dataset.temp = '1';
    el.id = 'msg-' + Date.now() + '-' + Math.floor(Math.random()*1000);
  }
  messagesEl.appendChild(el);
  messagesEl.scrollTop = messagesEl.scrollHeight;
  return el.id || null;
}

// auto-resize input textarea to fit content
;(function(){
  const ta = document.getElementById('userInput');
  if (!ta) return;
  function resize(){ ta.style.height = 'auto'; ta.style.height = (ta.scrollHeight) + 'px'; }
  ta.addEventListener('input', resize);
  // initial resize
  setTimeout(resize, 0);
})();

function replaceMessage(id, text){
  if (!id) { appendMessage('bot', text); return; }
  const el = document.getElementById(id);
  if (el) { el.textContent = text; delete el.dataset.temp; }
  else appendMessage('bot', text);
}