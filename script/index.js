
let arr1 =[
    {
        img :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/2726f64a-3b5b-4ca9-b066-2ed3d9245582.gif" 
    },   

    {
        img:"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/177972e0-4583-428b-b4db-da5546b71310.jpg"
    },

    {
        img:"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/22f5baf6-76b8-4315-84d1-29904960ea31.jpg"
    },

    {
        img:"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/d9103d2b-af25-40c3-b41b-90538502b315.gif"
    },    
    
    {
        img:"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/36e134cb-da00-481a-9769-b975af151b46.jpg"
    },    
]



    let slider = document.querySelector(".slider");

    arr1.map(({img,name,price})=>{
        let div = document.createElement("div");
        div.className = "slide";        

        let img1 = document.createElement("img");
        img1.src = img;

        let name1 = document.createElement("p");
        name1.innerText = name;

        let price1 = document.createElement("p");
        price1.innerText = price;

        let anchor = document.createElement("a");
        anchor.href="#"

        anchor.append(img1);

        div.append(anchor);

        slider.append(div);
    })




let arr2 = [
    {
        img : "https://cdn.shopify.com/s/files/1/0906/2558/products/1_c30a9b16-ef13-44c3-af41-04b227c62419.jpg?v=1642434141", name:"LIP ZIP MATTE TOPPER",
        price:499,
    },
    
    {
        img : "https://cdn.shopify.com/s/files/1/0906/2558/products/01_d6ffec78-c2b6-4466-8672-233fee0285a8.jpg?v=1640791955", name:"MATTE AS HELL CRAYON LIPSTICK",
        price:799,
    },

    {
        img : "https://cdn.shopify.com/s/files/1/0906/2558/products/01.jpg?v=1639496513", name:"KOHL OF HONOUR INTENSE KAJAL",
        price:249,
    },

    {
        img : "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-tipsy-lips-moisturizing-balm-01-mojito-15057279877203.jpg?v=1619122412", name:"TIPSY LIPS MOISTURIZING BALM",
        price:199,
    },

    {
        img : "https://cdn.shopify.com/s/files/1/0906/2558/products/1_51afaa84-af89-42b5-bdb8-a51b01257bc0.jpg?v=1639582607", name:"CONTOUR DE FORCE FACE PALETTE",
        price:799,
    },

    {
        img : "https://cdn.shopify.com/s/files/1/0906/2558/products/1_529c20ee-c872-4029-9702-8580d7b9a66f.jpg?v=1639582652", name:"ACE OF FACE STICK",
        price:999,
    },   
]    



let BESTSELLERS = document.querySelector(".BESTSELLERS");

    arr2.map(({img,name,price})=>{
        let div2 = document.createElement("div");
        div2.className = "best_slide";     

        let img2 = document.createElement("img");
        img2.src = img;

        let name2 = document.createElement("p");
        name2.innerText = name;

        let price2 = document.createElement("p");
        price2.innerText = price;

        let anchor2 = document.createElement("a"); 
        anchor2.href="#";
        
        let btn = document.createElement("button");
        btn.className = "addTOCart";
        btn.innerText="Add To Cart";

        let btnAnchor = document.createElement("a");
        btnAnchor.href="#";

        btnAnchor.append(btn)

        anchor2.append(img2);

        div2.append(anchor2,name2,price2,btnAnchor);

        BESTSELLERS.append(div2);
    })



    // <!-- QUICK BEAUTY TIPS WITH SUGAR starts here -->

let arr3 = [
    {img:"https://d32baadbbpueqt.cloudfront.net/079b4250-2cd5-467a-b620-af356a98206e.jpg"},

    {img:"https://d32baadbbpueqt.cloudfront.net/ac0cec37-3f1d-4fa6-b103-10f988f84ea8.jpg"},

    {img:"https://d32baadbbpueqt.cloudfront.net/e90a47e7-1d6c-4e0c-8374-f5425dddc66a.jpg"}
]  




let QUICKBEAUTY = document.querySelector(".QUICKBEAUTY");

arr3.map(({img})=>{
    let div = document.createElement("div");
    div.className = "quickBeautySlide";

    let img3 = document.createElement("img");
    img3.src = img;


    let anchor3 = document.createElement("a");
    anchor3.href="#";

    anchor3.append(img3);

    div.append(anchor3);

    QUICKBEAUTY.append(div);
})



