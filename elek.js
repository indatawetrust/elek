import entries from 'object.entries'
import equal from 'deep-equal'

const elek = (list, match, layer = 0) => {

  let out = [],
      stack = [],
      rec = (list) => {

        for (let [key, value] of entries(list)) {
          
          if (typeof match == "object") {
            
            if (typeof value == "object" && !equal(match, value)) {
              rec(value) 
            } else {
              out.push(layer ? {
                [key]: value
              } : value)
            }
            
          } else {

            if (value && !(match.match(new RegExp(key)))) {
              if (typeof value != "string") {
                stack.push(layer ? {
                  [key]: value
                } : value)
  
                rec(value)
              }
            } else {
              out.push(stack.pop())
            }

          }

        }

      }

  rec(list)
  
  if (typeof match == "object") {
    return [...new Set(out.filter(o => typeof o === "object"))]
  } else {
    return [...new Set(out)]
  }

}

export default elek
