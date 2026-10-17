const passwordRules = [
  {
    label: "Password must be at least 12 characters.",
    test: (password) => password.length >= 12,
  },
  {
    label: "Password must contain at least one uppercase letter.",
    test: (password) => /[A-Z]/.test(password),
  },
  {
    label: "Password must contain at least one lowercase letter.",
    test: (password) => /[a-z]/.test(password),
  },
  {
    label: "Password must contain at least one number.",
    test: (password) => /\d/.test(password),
  },
  {
    label: 'Password must contain at least one special character (!@#$%^&*(),.?":{}|<>).',
    test: (password) => /[!@#$%^&*(),.?":{}|<>]/.test(password),
  },
  {
    label: "Password must not start or end with whitespace.",
    test: (password) => password === password.trim(),
  },
];

const validatePassword = (password) => {
  if (typeof password !== "string") {
    return ["Password must be a string."];
  }

  return passwordRules
    .filter((rule) => !rule.test(password))
    .map((rule) => rule.label);
};

module.exports = { validatePassword };
