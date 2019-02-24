module.exports = {
  port: 5000,
  notify: false,
  open: false,
  ui: false,
  logPrefix: 'APP',
  snippetOptions: {
    rule: {
      match: '<span id="browser-sync-binding"></span>',
      fn: function(snippet) {
        return snippet;
      }
    }
  },
  server: {
    baseDir: ['.', 'node_modules']
  },
  files: ['*.html', '*.js', 'image/*']
};
