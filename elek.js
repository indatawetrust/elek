import entries from 'object.entries'

export default (list, match) => {
  
  let out = [],
      stack = []
  
    let rec = (list) => {
    
      for (let [key, value] of entries(list)) {
        if (value && !(match.match(new RegExp(key)))) {
          if (typeof value != "string") {
            stack.push(value)
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
