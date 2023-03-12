const rawLoader = require('craco-raw-loader')

module.exports = {
  plugins: [
    { 
      plugin: rawLoader,
      options: { test: /\.md$/ }
    },
  ],
  webpack: {
    alias: {
      '@mui/styled-engine': '@mui/styled-engine-sc',
    },
    
  },
};
