:root {
  --primary: #6366f1;
  --secondary: #8b5cf6;
  --bg: #0f172a;
  --bg-light: #1e293b;
  --text: #f1f5f9;
  --text-muted: #cbd5e1;
  --border: #334155;
  --success: #10b981;
  --warning: #f59e0b;
  --danger: #ef4444;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
}

.container {
  display: flex;
  height: 100vh;
}

.sidebar {
  width: 280px;
  background: var(--bg-light);
  border-left: 1px solid var(--border);
  padding: 20px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: var(--primary);
}

.new-chat-btn {
  background: var(--primary);
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 20px;
  font-weight: 600;
  transition: all 0.3s;
}

.new-chat-btn:hover {
  background: var(--secondary);
  transform: translateY(-2px);
}

.conversations-list {
  flex: 1;
  overflow-y: auto;
}

.conversation-item {
  padding: 12px;
  margin-bottom: 8px;
  background: var(--bg);
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
  border-left: 3px solid transparent;
}

.conversation-item:hover {
  background: rgba(99, 102, 241, 0.1);
  border-left-color: var(--primary);
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: var(--bg);
}

.header {
  padding: 20px;
  border-bottom: 1px solid var(--border);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header h1 {
  font-size: 24px;
  color: var(--text);
}

.model-selector {
  display: flex;
  gap: 10px;
  align-items: center;
}

.model-selector select {
  background: var(--bg-light);
  color: var(--text);
  border: 1px solid var(--border);
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
}

.chat-area {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.welcome-message {
  text-align: center;
  padding: 40px 20px;
  color: var(--text-muted);
}

.welcome-message h2 {
  color: var(--text);
  margin-bottom: 10px;
}

.message {
  display: flex;
  margin-bottom: 15px;
  animation: slideIn 0.3s ease;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.message.user {
  justify-content: flex-end;
}

.message.assistant {
  justify-content: flex-start;
}

.message-content {
  max-width: 70%;
  padding: 12px 16px;
  border-radius: 12px;
  word-wrap: break-word;
  white-space: pre-wrap;
}

.user .message-content {
  background: var(--primary);
  color: white;
}

.assistant .message-content {
  background: var(--bg-light);
  border: 1px solid var(--border);
  color: var(--text);
}

.input-area {
  padding: 20px;
  border-top: 1px solid var(--border);
  display: flex;
  gap: 10px;
}

.input-area input {
  flex: 1;
  background: var(--bg-light);
  color: var(--text);
  border: 1px solid var(--border);
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 14px;
}

.input-area input:focus {
  outline: none;
  border-color: var(--primary);
}

.input-area button {
  background: var(--primary);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s;
}

.input-area button:hover {
  background: var(--secondary);
  transform: translateY(-2px);
}

.stats {
  padding: 15px 20px;
  background: var(--bg-light);
  border-top: 1px solid var(--border);
  display: flex;
  gap: 30px;
  justify-content: center;
  font-size: 12px;
}

.stat-item {
  display: flex;
  gap: 8px;
  align-items: center;
}

.stat-label {
  color: var(--text-muted);
}

.status-online {
  color: var(--success);
  font-weight: 600;
}

@media (max-width: 768px) {
  .sidebar {
    width: 200px;
  }
  .message-content {
    max-width: 85%;
  }
  .header {
    flex-direction: column;
    gap: 10px;
  }
}
