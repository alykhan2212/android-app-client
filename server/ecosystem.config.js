module.exports = {
  apps: [{
    name: "app",
    script: "index.js",
    env: {
      NODE_ENV: process.env.NODE_ENV,
    }
  }]
}