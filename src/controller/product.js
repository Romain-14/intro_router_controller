const allProductView = (req, res) => {
    res.json({
        result: [
            {
                id: 1,
                label: "Short",
                content:
                    "magnifique short bleu avec des petites fleurs ambiance Hawai",
                price: 7.99,
                category: "Vêtement",
                url_img: "no_picture.png",
                seller: "Décathlent",
                addedDate: "28/08/2023",
                qtyInStock: 47,
                ref: "AZ123",
            },
            {
                id: 2,
                label: "Télé low resolution",
                content: "superbe écran cathodique de grand-père",
                price: 24.99,
                category: "Multimédia",
                url_img: "tele.jpg",
                seller: "Louis la Brocante",
                addedDate: "14/08/2023",
                qtyInStock: 7,
                ref: "AS423",
            },
        ],
    });
};

const oneProductView = (req, res) => {
    const id = req.params.id;
    const product = [
        {
            id: 1,
            label: "Short",
            content:
                "magnifique short bleu avec des petites fleurs ambiance Hawai",
            price: 7.99,
            category: "Vêtement",
            url_img: "no_picture.png",
            seller: "Décathlent",
            addedDate: "28/08/2023",
            qtyInStock: 47,
            ref: "AZ123",
        },
        {
            id: 2,
            label: "Télé low resolution",
            content: "superbe écran cathodique de grand-père",
            price: 24.99,
            category: "Multimédia",
            url_img: "tele.jpg",
            seller: "Louis la Brocante",
            addedDate: "14/08/2023",
            qtyInStock: 7,
            ref: "AS423",
        },
    ]
    const item = product.find(p => p.id === parseInt(id));
    
    res.json(item);
};

const addProduct = (req, res) => {
    res.json({msg: "produit ajouté"});
};


export { allProductView, oneProductView, addProduct };
