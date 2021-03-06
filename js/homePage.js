// 滑鼠負片效果(待寫)
// var c= document.querySelector('.cursor');
// function pos(e){
// 	c.style.left=e.clientX+"px";
// 	c.style.top=e.clientY+'px';
// }
// window.addEventListener("mousemove",pos)
window.addEventListener('load',function(){
	gsap.registerPlugin(ScrollTrigger);
   //  取得螢幕寬度
	var windowWidth = window.innerWidth;
	   // 介紹區
	   let t2 =gsap.timeline({
		   scrollTrigger:{
			   trigger:".homeIntro .intro",
			   start:"top top",
			   end:"40% top",
			   scrub:true,
			   pin:".homeIntro",
			   pinSpace:true,
			   // markers:true,
			   // id:"介紹區"
		   },
	   });
	   if(windowWidth >= 768){
		   t2.from(".homeIntro .intro .pic",{
			   left:"100%",
		   });
		   t2.to(".homeIntro .intro .pic",{
			   left:"50%",
		   });
	   }else{
		   t2.from(".homeIntro .intro .pic",{
			   left:"100%",
		   });
		   t2.to(".homeIntro .intro .pic",{
			   left:"30%",
		   });
	   }
   
   
   // 分類區
   let sections = gsap.utils.toArray(".homeCatalog .cardDing");
   gsap.to(sections, {
	   xPercent: -100 * (sections.length - 1),
	   ease: "none",
	   scrollTrigger: {
		   trigger: ".homeCatalog",
		   pin: ".homeCatalog",
		   scrub: true,
		   snap: 1 / (sections.length - 1),
		   // endTrigger:".homeGallery",
		   // end:"bottom top",
		   // markers:true,
		   // id:"分類區"
	   }
   });
   // 分類圖片下移區
   gsap.to(".homeCatalog .catalog .brame .pic img", {
	   y:1000,
	   ease: "none",
	   scrollTrigger: {
		   trigger: ".homeGallery",
		   start:"top bottom",
		   // pin: ".homeGallery",
		   scrub: true,
		   endTrigger:".homeGallery",
		   end:"+=1200px",
		   // markers:true,
		   // id:"分類圖片下移區",
		   // pinSpacing:false
	   }
   });
   
   // 滑動區圖片下移
   let t3 = gsap.timeline({
	   scrollTrigger:{
		   trigger: ".scrollDown",
		   start:"-20% top",
		   // pin: true,
		   scrub: true,
		   endTrigger: ".homeMember",
		   end:"top top",
		   // markers:true,
		   // id:"滑-1"
	   }
   });
   
   if(windowWidth>=768){
	   t3.to(".scrollDown .scrollPic",{
		   bottom:"10%"
	   });
   }else{
	   t3.to(".scrollDown .scrollPic",{
		   bottom:"15%"
	   });
   }
   // 滑動區卡片彈出
   gsap.fromTo(
	   ".homeGallery .txt",
	   {
		'webkitFilter': 'blur(1px)',
		opacity: 0,
		scale:0,
	   },
	   {
		 opacity: 1,
		 scale:1,
		 'webkitFilter': 'blur(0px)',
		 ease: "Expo.easeOut",
		 scrollTrigger: {
		   trigger: ".homeGallery",
			   start:"-50% top",
			   // pin: true,
			   scrub: true,
			   endTrigger: ".homeGallery",
			   end:"center top",
			   // markers:true,
			   // id:"滑-1"
			 }
	   }
	 );
   gsap.fromTo(
	   ".homeMember .txt",
	   {
		 'webkitFilter': 'blur(1px)',
		 opacity: 0,
		 scale:0.2,
	   },
	   {
		 'webkitFilter': 'blur(0px)',
		 opacity: 1,
		 scale:1,
		 ease: "Expo.easeOut",
		 scrollTrigger: {
		   trigger: ".homeMember",
			   start:"-50% top",
			   // pin: true,
			   scrub: true,
			   endTrigger: ".homeMember",
			   end:"center top",
			   // markers:true,
			   // id:"滑-1"
			 }
	   }
	 );
   
   // 新聞裝飾圖片
   gsap.fromTo(
	   ".homeNews .newsContain",
	   {
		 opacity: 0,
		 scale:0.2,
		 rotation:0,
	   },
	   {
		 opacity: 1,
		 scale:1,
		 rotation:720,
		 ease: "Elastic.easeOut.config(1 0.3)",
		 scrollTrigger: {
		   trigger: ".homeNews",
		   start:"-50% top",
		   endTrigger:".homeNews",
		   end:"10% top",
		   scrub: true,
			 }
	   }
	 );
   gsap.to(".homeNews .decorate.Pictopleft", {
	   xPercent:10,
	   rotation:90,
	   ease: "none",
	   scrollTrigger: {
		   trigger: ".homeNews",
		   scrub: true,
		   
	   }
   });
   gsap.to(".homeNews .decorate.Pictopright", {
	   xPercent:-30,
	   rotation:-90,
	   ease: "none",
	   scrollTrigger: {
		   trigger: ".homeNews",
		   scrub: true,
	   }
   });
   gsap.to(".homeNews .decorate.Picbottomleft", {
	   xPercent:70,
	   yPercent:-20,
	   rotation:90,
	   ease: "none",
	   scrollTrigger: {
		   trigger: ".homeNews",
		   start:"top top",
		   scrub: true,
		   // markers:true,
		   // id:"新聞裝飾",
	   },
   });
   gsap.to(".homeNews .decorate.Picbottomright", {
	   xPercent:-30,
	   ease: "none",
	   scrollTrigger: {
		   trigger: ".homeNews",
		   start:"top top",
		   scrub: true,
	   }
   });
   
   ScrollTrigger.refresh();
});




