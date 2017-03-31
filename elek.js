import entries from 'object.entries'

export default (list, match, layer) => {
  
  let matchs = match.split('.'),
      { length } = matchs,
      step = 0,
      out = []
  
    let rec = (list) => {
    
    for (let [key, value] of entries(list)) {
      if (value && (matchs[step] === "*" || matchs[step] === key)) {
        if (step === layer) out.push(value)
        
        step++
        rec(value)
      }
    }

    step = 0

  }
  
  rec(list)

  return out

}
