import _ from 'lodash'

exports.groupAndPush = () => {
  const a = [
    {
      quiz_id: 'abc',
      media: '123'
    },
    {
      quiz_id: 'abc',
      media: '1234'
    },
    {
      quiz_id: 'def',
      media: '456'
    }
  ]

  const test = _.groupBy(a, 'quiz_id')

  const newArr = []

  _.forEach(test, (value, key) => {
    const obj = {
      quiz_id: key,
      media: []
    }
    _.forEach(value, (item) => {
      obj.media.push(item.media)
    })

    newArr.push(obj)
  })

  console.log(newArr)
}
