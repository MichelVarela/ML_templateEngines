const data = require('../data/dataProducts');

module.exports = {
    index: (req,res)=>{

        const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".");
        
        let id = Number(req.params.id);
        let category = req.params.category;

        let producto = [];
        let title

        data.forEach(element=>{
            if(id == element.id && category == element.category){
                return producto.push(element);
            }
        })

        data.forEach(element=>{
            if(id == element.id && category == element.category){
                return title = element.name; 
            }
        })

        res.render('detalleProduct',{producto,toThousand,title});
    }
}

