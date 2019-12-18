# @imgcook/plugin-example

在使用 imgcook 生成导出代码的时候，我们考虑到大家对 imgcook 平台生成的代码产物（template + style + js）进行加工处理的需求（如：自动上传图片到自己的图片空间、文件目录转化等），为此我们开放了 Plugin 生态机制来提供这些能力给大家使用， 同时也希望有兴趣的同学可以一起共建。

## Develop

```javascript
/**
 * @name plugin example
 * @param option: { data, filePath, config }
 * - data: module and generate code Data
 * - filePath: Pull file storage directory
 * - config: cli config
 */

const pluginHandler = async options => {
  let { data } = options;
  // body...
  return data;
};

module.exports = (...args) => {
  return pluginHandler(...args).catch(err => {
    console.log(err);
  });
};
```

## 参考示例

- 示例 1：https://github.com/imgcook/imgcook-cli/tree/master/packages/%40imgcook/plugin-generate
- 示例 2: https://github.com/imgcook/imgcook-cli/tree/master/packages/%40imgcook/plugin-images
