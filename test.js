import test from 'ava';
import elek from './index'

const object = {
  a: {
    b: {
      e: 4
    }
  },
  c: {
    d: {
      e: 5
    }
  }
}

test('layer 0', t => {
  
  t.deepEqual([{b:{e:4}},{d:{e:5}}], elek(object, "*.*.e", 0))

})

test('layer 1', t => {
  
  t.deepEqual([{e:4},{e:5}], elek(object, "*.*.e", 1))

})

test('layer 2', t => {
  
  t.deepEqual([4,5], elek(object, "*.*.e", 2))

})
