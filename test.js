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
  }
}

test('layer 0 test', t => {
 
  t.deepEqual(["red", "blue", "green"],
      elek(object, "color").map(_ => _.color)
    )

})

test('layer 1 test', t => {
 
  t.deepEqual(["test1", "test5", "test9"],
      elek(object, "color", 1)
        .map(_ => Object.keys(_))
        .reduce((a,b) => a.concat(b)))

})
