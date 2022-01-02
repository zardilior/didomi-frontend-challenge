module.exports = {
  eslint: {
    mode: "extends",
    configure: {
      rules: {
        "no-console": "warn"
      }
    }
  },
  jest: {
    configure: {
      testMatch: [
        "**/test.js"
      ]
    }
  }
}
