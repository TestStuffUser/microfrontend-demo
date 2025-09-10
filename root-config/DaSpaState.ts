// Примитив для обмена состоянием между микрофронтами
class DaSpaState extends EventTarget {
  setTheme(theme: string) {
    this.dispatchEvent(new CustomEvent('theme-change', { detail: { theme } }));
  }
  setToken(token: string) {
    this.dispatchEvent(new CustomEvent('token-change', { detail: { token } }));
  }
}

(window as any).DaSpaState = new DaSpaState();
