import Mock from 'mockjs'
const Random = Mock.Random

// 生成随机数据的方法
function generateRandomData() {
  const idCard = Random.id()
  const mobile = Mock.mock(/^1([38]\d|5[0-35-9]|7[3678])\d{8}$/)
  const name = Random.cname()

  return { idCard, mobile, name }
}

// 生成数据列表
function generateDataList(count) {
  const dataList = []
  for (let i = 0; i < count; i++) {
    dataList.push(generateRandomData())
  }
  return dataList
}

// 模拟请求接口并返回数据
Mock.mock('/api/demo', 'get', () => {
  const dataList = generateDataList(20)
  return { code: 200, data: dataList }
})
