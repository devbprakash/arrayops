import _ from 'lodash'

exports.mergeObjects = () => {
  const a = [
    {
      quiz: 'abc',
      shares: 30
    },
    {
      quiz: 'abc',
      views: 20
    },
    {
      quiz: 'def',
      shares: 43
    },
    {
      quiz: 'def',
      views: 11
    }
  ]

  const test = _.groupBy(a, 'quiz')

  const newArr = []

  _.forEach(test, (value, key) => {
    const obj = {}
    obj.quiz_id = key
    _.forEach(value, (item) => {
      if (item.shares) {
        obj.shares = item.shares
      } else if (item.views) {
        obj.views = item.views
      }
    })

    newArr.push(obj)
  })

  console.log(newArr)
}
