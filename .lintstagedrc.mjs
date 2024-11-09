export default {
  // Handle Vue and TS files
  'src/**/*.{vue,ts}': (files) => [
    `eslint --config ./.eslintrc.cjs --fix ${files.join(' ')}`,
    `prettier --write ${files.join(' ')}`
  ],

  // Handle style files
  'src/**/*.{css,scss}': (files) => [
    `prettier --write ${files.join(' ')}`
  ],

  // Handle config files
  '*.{json,md,yaml,yml}': (files) => [
    `prettier --write ${files.join(' ')}`
  ],

  // Handle config files specifically
  '{.eslintrc.mjs,.prettierrc.json}': (files) => [
    `prettier --write ${files.join(' ')}`
  ]
}