let arr4 = [
    {img:"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/3098348f-c2bd-434f-b688-3432ae37d9ef.jpg"},

    {img:"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/1bbe5c65-f084-4c7e-ae6a-46b90867b04a.jpg"},
    
    {img:"https://d32baadbbpueqt.cloudfront.net/37f0de63-c052-447c-9f98-dacceede39e1.jpg"},

    {img:"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/c3f4367f-0512-4adf-b162-a34f624ff76b.jpg"},

    {img:"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/788deca3-af41-496e-8649-06a2830603b9.jpg"},

    {img:"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/ac294d17-5c03-4d38-9b9e-be329de0f58a.jpg"},

]


let HOT_DEALS = document.querySelector(".HOT_DEALS");

arr4.map(({img})=>{
    let div = document.createElement("div");
    div.className = "hotdeals";

    let img4 = document.createElement("img");
    img4.src = img;

    let anchor4 = document.createElement("a");
    anchor4.href="#";

    anchor4.append(img4);

    div.append(anchor4);

    HOT_DEALS.append(div);
})





// SUPER SAVERS starts here


let arr5 = [
    {
        img : "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-mettle-satin-lipstick-01-sophie-bright-fuchsia-pink-fuchsia-13706264477779.jpg?v=1619116135", name:"METTLE SATIN LIPSTICK",
        price:499,
    },
    
    {
        img : "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-eye-warned-you-so-double-matte-eyeliner-03-green-book-marsh-green-13954500100179.jpg?v=1619116854", name:"EYE WARNED YOU SO",
        price:349,
    },

    {
        img : "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-smudge-me-not-lip-duo-12-don-fawn-yellow-brown-12788425097299.jpg?v=1619108497", name:"SMUDGE ME NOT LIP DUO",
        price:299,
    },

    {
        img : "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-it-s-a-pout-time-vivid-lipstick-09-better-call-salmon-peach-pink-12785014308947.jpg?v=1619101864", name:"ITS A POUT TIME",
        price:299,
    },

    {
        img : "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-smudge-me-not-liquid-lipstick-27-brown-crown-plum-brown-15384235180115.jpg?v=1619103565", name:"SMUDGE ME NOT LIQUID LIPSTICK",
        price:249,
    },

    {
        img : "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-mettle-matte-lipstick-10-eirene-blue-toned-red-12796091236435.jpg?v=1619110221", name:"METTLE MATE LIPSTICK",
        price:549,
    },   

    {
        img : "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-dream-cover-spf15-mattifying-compact-55-americano-deep-12775603372115.jpg?v=1619106493", name:"DREAM COVER SPF15",
        price:249,
    },   

    {
        img : "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-mettle-matte-lipstick-10-eirene-blue-toned-red-12796091236435.jpg?v=1619110221", name:"METTLE MATE LIPSTICK",
        price:549,
    },   
]    



let SUPER_SAVERS = document.querySelector(".SUPER_SAVERS");

    arr5.map(({img,name,price})=>{
        let div5 = document.createElement("div");
        div5.className = "super_slide";     

        let img5 = document.createElement("img");
        img5.src = img;

        let name5 = document.createElement("p");
        name5.innerText = name;

        let price5 = document.createElement("p");
        price5.innerText = price;

        let anchor5 = document.createElement("a"); 
        anchor5.href="#";
        
        let btn = document.createElement("button");
        btn.className = "addTOCart_2";
        btn.innerText="Add To Cart";

        let btnAnchor2 = document.createElement("a");
        btnAnchor2.href="#";

        btnAnchor2.append(btn)

        anchor5.append(img5);

        div5.append(anchor5,name5,price5,btnAnchor2);

        SUPER_SAVERS.append(div5);
    })


    // <!-- TOP PICKS OF THE WEEK starts here -->

let arr6 = [
    {img:"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/18ec06e5-4071-4a84-ba25-3e46632b6de0.jpg"},

    {img:"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/ce6539a6-6bff-4f41-8554-4af80d8ffd07.jpg"},

    {img:"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/8a71a460-cd8f-4166-8ac5-b19407d23699.jpg"},    
]


let PICK_OF_THE_WEEK = document.querySelector(".PICK_OF_THE_WEEK");

