module.exports = {
  "env": {
    "build": {
      "presets": [
        ["@babel/preset-env",{
          "modules": false,
          "loose": true,
        }],
        ["vue", {
          "eventModifiers": false,
          "vModel": false,
        }],
      ],
    },
  },
}
