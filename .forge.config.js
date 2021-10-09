module.exports = {
  packagerConfig: {
    packageManager: 'yarn',
    icon: './src/icons/serial_config',
    dir: './src',
  },
  makers: [
    {
      name: '@electron-forge/maker-dmg',
      config: {
        icon: './src/icons/serial_config.icns',
      },
    },
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        name: 'ebyte_modules_setting',
      },
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
  /*publishes: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: 'mosvov',
          name: 'ebyte-modules-setting',
        },
        prerelease: true,
      },
    },
  ],*/
  plugins: [
    [
      '@electron-forge/plugin-webpack',
      {
        mainConfig: './webpack/webpack.main.config.js',
        renderer: {
          config: './webpack/webpack.renderer.config.js',
          entryPoints: [
            {
              html: './src/index.html',
              js: './src/renderer.tsx',
              name: 'main_window',
            },
          ],
        },
      },
    ],
  ],
};
