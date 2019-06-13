/**
 * @param fileValue: 文件内容，生成的代码
 * @param option: { filePath, index, config }
 */
const pluginExample = async (fileValue, option) => {
  const filePaths = {};
  return filePaths;
};

module.exports = (...args) => {
  return pluginExample(...args).catch(err => {
    console.log(err);
  });
};
