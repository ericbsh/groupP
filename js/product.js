
// vue的東西
let data={
    index:0,
    src:'https://picsum.photos/300/200/?random=8',
    items:[    
        {img:'https://picsum.photos/300/200/?random=8',title:'標題001',creator:'噴火龍',price:'30,000',time:'2022/02/22'},
        {img:'https://picsum.photos/300/200/?random=10',title:'標題002',creator:'水箭龜',price:'60,000',time:'2032/02/22'},
        {img:'https://picsum.photos/300/200/?random=3',title:'標題003',creator:'水箭龜',price:'60,000',time:'2032/02/22'},
        {img:'https://picsum.photos/300/200/?random=2',title:'標題004',creator:'水箭龜',price:'60,000',time:'2032/02/22'},
        {img:'https://picsum.photos/300/200/?random=1',title:'標題005',creator:'水箭龜',price:'60,000',time:'2032/02/22'},
        {img:'https://picsum.photos/300/200/?random=4',title:'標題006',creator:'水箭龜',price:'60,000',time:'2032/02/22'},
        {img:'https://picsum.photos/300/200/?random=8',title:'標題001',creator:'噴火龍',price:'30,000',time:'2022/02/22'},
        {img:'https://picsum.photos/300/200/?random=9',title:'標題002',creator:'水箭龜',price:'60,000',time:'2032/02/22'},
        {img:'https://picsum.photos/300/200/?random=3',title:'標題003',creator:'水箭龜',price:'60,000',time:'2032/02/22'},
        {img:'https://picsum.photos/300/200/?random=2',title:'標題004',creator:'水箭龜',price:'60,000',time:'2032/02/22'},
        {img:'https://picsum.photos/300/200/?random=1',title:'標題005',creator:'水箭龜',price:'60,000',time:'2032/02/22'},
        {img:'https://picsum.photos/300/200/?random=4',title:'標題006',creator:'水箭龜',price:'60,000',time:'2032/02/22'},
    ]
}
let vm = new Vue({
    el:'#app',
    data: data,
    // 舊輪播
    // methods:{
    //     changeIndex:function(change){
    //         console.log(this.index)
    //         this.index= this.index+change;
    //         if(this.index<0){
    //             this.index=6
    //         }else if (this.index>6){
    //             this.index=0    
    //         }
    //     },
    // },
    methods:{
        // 輪播
        changeIndex:function(change){
            let carouselItem = document.querySelectorAll(".carouselItem");
            console.log(this.index)
            if(change==-1 && this.index>-7){
                this.index = this.index-1;
            }else if(change==1 && this.index<0){
                this.index = this.index+1;
            }
            let x=this.index*100;
            y = x+"%";
            if(this.index<=0 && this.index>=-7){
                for(let i=0; i<carouselItem.length; i++){
                    carouselItem[i].style.transform = `translateX(${y})`;
                }
            }
        }
    }
})
let vm2 = new Vue({
    el:"#app2",
    data:{
        productsData:[],
        products:[],
    },
    methods:{
                    // 控制篩選器
        selector(select){
            let productSelector = document.querySelector("#productSelector");
            productSelector.classList.toggle("displayNone");
        }
    },
    mounted(){
        axios.get('json/productItems.json').then((res)=>{
            console.log(res)
            this.productsData = res.data;
            console.log(this.productsData);
            this.products = this.productsData.slice(0,12);
            console.log(this.products);
        }).catch((err)=>{
            console.log(err)
        })
    }
})
$(document).ready(function(){
    // 加入收藏
    $('.like .pic img').click(function(e){
        $(this).toggleClass('active');
    });
});