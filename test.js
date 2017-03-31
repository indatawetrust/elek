import test from 'ava';
import elek from './index'

const object = {
  "test1": {
    "test2": {
      "test3": {
        "color": "red"
      }
    }
  },
  "test4": {
    "test5": {
      "test6": {
        "color": "blue"
      }
    }
  },
  "test7": {
    "test": {
      "test9": {
        "color": "green"
      }
    }
  }
}

test('test', t => {
 
  t.deepEqual(["red", "blue", "green"], elek(object, "color").map(_ => _.color))

})
