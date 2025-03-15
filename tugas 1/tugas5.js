let name = "Nadira Dika"
name = name.split(" ")
let results = []

for(let i = 0; i < name.length; i++){
  let initial = name[i].split("")
  initial = initial[0]
  results.push(initial)
}

results = results.join("")
console.log(results)
