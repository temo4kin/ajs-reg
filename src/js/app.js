export class Validator {
  validateUsername(username) {
    const re = /^[a-zA-Z0-9_-]+$/;
    if (!re.test(username)) return false;
    if (/^[0-9_-]/.test(username) || /[0-9_-]$/.test(username)) return false;
    if (/\d{4,}/.test(username)) return false;
    return true;
  }
}

export function formatPhoneNumber(phone) {
  const cleaned = phone.replace(/[^\d+]/g, '');

  if (cleaned.match(/^(\+?7|8)\d{10}$/)) {
    return `+7${cleaned.slice(-10)}`; // +7 + 10 цифр
  }

  if (cleaned.startsWith('+')) {
    return cleaned;
  }

  return null;
}