import VueScratchCard from './packages/scratch-card/index.js';

const install = function(Vue , opts = {}){
    Vue.component(VueScratchCard.name , VueScratchCard);
}

//支持使用标签的方式引入
if(typeof window !== 'undefined' && window.Vue){
    install(window.Vue);
}

export default {
    install ,
    VueScratchCard
}