const mockData = require('./mockData');
const expect = require('chai').expect;

describe('index.js', () => {
  const index = require('../index.js');
  const options = {
    data: mockData,
    filePath: './demo',
    config: {
      accessId: 'xx',
      dslId: 41,
      generator: ['@imgcook/generator-react'],
      plugin: ['@imgcook/plugin-images', '@imgcook/plugin-generate'],
      uploadUrl: '',
      value: '17679'
    }
  };
  it('index check param', async () =>{
    expect(options).to.be.an('object');
    expect(options.filePath).to.be.a('string');
  });
  it('index callback result', async () => {
    const result = await index(options);
    expect(result).to.be.an('object');
    expect(result.code).to.be.an('object');
    expect(result.code.panelDisplay).to.be.an('array');
  });
});
