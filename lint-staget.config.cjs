module.exports = {
  '*.{js,jsx,ts,tsx}': ['pnpm lint:fix', 'pnpm format'],
  '*.{json,md,yml,yaml}': ['pnpm format'],
};
