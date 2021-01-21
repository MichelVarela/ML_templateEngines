const data = require('../data/dataProducts');

module.exports = {
    index: (req,res)=>{

        const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".");

        let dataMasVendidos = [];
        let dataOfertas = [];
        
        data.filter(productos=>{
            if(productos.category == 'visited'){
                return dataMasVendidos.push(productos);
            }else{
                return dataOfertas.push(productos);
            }
        })

        res.render('index',{dataMasVendidos,dataOfertas,toThousand,title: 'Mercado Liebre Argentina'})
    }
}



