module.exports = {
  presets: [
    '@vue/app',
    'jest', [
      '@babel/preset-env', {
        'debug': false,
        'modules': 'commonjs',
        'targets': {
          'node': 'current'
        },
        'useBuiltIns': false
      }
    ]
  ]
}
