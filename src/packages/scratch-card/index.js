import vueScratchCard from './scratch-card'

vueScratchCard.install = Vue => Vue.component(vueScratchCard.name , vueScratchCard);

if(typeof window !== 'undefined' && window.Vue){
    window.Vue.use(vueScratchCard);
}

export default vueScratchCard;