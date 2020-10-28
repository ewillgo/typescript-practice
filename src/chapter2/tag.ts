let myname = 'remo>'
let surname = 'jansen&'
let age = '10'

function htmlEscape(literals, ...placeholders) {
  let result = ''

  result += literals[0]
  for (let i = 0; i < placeholders.length; i++) {
    result += placeholders[i]
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
  }

  result += literals[literals.length - 1]
  return result
}

let escapeHtml = htmlEscape`<h1>${myname} ${surname} ${age}</h1>`
console.log(escapeHtml)
