const assert = require('assert')
const aleoAddon = require('../');

describe('aleoAddon test',() => {
  it('getCoinbaseReward test', () => {
    const reward = aleoAddon.getCoinbaseReward(1669166812, 1669166827, 79038);
    console.log(reward)
    assert(reward, '返回结果错误');
  })
})