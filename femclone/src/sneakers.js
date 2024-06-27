const currentDate = new Date
const sneakers = [
    {
        name: "Nike Air Max 270",
        image: "https://i5.walmartimages.com/seo/Nike-Air-Max-270-Men-s-Running-Shoes-White-Black-White-AH8050-100_e81a591a-17e4-41e1-a563-38ab406e6a26.d97f219d9540fe3e4172a8617410abf6.jpeg",
        additionalImages: [
            "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/eehabecsfly0wy1pxxve/air-max-270-big-kids-shoes-HbtNX3.png",
            "https://images.asos-media.com/products/nike-air-max-270-sneakers-in-white-and-black/205282623-1-white?$n_750w$&wid=750&hei=750&fit=crop",
            "https://images.stockx.com/images/Nike-Air-Max-270-White-Pure-Platinum.png?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1609432457",
            "https://junkyard.imgix.net/globalassets/21---other/productimages/7220277_100_f_f_nike_n_ah8050100_airmax270white_q3_junkyard.jpg?auto=format&w=600"
        ],
        description: "The Nike Air Max 270 is known for its large Air unit in the heel, providing a smooth and comfortable ride. The design draws inspiration from the Air Max 180 and Air Max 93.",
        id: 0,
        price: 149.5,
        gender: "Unisex",
        kidEligable: true,
        sale: true
    },
    {
        name: "New Balance 990v5",
        image: "https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&itemId=100537227-847&recipeName=680",
        additionalImages: [
            "https://sneakerbardetroit.com/wp-content/uploads/2019/08/New-Balance-990v5-Triple-Black-Release-Date.jpg",
            "https://d3nt9em9l1urz8.cloudfront.net/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/n/b/nbm990bk5_1.jpg",
            "https://imagedelivery.net/2DfovxNet9Syc-4xYpcsGg/205b9dde-9636-445d-3136-22d651b19c00/product",
            "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/3/15/d6843656-e243-431e-a81c-fbb9cbda52e5.jpg"
        ],
        description: "The New Balance 990v5 continues the legacy of the 990 series with a perfect blend of cushioning and stability. Made in the USA, this sneaker is a symbol of quality and craftsmanship.",
        id: 1,
        price: 174.9,
        gender: 'Women',
        kidEligable: false,
        sale: false
    },
    {
        name: "Puma RS-X",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/372838/01/sv01/fnd/IND/fmt/png",
        additionalImages: [
            "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/369579/04/sv01/fnd/IND/fmt/png",
            "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/369579/04/sv02/fnd/IND/fmt/png",
            "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/369579/04/sv03/fnd/IND/fmt/png",
            "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/369579/04/sv04/fnd/IND/fmt/png"
        ],
        description: "The Puma RS-X is a reimagined version of the classic Running System (RS) line from the '80s. It features bold colors and a chunky silhouette, combining retro style with modern performance.",
        id: 2,
        price: 99.5, 
        gender: 'Women',
        kidEligable: false,
        sale: false
    },
    {
        name: "ASICS Gel-Kayano 27",
        image: "https://www.theathletesfoot.co.nz/media/catalog/product/cache/30cc80f98b098b07373440d682818030/1/0/1012a649-401_1.jpg",
        additionalImages: [
            "https://cdn.webshopapp.com/shops/319141/files/363948408/1500x4000x3/asics-gel-kayano-27.jpg",
            "https://allikestore.com/cdn/shop/products/1012A649-401-3_43185.jpg?v=1665537640&width=1445",
            "https://www.directrunning.co.uk/images/Gallery3/Asi_1012A649-401.jpg",
            "https://www.bmcsports.ie/images/asics-womens-gel-kayano-27-navy-pink-running-shoes-p35966-119409_image.jpg"
        ],
        description: "The ASICS Gel-Kayano 27 is designed for overpronators, offering excellent support and comfort. The Dynamic DuoMax System enhances stability and support, while the GEL technology cushions every step.",
        id: 3,
        price: 99.95,
        gender: 'Men',
        kidEligable: true,
        sale: true
    },
    {
        name: "Reebok Club C 85",
        image: "https://images.reebok.eu/reebok-club-c-85-shoes_19729679_45447856_2048.jpg?c=1",
        additionalImages: [
            "https://i.ebayimg.com/images/g/KxwAAOSwpfBgrdBv/s-l500.jpg",
            "https://icrshop.ge/assets/local/catalog/aw-lab-reebok-801-1771_1.jpg",
            "https://www.reebok.ae/media/catalog/product/cache/aa703a0b704cee042f69ab8fe70bf568/a/r/ar0457_1.jpg",
            "https://bilder.baur.de/i/empiriecom/2cf8fcab5425b470916171c0f33e9a20.jpg?$format_dv_mob_075$"
        ],
        description: "The Reebok Club C 85 is a timeless classic with a soft leather upper for superior comfort. The low-cut design provides a sleek, sophisticated silhouette while promoting freedom of movement.",
        id: 4,
        price: 89.95,
        gender: 'Women',
        kidEligable: true,
        sale: false
    },
    {
        name: "Converse Chuck Taylor All Star",
        image: "https://sporttrade.ge/wp-content/uploads/2020/12/M9621_A_107X1-1.jpg",
        additionalImages: [
            "https://cdn.4stand.com/huge/ea/c1/eac181c7457fcd90becbf33b8aa58b0d733dc128.jpg",
            "https://m.media-amazon.com/images/I/81aL8O+rkFL._AC_UY900_.jpg",
            "https://static.netshoes.com.br/produtos/tenis-converse-chuck-taylor-all-star-smile-cano-alto-ct1318/16/D26-5833-016/D26-5833-016_zoom4.jpg?ts=1637165393&ims=544x",
            "https://foorshop.com/images/detailed/100/M9621C-2.jpg"
        ],
        description: "The Converse Chuck Taylor All Star is an iconic sneaker with a canvas upper and rubber sole. Known for its versatility and timeless style, it's a staple in casual footwear.",
        id: 5,
        price: 59.95,
        gender: 'Unisex',
        kidEligable: true,
        sale: false
    },
    {
        name: "Vans Old Skool",
        image: "https://images.vans.com/is/image/Vans/VN000D3HNVY-HERO?hei=500&wid=500&qlt=90&fmt=webp",
        additionalImages: [
            "https://images.vans.com/is/image/Vans/VN000D3HNVY-ALT1?hei=500&wid=500&qlt=90&fmt=webp",
            "https://images.vans.com/is/image/Vans/VN000D3HNVY-ALT2?hei=500&wid=500&qlt=90&fmt=webp",
            "https://images.vans.com/is/image/Vans/VN000D3HNVY-ALT3?hei=500&wid=500&qlt=90&fmt=webp",
            "https://images.vans.com/is/image/Vans/VN000D3HNVY-ALT4?hei=500&wid=500&qlt=90&fmt=webp"
        ],
        description: "The Vans Old Skool features the brand's signature side stripe, a durable canvas and suede upper, and a padded collar for support and flexibility. It's a classic skate shoe that has transcended subcultures.",
        id: 6,
        price: 69.95,
        gender: 'Unisex',
        kidEligable: true,
        sale: true

    },
    {
        name: "Nike Air Force 1 '07",
        image: "https://img.buzzfeed.com/buzzfeed-static/complex/images/Y19jcm9wLGhfMTA2NSx3XzE4OTMseF81MSx5XzY2Mg==/jczrzgiymddftgcdheiu/nike-air-force-1-low-terror-squad-fj5756-100-pair.jpg",
        additionalImages: [
            "https://nike.ge/wp-content/uploads/2024/03/420170310_1605932396877288_8370770366536453356_n.jpg",
            "https://acdn.mitiendanube.com/stores/002/856/632/products/img_64871-8c2ba8c4c6b194a5ee16927481167660-1024-1024.jpeg",
            "https://i.ebayimg.com/images/g/PcEAAOSwNE1lsjol/s-l1600.jpg",
            "https://imagedelivery.net/2DfovxNet9Syc-4xYpcsGg/f11ef0f1-e856-402a-2ac9-29fb1889c600/product"
        ],
        description: "The Nike Air Force 1 '07 is a classic sneaker that combines classic style with modern details. This version features crisp leather edges, the iconic Nike Swoosh, and a durable rubber sole for traction and comfort.",
        id: 7,
        price: 99.99,
        gender: 'Unisex',
        kidEligable: false,
        sale: false
    },
    {
        name: "Nike Air Max 90",
        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/8ab583bc-dfd8-47ae-a678-887066acc401/air-max-90-shoes-4PG9Dt.png",
        additionalImages: [
            "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/8ab583bc-dfd8-47ae-a678-887066acc401/air-max-90-shoes-4PG9Dt.png",
            "https://www.footasylum.com/images/products/large/4033316_1.jpg",
            "https://www.lifestylesports.com/on/demandware.static/-/Sites-LSS_eCommerce_Master/default/dwa947e649/images/11774613xlarge.jpg",
            "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/c9438b52-c06e-45fd-a253-4d2f3cdd3ef5/air-max-90-shoes-QfTnV3.png"
        ],
        description: "The Nike Air Max 90 stays true to its roots with the iconic Waffle outsole, stitched overlays, and classic TPU accents. It provides a comfortable ride with its Max Air unit in the heel.",
        id: 8,
        price: 129.95,
        gender: 'Men',
        kidEligable: false,
        sale: true
    },
    {
        name: "Nike Blazer Mid '77",
        image: "https://sneakernews.com/wp-content/uploads/2022/02/Nike-Blazer-Mid-77-DM1000-100-4.jpg?w=1140",
        additionalImages: [
            "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/f0619f6b-e888-4e09-8347-55f70ba6452a/blazer-mid-77-vintage-shoe-NPWvDZ.png",
            "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/89b9b23e-f622-49df-aac6-67d93f309aeb/blazer-mid-77-vintage-shoe-NPWvDZ.png",
            "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/2e964bb7-ef08-4387-8057-bdcfb8ae3025/blazer-mid-77-vintage-shoe-NPWvDZ.png",
            "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/1bb925a5-6bde-4b02-b747-207e29e76597/blazer-mid-77-vintage-shoe-NPWvDZ.png"
        ],
        description: "The Nike Blazer Mid '77 brings vintage basketball style to the modern age. The mid-top design and suede overlays provide both comfort and durability, while the retro branding adds a timeless touch.",
        id: 9,
        price: 84.95,
        gender: 'Women',
        kidEligable: false,
        sale: false
    },
    {
        name: "Nike React Infinity Run Flyknit 2",
        image: "https://images.stockx.com/images/Nike-React-Infinity-Run-Flyknit-2-Rawdacious-W-Product.jpg?fit=fill&bg=FFFFFF&w=1200&h=857&fm=webp&auto=compress&dpr=2&trim=color&updated_at=1649259859&q=60",
        additionalImages: [
            "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/a4a202c0-1e9f-4640-b1a5-8b3e20db9399/react-infinity-run-flyknit-2-road-running-shoes-Z8ttqq.png",
            "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/06fbe911-7b40-4d0f-a1ae-28c517c1cc2a/react-infinity-run-flyknit-2-road-running-shoes-Z8ttqq.png",
            "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b8fa9375-875e-4a76-8b50-05c1b15a9bc8/react-infinity-run-flyknit-2-road-running-shoes-Z8ttqq.png",
            "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/a7b94bc8-b13b-4a8c-bf7e-72cf7c8b0b69/react-infinity-run-flyknit-2-road-running-shoes-Z8ttqq.png"
        ],
        description: "The Nike React Infinity Run Flyknit 2 is designed to keep you running. The breathable Flyknit upper provides a snug fit, while the React foam midsole offers a responsive and cushioned ride. This shoe is ideal for long-distance runners.",
        id: 10,
        price: 159.5,
        gender: 'Men',
        kidEligable: false,
        sale: true
    },
    {
        name: "Nike Air Zoom Pegasus 38",
        image: "https://www.runningxpert.com/media/catalog/product/cache/ed1b3c59211d8cf1c9523654e2efd698/d/j/dj5404-100-phsrh000.jpg",
        additionalImages: [
            "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/ae3cc6cd-77a5-48da-8321-1e4dffea7e92/air-zoom-pegasus-38-road-running-shoes-PGcKXb.png",
            "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/78e529e0-41aa-43c2-b31e-993afdb19932/air-zoom-pegasus-38-road-running-shoes-PGcKXb.png",
            "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/20d99c02-2c21-4982-84db-3684bca2c61a/air-zoom-pegasus-38-road-running-shoes-PGcKXb.png",
            "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/ab8195ec-d1c8-4c48-bb5f-65fd700b9e8e/air-zoom-pegasus-38-road-running-shoes-PGcKXb.png"
        ],
        description: "The Nike Air Zoom Pegasus 38 continues the legacy of a comfortable and responsive ride. Featuring a breathable mesh upper and Zoom Air unit in the forefoot, this shoe is perfect for everyday runs.",
        id: 11,
        price: 129,
        gender: 'Unisex',
        kidEligable: false,
        sale: false
    },
    {
        name: "ASICS Gel-Venture 8 GS",
        image: "https://images.asics.com/is/image/asics/1011A824_003_SR_RT_GLB?$sfcc-product$",
        description: "The ASICS Gel-Venture 8 GS is built for young adventurers. It features GEL technology for cushioning and a durable outsole for traction on various surfaces.",
        id: 12,
        price: 50,
        additionalImages: [
            "https://i5.walmartimages.com/asr/76939e9a-9a54-4c01-bab7-2c9824a91929.281166c3101f557f5d7e95d7a4767a25.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
            "https://www.lifestylesports.com/on/demandware.static/-/Sites-LSS_eCommerce_Master/default/dwed5d8711/images/12587113xlalt4.jpg",
            "https://images.asics.com/is/image/asics/1014A141_406_SR_LT_GLB?$zoom$",
            "https://i.ebayimg.com/images/g/z58AAOSwY7BlKRQ2/s-l1600.png"
        ],
        gender: "Unisex",
        kidEligable: true,
        sale: true
    },
    {
        name: "Reebok Classic Leather",
        image: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//105/MTA-3877557/reebok_reebok_classic_leather__men_shoes_-49799-_full02_bq9gbah2.jpg",
        description: "The Reebok Classic Leather is a stylish and comfortable sneaker with a soft leather upper. It offers a cushioned midsole and durable rubber outsole, perfect for everyday activities.",
        id: 13,
        price: 80,
        additionalImages: [
            "https://reebok.bynder.com/transform/643e4d04-6aa7-4efc-ad4e-792bf8eb5d45/SS24_ClassicEssentials_ClassicLeather_ImageCollection_Tile2?fm=jpg&q=90&fit=fill&w=1200p",
            "https://reebok.bynder.com/transform/22a2be53-79cb-454d-8618-18f693ff3569/100008491_SLC_eCom-tif?io=transform:fit,width:500&quality=100",
            "https://www.lotsashoes.co.nz/cdn/shop/products/Classic_Leather_Shoes_White_2214_03_standard_1445x.jpg?v=1646695596",
            "https://f.fcdn.app/imgs/3c0860/www.globalsports.com.uy/gls/92d9/original/catalogo/RK100008491-1942-2/1500-1500/classic-leather-shoes-10.jpg"
        ],
        gender: "Unisex",
        kidEligable: true,
        sale: false
    },
];
export const imgArray = ['https://wallpaper.dog/large/20540535.jpg', 'https://media.gq.com/photos/646fdd946cbe43aa644cd88b/16:9/w_1280,c_limit/shoes-art.jpg', 'https://media.wired.com/photos/64949938065114c6bc3082ae/191:100/w_2580,c_limit/Hoka-Speedgoat-5-Angle-Gear.jpg', 'https://media.gq.com/photos/63eba1b2275d2fef78a425c2/master/pass/nike-running-shoes-streakfly-invincible.jpg']

export default sneakers;
