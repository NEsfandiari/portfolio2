exports.modifyWebpackConfig = ({ config, stage }) => {
  let glslifyFiles = /\.(glsl|frag|vert|vs|fs)$/

  switch (stage) {
    case 'develop':
      config.loader('glslify', {
        test: glslifyFiles,
        loaders: ['raw', 'glslify'],
      })

      break

    case 'build-css':
      break

    case 'build-html':
      config.loader('glslify', {
        test: glslifyFiles,
        loaders: ['raw', 'glslify'],
      })
      break

    case 'build-javascript':
      config.loader('glslify', {
        test: glslifyFiles,
        loaders: ['raw', 'glslify'],
      })

      break
  }

  return config
}
