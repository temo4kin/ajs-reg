export class Validator {
  validateUsername(username) {
    const re = /^[a-zA-Z0-9_-]+$/;
    if (!re.test(username)) return false;
    if (/^[0-9_-]/.test(username) || /[0-9_-]$/.test(username)) return false;
    if (/\d{4,}/.test(username)) return false;
    return true;
  }
}