arr6.map(({img})=>{
    let div = document.createElement("div");
    div.className = "pick_slide";

    let img6 = document.createElement("img");
    img6.src = img;

    let anchor6 = document.createElement("a");
    anchor6.href="#";

    anchor6.append(img6);

    div.append(anchor6);

    PICK_OF_THE_WEEK.append(div);
})

// <!-- TOP PICKS OF THE WEEK ends here -->


// <!-- JUST-IN starts here -->

let arr7 = [
    {
        img : "https://cdn.shopify.com/s/files/1/0906/2558/products/390893522-eid-special-kit-wbg_1.jpg?v=1651238467", name:"EID SPECIAL KIT",
        price:1499,
    },
    
    {
        img : "https://cdn.shopify.com/s/files/1/0906/2558/products/1_cbc3a2d6-9266-467e-a973-017e3c65d5cf.jpg?v=1649433283", name:"SHINE & POUT MAKEUP VALUE",
        price:999,
    },

    {
        img : "https://cdn.shopify.com/s/files/1/0906/2558/products/383823136-launch-sweat-no-more-makeup-kit-wbg-images_11.jpg?v=1649132668", name:"SWEAT NO MORE MAKEUP",
        price:2699,
    },

    {
        img : "https://cdn.shopify.com/s/files/1/0906/2558/products/382512089-mettle-priming-balm-01.jpg?v=1648654861", name:"METTLE PRIMING BALM",
        price:1099,
    },

    {
        img : "https://cdn.shopify.com/s/files/1/0906/2558/products/1_6a5fa1af-0d0e-4e9e-85d1-579495fb5030.jpg?v=1648482145", name:"ACH ARRIVAL MICRO BROW PENCIL",
        price:499,
    },

    {
        img : "https://cdn.shopify.com/s/files/1/0906/2558/products/383779802-summer-makeup-kit-wbg-images.jpg?v=1649078383", name:"SUMMER MAKEUP KIT",
        price:1799,
    },   

    {
        img : "https://cdn.shopify.com/s/files/1/0906/2558/products/373532210-artboard-1.jpg?v=1646149967", name:"CITRUS GOT REAL RETINOL",
        price:499,
    },   

    {
        img : "https://cdn.shopify.com/s/files/1/0906/2558/products/373515742-01.jpg?v=1646207364", name:"SUGAR CITROUS GOT REAL BRIGHTENING",
        price:599,
    },   
]    



