/*
module.exports = async (req, res) => {

    const todo = {
        title: 'Some really important work to finish'
    };
/*
    fetch('http://34.227.231.244:3000/suggestions/57474', {
            method: 'POST',
            body: JSON.stringify(todo),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
        .then(response => response.json())
        .then(json => {
            console.log(json);
        });
    let sugerenciasList = [{
            "claveProducto": "31241602",
            "nombreProducto": "Discos de cristal",
            "precioUnitario": 219,
            "nombreProveedor": "30199",
            "imagenProducto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkYMEVUEz56ZjSyP-P3Fc4q5H5XmrC5EDDelIyNyoEVsqHKOloGRBaDPFVuQ&s"
        },
        {
            "claveProducto": "50305034",
            "nombreProducto": "Naranja pummulo",
            "precioUnitario": 153,
            "nombreProveedor": "30199",
            "imagenProducto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4qoSYjzSXxs6IUZbeRxrkFsjEJBMl-6AoQw2RX_wvLuaSEtBnFEhWmdXBwac&s"
        },
        {
            "claveProducto": "50305846",
            "nombreProducto": "Ciruela laroda",
            "precioUnitario": 210,
            "nombreProveedor": "30199",
            "imagenProducto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZRRfuIZ9L5g4jjQbAycWOmd6N3-jBgDEkHBUXouYxzMNxQuHYbrY7OIBfCw&s"
        },
        {
            "claveProducto": "40161605",
            "nombreProducto": "Torre desodorizante",
            "precioUnitario": 68,
            "nombreProveedor": "08272",
            "imagenProducto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3q-lwM2haXk54hpQuUJVxoiXB8vr9hPTSopPNsEfWkAWh-8PH4Tn_f3Wv2w&s"
        },
        {
            "claveProducto": "40161517",
            "nombreProducto": "Filtros de luz",
            "precioUnitario": 465,
            "nombreProveedor": "71802",
            "imagenProducto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9DvAPaiMO43akO9ysUxXUHNSOAggV_-aTf2P6jVA8ozlRvYPQ9NRxt2ud7Ys&s"
        },
        {
            "claveProducto": "40151527",
            "nombreProducto": "Bombas de \ufffdmbolo",
            "precioUnitario": 520,
            "nombreProveedor": "46790",
            "imagenProducto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkgL-FWieDLvvEHQuc9XgjaSoYiynhcsy2EzgAJZk7RruMEf6QussSAeHMvVE&s"
        },
        {
            "claveProducto": "50306003",
            "nombreProducto": "Pomelo liang ping yau",
            "precioUnitario": 38,
            "nombreProveedor": "46790",
            "imagenProducto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNYnVH2ZNbZCWzKb9r_nymdteUjXPJgV64V5ouWxXh8taJFDu98uLmJJfmBDc&s"
        },
        {
            "claveProducto": "50305802",
            "nombreProducto": "Ciruela angeleno",
            "precioUnitario": 240,
            "nombreProveedor": "46790",
            "imagenProducto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReGPrQkQ0nILQjJw23L-HCiAXHt4T80gRAzJkv9m_JdS5FcqJt3ghbtX6dLpc&s"
        },
        {
            "claveProducto": "50305336",
            "nombreProducto": "Durazno klondike",
            "precioUnitario": 73,
            "nombreProveedor": "30199",
            "imagenProducto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgLtvfZIj-DpyclcwblfeoVu-4rpFHrxhzmqX4xmJNmEe1CxVxpVWlmf1lUw&s"
        },
        {
            "claveProducto": "21101501",
            "nombreProducto": "Arados",
            "precioUnitario": 73,
            "nombreProveedor": "71802",
            "imagenProducto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1ciL-njrFDilX7M2uxH4MHajcyx507QQtoRFjKdv82VuAaVjWisXRvvZv4g&s"
        },
        {
            "claveProducto": "50304914",
            "nombreProducto": "Durazno diamante ray",
            "precioUnitario": 342,
            "nombreProveedor": "30199",
            "imagenProducto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlcDeVUbBxXHj9DzrmIOMrTfOeNhXg86PAi6sMGWMA_PiGMBgLE0U4S6nc0A&s"
        },
        {
            "claveProducto": "50304915",
            "nombreProducto": "Durazno earligo",
            "precioUnitario": 109,
            "nombreProveedor": "08272",
            "imagenProducto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLhOmgNKQtkD3tqZTcpwe3hJGj6zmIYPO3PfzKNZnL490gHSMlHp5zBgfcEA&s"
        },
        {
            "claveProducto": "31241502",
            "nombreProducto": "Prismas",
            "precioUnitario": 54,
            "nombreProveedor": "71802",
            "imagenProducto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_QBvD4HWIltkv-4Rx-lZmt67mBjdbuYjlhVYIhuZEkxnD-ez8z0eWj5ytbSQ&s"
        },
        {
            "claveProducto": "40151534",
            "nombreProducto": "Bombas criog\ufffdnicas",
            "precioUnitario": 43,
            "nombreProveedor": "30199",
            "imagenProducto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUWUD5jQWTjYUfhrPMjl8CTH9yF0laHXdHz1HClIpBSD3oz0EFjcwKfqJ3Mbs&s"
        },
        {
            "claveProducto": "50306500",
            "nombreProducto": "Sapotes",
            "precioUnitario": 47,
            "nombreProveedor": "08272",
            "imagenProducto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8pAKAT3d9kaymhdmHHVtJO-6TOPJAOykbnm46jZ1FTwVTd3m2gFnCwLnqK-I&s"
        },
        {
            "claveProducto": "40161505",
            "nombreProducto": "Filtros de aire",
            "precioUnitario": 196,
            "nombreProveedor": "71802",
            "imagenProducto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK8AbKrZLsmdIHLCJylyBtwWKfdjADF71oaxUgVtSfUt__U_Evp3XkPQ2Qil0&s"
        }
    ]
    res.render('sugerenciasCompra'), {
        sugerenciasList:sugerenciasList
    };
    
}
*/
module.exports = async (req, res) =>{
    let sugerenciasList = [{
        "claveProducto": "31241602",
        "nombreProducto": "Discos de cristal",
        "precioUnitario": 219,
        "nombreProveedor": "30199",
        "imagenProducto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkYMEVUEz56ZjSyP-P3Fc4q5H5XmrC5EDDelIyNyoEVsqHKOloGRBaDPFVuQ&s"
    },
    {
        "claveProducto": "50305034",
        "nombreProducto": "Naranja pummulo",
        "precioUnitario": 153,
        "nombreProveedor": "30199",
        "imagenProducto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4qoSYjzSXxs6IUZbeRxrkFsjEJBMl-6AoQw2RX_wvLuaSEtBnFEhWmdXBwac&s"
    },
    {
        "claveProducto": "50305846",
        "nombreProducto": "Ciruela laroda",
        "precioUnitario": 210,
        "nombreProveedor": "30199",
        "imagenProducto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZRRfuIZ9L5g4jjQbAycWOmd6N3-jBgDEkHBUXouYxzMNxQuHYbrY7OIBfCw&s"
    },
    {
        "claveProducto": "40161605",
        "nombreProducto": "Torre desodorizante",
        "precioUnitario": 68,
        "nombreProveedor": "08272",
        "imagenProducto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3q-lwM2haXk54hpQuUJVxoiXB8vr9hPTSopPNsEfWkAWh-8PH4Tn_f3Wv2w&s"
    },
    {
        "claveProducto": "40161517",
        "nombreProducto": "Filtros de luz",
        "precioUnitario": 465,
        "nombreProveedor": "71802",
        "imagenProducto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9DvAPaiMO43akO9ysUxXUHNSOAggV_-aTf2P6jVA8ozlRvYPQ9NRxt2ud7Ys&s"
    },
    {
        "claveProducto": "40151527",
        "nombreProducto": "Bombas de \ufffdmbolo",
        "precioUnitario": 520,
        "nombreProveedor": "46790",
        "imagenProducto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkgL-FWieDLvvEHQuc9XgjaSoYiynhcsy2EzgAJZk7RruMEf6QussSAeHMvVE&s"
    },
    {
        "claveProducto": "50306003",
        "nombreProducto": "Pomelo liang ping yau",
        "precioUnitario": 38,
        "nombreProveedor": "46790",
        "imagenProducto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNYnVH2ZNbZCWzKb9r_nymdteUjXPJgV64V5ouWxXh8taJFDu98uLmJJfmBDc&s"
    },
    {
        "claveProducto": "50305802",
        "nombreProducto": "Ciruela angeleno",
        "precioUnitario": 240,
        "nombreProveedor": "46790",
        "imagenProducto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReGPrQkQ0nILQjJw23L-HCiAXHt4T80gRAzJkv9m_JdS5FcqJt3ghbtX6dLpc&s"
    },
    {
        "claveProducto": "50305336",
        "nombreProducto": "Durazno klondike",
        "precioUnitario": 73,
        "nombreProveedor": "30199",
        "imagenProducto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgLtvfZIj-DpyclcwblfeoVu-4rpFHrxhzmqX4xmJNmEe1CxVxpVWlmf1lUw&s"
    },
    {
        "claveProducto": "21101501",
        "nombreProducto": "Arados",
        "precioUnitario": 73,
        "nombreProveedor": "71802",
        "imagenProducto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1ciL-njrFDilX7M2uxH4MHajcyx507QQtoRFjKdv82VuAaVjWisXRvvZv4g&s"
    },
    {
        "claveProducto": "50304914",
        "nombreProducto": "Durazno diamante ray",
        "precioUnitario": 342,
        "nombreProveedor": "30199",
        "imagenProducto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlcDeVUbBxXHj9DzrmIOMrTfOeNhXg86PAi6sMGWMA_PiGMBgLE0U4S6nc0A&s"
    },
    {
        "claveProducto": "50304915",
        "nombreProducto": "Durazno earligo",
        "precioUnitario": 109,
        "nombreProveedor": "08272",
        "imagenProducto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLhOmgNKQtkD3tqZTcpwe3hJGj6zmIYPO3PfzKNZnL490gHSMlHp5zBgfcEA&s"
    },
    {
        "claveProducto": "31241502",
        "nombreProducto": "Prismas",
        "precioUnitario": 54,
        "nombreProveedor": "71802",
        "imagenProducto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_QBvD4HWIltkv-4Rx-lZmt67mBjdbuYjlhVYIhuZEkxnD-ez8z0eWj5ytbSQ&s"
    },
    {
        "claveProducto": "40151534",
        "nombreProducto": "Bombas criog\ufffdnicas",
        "precioUnitario": 43,
        "nombreProveedor": "30199",
        "imagenProducto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUWUD5jQWTjYUfhrPMjl8CTH9yF0laHXdHz1HClIpBSD3oz0EFjcwKfqJ3Mbs&s"
    },
    {
        "claveProducto": "50306500",
        "nombreProducto": "Sapotes",
        "precioUnitario": 47,
        "nombreProveedor": "08272",
        "imagenProducto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8pAKAT3d9kaymhdmHHVtJO-6TOPJAOykbnm46jZ1FTwVTd3m2gFnCwLnqK-I&s"
    },
    {
        "claveProducto": "40161505",
        "nombreProducto": "Filtros de aire",
        "precioUnitario": 196,
        "nombreProveedor": "71802",
        "imagenProducto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK8AbKrZLsmdIHLCJylyBtwWKfdjADF71oaxUgVtSfUt__U_Evp3XkPQ2Qil0&s"
    }
];
console.log(req.session)
res.render('sugerenciasCompra',{
sugerenciasList
});
}