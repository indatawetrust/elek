import entries from 'object.entries'

export default (list, match, layer = 0) => {
  
  let out = [],
      stack = [],
      rec = (list) => {
      
        for (let [key, value] of entries(list)) {
  
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

  
  rec(list)

  return out

}