let JUST_IN = document.querySelector(".JUST_IN");

    arr7.map(({img,name,price})=>{
        let div7 = document.createElement("div");
        div7.className = "just_slide";     

        let img7 = document.createElement("img");
        img7.src = img;

        let name7 = document.createElement("p");
        name7.innerText = name;

        let price7 = document.createElement("p");
        price7.innerText = price;

        let anchor7 = document.createElement("a"); 
        anchor7.href="#";
        
        let btn_3 = document.createElement("button");
        btn_3.className = "addTOCart_3";
        btn_3.innerText="Add To Cart";

        let btnAnchor3 = document.createElement("a");
        btnAnchor3.href="#";

        btnAnchor3.append(btn_3)

        anchor7.append(img7);

        div7.append(anchor7,name7,price7,btnAnchor3);

        JUST_IN.append(div7);
    })




    // <!-- SUGAR BEAUTY BLOG starts here -->
    let arr8 = [
        {img:"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/3d719924-5511-4ebb-b31f-dc3fabbe4cb1.jpg"},
    
        {img:"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/4570aaa9-52a7-4082-8d59-d2c1d298cdc8.jpg"},
    
        {img:"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/6095fb33-4d09-4a55-8ceb-395a0818420c.jpg"},    
    ]
    
    
    let SUGAR_BLOG = document.querySelector(".SUGAR_BLOG");
    
    arr8.map(({img})=>{
        let div8 = document.createElement("div");
        div8.className = "blog_slide";
    
        let img8 = document.createElement("img");
        img8.src = img;
    
        let anchor8 = document.createElement("a");
        anchor8.href="#";
    
        anchor8.append(img8);
    
        div8.append(anchor8);
    
        SUGAR_BLOG.append(div8);
    })


    // <!-- SUGAR BEAUTY BLOG ends here -->



    // <!-- SKINCARE BASICS starts here -->

    let arr9 = [
        {
            img : "https://cdn.shopify.com/s/files/1/0906/2558/products/Hyderattingkit.jpg?v=1626968294", name:"AQUAHOLIC HYDRATING STICK",
            price:899,
        },
        
        {
            img : "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-aquaholic-priming-moisturizer-13548826886227.jpg?v=1619115290", name:"AQUAHOLIC PRIMING MOSTURIZER",
            price:499,
        },
    
        {
            img : "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-bling-leader-illuminating-moisturizer-13644982681683.jpg?v=1619115847", name:"BLING LEADER ILLUMINTAING",
            price:499,
        },
    
        {
            img : "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-citrus-got-real-spf30-sunscreen-28038344736851.jpg?v=1619155723", name:"CITRUS GOT REAL SPF30",
            price:399,
        },
    
        {
            img : "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-citrus-got-real-daily-moisturizer-28038347292755.jpg?v=1619155748", name:"CITRUS GOT REAL DAILY",
            price:499,
        },
    
        {
            img : "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-swipe-right-cleansing-water-12771592732755.jpg?v=1619106450", name:"SWIPE RIGHT CLEANSING WATER",
            price:399,
        },   
    
        {
            img : "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-cheat-sheet-clarifying-mask-12775754203219.jpg?v=1586848393", name:"CITRUS GOT REAL RETINOL",
            price:499,
        },   
    
        {
            img : "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-charcoal-patrol-bubble-mask-12775750500435.jpg?v=1586848341", name:"CHEAT SHEET CLARIFYING MASK",
            price:599,
        },   
    ]    


    let SKINCARE_BASICS = document.querySelector(".SKINCARE_BASICS");

    arr9.map(({img,name,price})=>{
        let div9 = document.createElement("div");
        div9.className = "basic_slide";     

        let img9 = document.createElement("img");
        img9.src = img;

        let name9 = document.createElement("p");
        name9.innerText = name;

        let price9 = document.createElement("p");
        price9.innerText = price;

        let anchor9 = document.createElement("a"); 
        anchor9.href="#";
        
        let btn_4 = document.createElement("button");
        btn_4.className = "addTOCart_4";
        btn_4.innerText="Add To Cart";

        let btnAnchor4 = document.createElement("a");
        btnAnchor4.href="#";

        btnAnchor4.append(btn_4)

        anchor9.append(img9);

        div9.append(anchor9,name9,price9,btnAnchor4);

        SKINCARE_BASICS.append(div9);
    })


    // <!-- SKINCARE BASICS ends here -->


    // <!-- EXPLORE starts here -->

    let arr10 = [
        {img:"https://d32baadbbpueqt.cloudfront.net/d803e183-b7ec-45a1-bcb3-7ef015031d62.jpg"},

        {img:"https://d32baadbbpueqt.cloudfront.net/86923ca0-0344-4f3f-b14c-9760e945c904.jpg"},

        {img:"https://d32baadbbpueqt.cloudfront.net/940d2ea8-8d4b-452e-93b8-be2bb952eedc.jpg"},

        {img:"https://d32baadbbpueqt.cloudfront.net/f2fdd7a2-9818-45b9-a7da-84d1fe75ae32.jpg"},

        {img:"https://d32baadbbpueqt.cloudfront.net/27067867-bbb1-4e59-95ef-0c6208529b66.jpg"},

        {img:"https://d32baadbbpueqt.cloudfront.net/a02b802e-a45c-48bc-a9e6-c7e760d94a8b.jpg"},

        {img:"https://d32baadbbpueqt.cloudfront.net/d9e9ae47-0d9d-41e7-b781-0f19c8e81e63.jpg"},

        {img:"https://d32baadbbpueqt.cloudfront.net/f2fdd7a2-9818-45b9-a7da-84d1fe75ae32.jpg"},

        {img:"https://d32baadbbpueqt.cloudfront.net/d803e183-b7ec-45a1-bcb3-7ef015031d62.jpg"},
        
    ]

let EXPLORE = document.querySelector(".EXPLORE");

arr10.map(({img})=>{
    let div10 = document.createElement("div");
    div10.className = "explore_slide";     

    let img10 = document.createElement("img");
    img10.src = img;   

    let anchor10 = document.createElement("a"); 
    anchor10.href="#";   

    anchor10.append(img10);

    div10.append(anchor10);

    EXPLORE.append(div10);
})

// <!-- EXPLORE ends here -->