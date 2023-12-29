import express from "express";

const app = express();


app.get('/api/products',(req,res)=>{
    const products = [
        {
            id:1,
            name:'table wooden',
            price:300,
            image:''
        },
        {
            id:2,
            name:'table glass',
            price:500,
            image:''
        },
        {
            id:3,
            name:'metal tabel',
            price:300,
            image:''
        },
        {
            id:4,
            name:'steel tabel',
            price:300,
            image:''
        },
        {
            id:5,
            name:'iron tabel',
            price:300,
            image:''
        }
    ]


    //http://localhost:3000/api/products?search=wood
    if(req.query.search){
        const filterProducts = products.filter((product)=>product.name.includes(req.query.search))
        res.send(filterProducts);
        return;
    }

    setTimeout(()=>{
        res.send(products);
    },4000)

})

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
