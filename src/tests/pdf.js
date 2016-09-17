const Emitter = require('events')

require('pdfjs-dist');
var fs = require('fs');


class Pdf extends Emitter{

	constructor(filename){

    super()
    this.filename = filename
		let pdf_path = __dirname + `/../../assets/${filename}.pdf`
		this.data = new Uint8Array(fs.readFileSync(pdf_path));

    this.on('page-read', page=> PAGE_CONTENTS(page) )
    this.on('page-read', page=> PAGE_CONTENTS(page) )
	}

	INIT(){

  		PDFJS.getDocument(this.data).then( (pdfDocument) =>{
  		  this.pages=pdfDocument.numPages
        this.pdfDocument = pdfDocument

  		})
	}

  READ_PAGE(pageNum){
    this.pageNum=pageNum
    this.pdfDocument.getPage(pageNum).then( page => this.emit('page-read',  page))
  }


         page.getTextContent().then(content=>{
             var str=""
             content.items.map(item=>str+=item.str)
             var arr = str.split(' ')
             console.log(str)
         callback(str)
       })
     })

  }

}
module.exports = {
	Pdf
}
