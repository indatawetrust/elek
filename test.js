import test from 'ava';
import elek from './index'

const object = {
  "test1": {
    "color": "red"
  },
  "test4": {
    "test5": {
      "color": "blue"
    }
  },
  "test7": {
    "test8": {
      "test9": {
        "color": "green"
      }
    }
  },
  "xxx1":{
    "color": "red"
  },
  "xxx2": {
    "color": "blue"
  },
  "xxx3": {
    "color": "green"
  },
}

test('layer 0 test', t => {
  
  t.deepEqual(["red", "blue", "green"],
      [...new Set(elek(object, "color").map(_ => _.color))]
    )

})

test('layer 1 test', t => {
 
  t.deepEqual(["test1", "test5", "test9", "xxx1", "xxx2", "xxx3"],
      elek(object, "color", 1)
        .map(_ => Object.keys(_))
        .reduce((a,b) => a.concat(b)))

})

test('object filter green', t => {
    
  t.deepEqual(["test9", "xxx3"],
      elek(object, { color: 'green' }, 1)
        .filter(_ => !_.color)
        .map(_ => Object.keys(_))
        .reduce((a,b) => a.concat(b)))

})

test('object filter blue', t => {
    
  t.deepEqual(["test5", "xxx2"],
      elek(object, { color: 'blue' }, 1)
        .filter(_ => !_.color)
        .map(_ => Object.keys(_))
        .reduce((a,b) => a.concat(b)))

})
