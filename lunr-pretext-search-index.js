var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Section",
  "number": "1.1",
  "title": "Section Title",
  "body": " Section Title  Text of section.  So I think the integral       This is a statement    This is a hint    This is the answer    This is the solution.    "
},
{
  "id": "sec-section-name-4",
  "level": "2",
  "url": "sec-section-name.html#sec-section-name-4",
  "type": "Checkpoint",
  "number": "1.1.1",
  "title": "",
  "body": "  This is a statement    This is a hint    This is the answer    This is the solution.   "
},
{
  "id": "sec-section-name2",
  "level": "1",
  "url": "sec-section-name2.html",
  "type": "Section",
  "number": "2.1",
  "title": "Section Title",
  "body": " Section Title  A pulse is a single, non-repeating disturbance that propagates through space and time, transferring energy and momentum.  A wave is a continuous, periodic succession of pulses.    So I think the integral       This is a statement    This is a hint    This is the answer    This is the solution.    "
},
{
  "id": "sec-section-name2-2",
  "level": "2",
  "url": "sec-section-name2.html#sec-section-name2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "pulse "
},
{
  "id": "sec-section-name2-3",
  "level": "2",
  "url": "sec-section-name2.html#sec-section-name2-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "wave "
},
{
  "id": "sec-section-name2-6",
  "level": "2",
  "url": "sec-section-name2.html#sec-section-name2-6",
  "type": "Checkpoint",
  "number": "2.1.1",
  "title": "",
  "body": "  This is a statement    This is a hint    This is the answer    This is the solution.   "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
