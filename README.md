[![Travis Build Status](https://img.shields.io/travis/indatawetrust/elek.svg)](https://travis-ci.org/indatawetrust/elek)

#### elek
json key filter

````js
import elek from 'elek'

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

elek(object, "color").map(_ => _.color) // ['red', 'blue', 'green']
