export const products = [
 {slug:'ambre-nocturne',name:'Ambre Nocturne',family:'Amber',description:'The warmth of a lingering evening. Golden amber meets the quiet mystery of smoked woods and Madagascar vanilla.',notes:['Bergamot','Jasmine','Amber'],color:'#ad7135',price:145},
 {slug:'rose-eternelle',name:'Rose Éternelle',family:'Floral',description:'A rose without beginning or end. Bulgarian petals unfold into soft musk and a whisper of sandalwood.',notes:['Pink pepper','Rose','White musk'],color:'#b67875',price:155},
 {slug:'bois-sacre',name:'Bois Sacré',family:'Woody',description:'A walk through an ancient forest. Sacred sandalwood, earthy vetiver and the warmth of cedar.',notes:['Cardamom','Cedar','Sandalwood'],color:'#6a714f',price:165},
 {slug:'lumiere-dor',name:"Lumière d’Or",family:'Citrus',description:'The first light over the Mediterranean. Sunlit citrus and neroli, resting on a delicate amber base.',notes:['Mandarin','Neroli','Amber'],color:'#d7a43e',price:135},
 {slug:'velours-noir',name:'Velours Noir',family:'Woody',description:'An intimate study in contrasts. Smoky oud wrapped in violet, leather and tender vanilla.',notes:['Saffron','Violet','Oud'],color:'#635168',price:185},
 {slug:'jasmin-de-lune',name:'Jasmin de Lune',family:'Floral',description:'Night-blooming jasmine beneath a silver sky. A luminous floral with a soft, sensual trail.',notes:['Citrus','Jasmine','Vanilla'],color:'#b7a57b',price:150}
];
export type Product = typeof products[number];
export const money=(n:number)=>new Intl.NumberFormat('en-IE',{style:'currency',currency:'EUR',maximumFractionDigits:0}).format(n);
export const sizes=[30,50,100];
export const priceFor=(base:number,size:number)=>base+(size===100?65:size===30?-40:0);
