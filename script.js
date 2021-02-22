(()=>{"use strict";(()=>{const e="#17BFCC",t="#614A9E",r=[["Animals 1","Animals 2","Clothing","Emotions","Actions 1","Actions 2","Food","Nature"],[{word:"cat",translation:"кот",image:"cat.jpg",audioSrc:"cat.mp3"},{word:"chick",translation:"цыплёнок",image:"chick.jpg",audioSrc:"chick.mp3"},{word:"chicken",translation:"курица",image:"chicken.jpg",audioSrc:"chicken.mp3"},{word:"dog",translation:"собака",image:"dog.jpg",audioSrc:"dog.mp3"},{word:"horse",translation:"лошадь",image:"horse.jpg",audioSrc:"horse.mp3"},{word:"pig",translation:"свинья",image:"pig.jpg",audioSrc:"pig.mp3"},{word:"rabbit",translation:"кролик",image:"rabbit.jpg",audioSrc:"rabbit.mp3"},{word:"sheep",translation:"овца",image:"sheep.jpg",audioSrc:"sheep.mp3"}],[{word:"bird",translation:"птица",image:"bird.jpg",audioSrc:"bird.mp3"},{word:"fish",translation:"рыба",image:"fish1.jpg",audioSrc:"fish.mp3"},{word:"frog",translation:"жаба",image:"frog.jpg",audioSrc:"frog.mp3"},{word:"giraffe",translation:"жираф",image:"giraffe.jpg",audioSrc:"giraffe.mp3"},{word:"lion",translation:"лев",image:"lion.jpg",audioSrc:"lion.mp3"},{word:"mouse",translation:"мышь",image:"mouse.jpg",audioSrc:"mouse.mp3"},{word:"turtle",translation:"черепаха",image:"turtle.jpg",audioSrc:"turtle.mp3"},{word:"dolphin",translation:"дельфин",image:"dolphin.jpg",audioSrc:"dolphin.mp3"}],[{word:"skirt",translation:"юбка",image:"skirt.jpg",audioSrc:"skirt.mp3"},{word:"pants",translation:"брюки",image:"pants.jpg",audioSrc:"pants.mp3"},{word:"blouse",translation:"блузка",image:"blouse.jpg",audioSrc:"blouse.mp3"},{word:"dress",translation:"платье",image:"dress.jpg",audioSrc:"dress.mp3"},{word:"boot",translation:"ботинок",image:"boot.jpg",audioSrc:"boot.mp3"},{word:"shirt",translation:"рубашка",image:"shirt.jpg",audioSrc:"shirt.mp3"},{word:"coat",translation:"пальто",image:"coat.jpg",audioSrc:"coat.mp3"},{word:"shoe",translation:"туфли",image:"shoe.jpg",audioSrc:"shoe.mp3"}],[{word:"sad",translation:"грустный",image:"sad.jpg",audioSrc:"sad.mp3"},{word:"angry",translation:"сердитый",image:"angry.jpg",audioSrc:"angry.mp3"},{word:"happy",translation:"счастливый",image:"happy.jpg",audioSrc:"happy.mp3"},{word:"tired",translation:"уставший",image:"tired.jpg",audioSrc:"tired.mp3"},{word:"surprised",translation:"удивлённый",image:"surprised.jpg",audioSrc:"surprised.mp3"},{word:"scared",translation:"испуганный",image:"scared.jpg",audioSrc:"scared.mp3"},{word:"smile",translation:"улыбка",image:"smile.jpg",audioSrc:"smile.mp3"},{word:"laugh",translation:"смех",image:"laugh.jpg",audioSrc:"laugh.mp3"}],[{word:"cry",translation:"плакать",image:"cry.jpg",audioSrc:"cry.mp3"},{word:"dance",translation:"танцевать",image:"dance.jpg",audioSrc:"dance.mp3"},{word:"dive",translation:"нырять",image:"dive.jpg",audioSrc:"dive.mp3"},{word:"draw",translation:"рисовать",image:"draw.jpg",audioSrc:"draw.mp3"},{word:"fish",translation:"ловить рыбу",image:"fish.jpg",audioSrc:"fish.mp3"},{word:"fly",translation:"летать",image:"fly.jpg",audioSrc:"fly.mp3"},{word:"hug",translation:"обнимать",image:"hug.jpg",audioSrc:"hug.mp3"},{word:"jump",translation:"прыгать",image:"jump.jpg",audioSrc:"jump.mp3"}],[{word:"open",translation:"открывать",image:"open.jpg",audioSrc:"open.mp3"},{word:"play",translation:"играть",image:"play.jpg",audioSrc:"play.mp3"},{word:"point",translation:"указывать",image:"point.jpg",audioSrc:"point.mp3"},{word:"ride",translation:"ездить",image:"ride.jpg",audioSrc:"ride.mp3"},{word:"run",translation:"бегать",image:"run.jpg",audioSrc:"run.mp3"},{word:"sing",translation:"петь",image:"sing.jpg",audioSrc:"sing.mp3"},{word:"skip",translation:"пропускать, прыгать",image:"skip.jpg",audioSrc:"skip.mp3"},{word:"swim",translation:"плавать",image:"swim.jpg",audioSrc:"swim.mp3"}],[{word:"bacon",translation:"бекон",image:"bacon.jpg",audioSrc:"bacon.mp3"},{word:"bread",translation:"хлеб",image:"bread.jpg",audioSrc:"bread.mp3"},{word:"chocolate",translation:"шоколад",image:"chocolate.jpg",audioSrc:"chocolate.mp3"},{word:"cake",translation:"торт",image:"cake.jpg",audioSrc:"cake.mp3"},{word:"soup",translation:"суп",image:"soup.jpg",audioSrc:"soup.mp3"},{word:"seafood",translation:"морепродукты",image:"seafood.jpg",audioSrc:"seafood.mp3"},{word:"pasta",translation:"макароны",image:"pasta.jpg",audioSrc:"pasta.mp3"},{word:"sandwich",translation:"бутерброт",image:"sandwich.jpg",audioSrc:"sandwich.mp3"}],[{word:"sea",translation:"море",image:"sea.jpg",audioSrc:"sea.mp3"},{word:"desert",translation:"пустыня",image:"desert.jpg",audioSrc:"desert.mp3"},{word:"beach",translation:"пляж",image:"beach.jpg",audioSrc:"beach.mp3"},{word:"flower",translation:"цветок",image:"flower.jpg",audioSrc:"flower.mp3"},{word:"river",translation:"река",image:"river.jpg",audioSrc:"river.mp3"},{word:"forest",translation:"лес",image:"forest.jpg",audioSrc:"forest.mp3"},{word:"mountain",translation:"гора",image:"mountain.jpg",audioSrc:"mountain.mp3"},{word:"meadow",translation:"луг",image:"meadow.jpg",audioSrc:"meadow.mp3"}]],a={categories:[],categoryCards:null,container:null,init:function(){this.container=document.querySelector("[data-content]"),this.categoryCards=document.createElement("div"),this.categoryCards.className="category-cards",this.categoryCards.appendChild(this.createCards()),this.container.appendChild(this.categoryCards),this.loadSelectedCategory()},createCards:function(){var e=this,t=document.createDocumentFragment();return r[0].forEach((function(r,a){var n=document.createElement("div"),i=document.createElement("div"),o=document.createElement("div");e.categories.push(n),n.className="category-cards__item",i.className="category-cards__img",o.className="category-cards__descr",i.style.backgroundImage="url(./assets/category-".concat(a+1,".jpg)"),o.textContent=r,n.appendChild(i),n.appendChild(o),t.appendChild(n)})),p(),t},loadSelectedCategory:function(){var e=this;this.categories.forEach((function(t,r){t.addEventListener("click",(function(){b(t.textContent),m.init(r),e.container.removeChild(e.categoryCards),e.categoryCards=null,e.categories=[]}))}))},reset:function(){this.categories=[],this.categoryCards=null,this.container=null}},n={button:{started:!1,element:null},container:null,currentMixedCardsInx:[],currentCard:null,wrongAnswers:0,resultsField:null,firstAttemp:!0,init:function(){var e=this;this.container=document.querySelector("[data-content]");var t=document.createElement("div");this.button.element=document.createElement("button"),t.className="play-controls",this.button.element.className="play-controls__btn",this.button.element.innerHTML="start game",t.appendChild(this.button.element),this.container.appendChild(t),this.button.element.addEventListener("click",(function(){if(e.button.started){var t=m.properties.categoryItems[e.currentCard];new Audio("./assets/".concat(r[t.categoryID][t.cardID].audioSrc)).play()}else e.button.started=!e.button.started,e.button.element.innerHTML='<i class = "fas fa-sync-alt"></i>',e.button.element.animate([{width:"130px"},{width:"85px"},{width:"55px"}],{duration:500}),e.button.element.style.width="55px",e.startGame()}))},startGame:function(){this.resultsField=document.createElement("div"),this.resultsField.className="results-field",this.container.appendChild(this.resultsField),this.randomizeCards(),this.playNextCard(),this.getHitOrMiss()},randomizeCards:function(){for(var e=0,t=m.properties.categoryItems.length;e<t;){var r=Math.floor(Math.random()*t);this.currentMixedCardsInx.includes(r)||(this.currentMixedCardsInx.push(r),e+=1)}},playNextCard:function(){this.currentCard=this.currentMixedCardsInx.pop();var e=m.properties.categoryItems[this.currentCard],t=new Audio("./assets/".concat(r[e.categoryID][e.cardID].audioSrc));setTimeout((function(){t.play()}),1e3),this.recordStatistics("asked")},getHitOrMiss:function(){var e=this;m.properties.categoryItems.forEach((function(t,r){t.element.addEventListener("click",(function(){if(r===e.currentCard){t.element.classList.add("disabled");var a=document.createElement("i");a.className="fas fa-star results-field__star correct",e.resultsField.prepend(a),new Audio("./assets/correct.mp3").play(),e.firstAttemp?e.recordStatistics("hit"):e.firstAttemp=!0,e.currentCard=null,e.currentMixedCardsInx.length>0?e.playNextCard():setTimeout((function(){e.finishGame()}),1e3)}else{var n=document.createElement("i");n.className="fas fa-star results-field__star incorrect",e.resultsField.prepend(n),new Audio("./assets/error.mp3").play(),e.wrongAnswers+=1,e.firstAttemp&&e.recordStatistics("miss"),e.firstAttemp=!1}}))}))},recordStatistics:function(e){var t=m.properties.categoryItems[this.currentCard],a="".concat(r[t.categoryID][t.cardID].word,"|").concat(r[0][t.categoryID-1]);if(localStorage.getItem(a)){var n=JSON.parse(localStorage.getItem(a));n[e]+=1,localStorage.setItem(a,JSON.stringify(n))}else{var i={train:0,asked:0,hit:0,miss:0};i[e]+=1,localStorage.setItem(a,JSON.stringify(i))}},finishGame:function(){for(;this.container.children.length>0;)this.container.children[0].remove();this.loadResults()},loadResults:function(){var e=this,t=document.createElement("div"),r=document.createElement("img"),n=document.createElement("p");if(t.className="results",r.className="results__img",n.className="results__message",t.appendChild(r),t.appendChild(n),this.container.appendChild(t),0===this.wrongAnswers)r.src="./assets/win.png",n.textContent="You win!",new Audio("./assets/success.mp3").play();else{var i=document.createElement("p");i.className="results__mistakes-count",i.innerHTML="Mistakes count: ".concat(this.wrongAnswers),this.container.appendChild(i),r.src="./assets/lose.png",n.textContent="You lose!",new Audio("./assets/failure.mp3").play()}setTimeout((function(){for(;e.container.children.length>0;)e.container.children[0].remove();e.resetGameStat(),a.init(),b("Main")}),3e3)},resetGameStat:function(){this.button.started=!1,this.button.element=null,this.currentMixedCardsInx=[],this.currentCard=null,this.wrongAnswers=0,m.properties.categoryItems=[]}},i={properties:{container:null,headerElements:["Word","Translation","Category","Train","Asked","Hit","Miss","Hit %"],words:[]},sorting:{sortKeyIndex:2,direction:!1},init:function(){var e=this;this.properties.container=document.querySelector("[data-content]");var t=document.createElement("div"),r=document.createElement("table"),a=document.createElement("thead"),n=document.createElement("tr"),i=document.createElement("tbody");t.className="scroll-wrapper",r.className="statistics-table",a.className="statistics-table__head",i.className="statistics-table__body",l&&a.classList.add("statistics-table__head--play"),this.properties.headerElements.forEach((function(t,r){var a=document.createElement("th");a.className="statistics-table__head-item cell",a.textContent=t,n.appendChild(a),a.addEventListener("click",(function(){e.sortTable(r)}))})),a.appendChild(n),i.appendChild(this.loadData()),r.appendChild(a),r.appendChild(i),t.appendChild(r),this.properties.container.appendChild(this.createControlBtns()),this.properties.container.appendChild(t)},loadData:function(){var e=this,t=document.createDocumentFragment();return 0===this.properties.words.length&&r[0].forEach((function(t,a){var n=t;r[a+1].forEach((function(r){var a;if(localStorage.getItem("".concat(r.word,"|").concat(t))){var i,o=JSON.parse(localStorage.getItem("".concat(r.word,"|").concat(t)));i=o.asked?(100*o.hit/o.asked).toFixed():0,a=[r.word,r.translation,n,o.train,o.asked,o.hit,o.miss,i]}else a=[r.word,r.translation,n,0,0,0,0,0];e.properties.words.push(a)}))})),this.properties.words.forEach((function(e){var r=document.createElement("tr");r.className="statistics-table__body-row",e.forEach((function(e){var t=document.createElement("td");t.className="statistics-table__body-item cell",t.textContent=e,r.appendChild(t)})),t.appendChild(r)})),t},sortTable:function(e){switch(e){case 0:case 1:case 2:this.sorting.sortKeyIndex!==e?(this.properties.words.sort((function(t,r){return t[e].localeCompare(r[e])})),this.sorting.sortKeyIndex=e,this.sorting.direction=!0):this.sorting.direction?(this.properties.words.sort((function(t,r){return r[e].localeCompare(t[e])})),this.sorting.direction=!1):(this.properties.words.sort((function(t,r){return t[e].localeCompare(r[e])})),this.sorting.direction=!0);break;default:this.sorting.sortKeyIndex!==e?(this.properties.words.sort((function(t,r){return r[e]-t[e]})),this.sorting.sortKeyIndex=e,this.sorting.direction=!0):this.sorting.direction?(this.properties.words.sort((function(t,r){return t[e]-r[e]})),this.sorting.direction=!1):(this.properties.words.sort((function(t,r){return r[e]-t[e]})),this.sorting.direction=!0)}for(;this.properties.container.children.length>0;)this.properties.container.children[0].remove();this.init()},createControlBtns:function(){var e=this,t=document.createDocumentFragment(),r=document.createElement("div"),a=document.createElement("button"),n=document.createElement("button");return r.className="controls",a.className="controls__btn controls__repeat-words-btn",n.className="controls__btn controls__reset-btn",l&&(a.classList.add("controls__btn--play"),n.classList.add("controls__btn--play")),a.textContent="Repeat Difficult Words",n.textContent="Reset",r.appendChild(a),r.appendChild(n),t.appendChild(r),n.addEventListener("click",(function(){for(localStorage.clear();e.properties.container.children.length>0;)e.properties.container.children[0].remove();e.properties.words=[],e.sorting.sortKeyIndex=2,e.sorting.direction=!1,e.init()})),a.addEventListener("click",(function(){return e.repeatDifficalsWords()})),t},repeatDifficalsWords:function(){b("remove");var e=[],t=[],a=[];for(this.properties.words.forEach((function(t){t[6]>0&&e.push(t)})),e.length>8?(e.forEach((function(e){var t=(100*e[6]/e[4]).toFixed(2);e.push(t)})),e.sort((function(e,t){return t[8]-e[8]})),t=e.slice(0,8)):t=e,t.forEach((function(e){var t=r[0].indexOf(e[2])+1,n=r[t].findIndex((function(t){return t.word===e[0]})),i=r[t][n];i.categoryID=t,i.cardID=n,a.push(i)}));this.properties.container.children.length>0;)this.properties.container.children[0].remove();this.properties.words=[],this.sorting.sortKeyIndex=2,this.sorting.direction=!1,m.trainDifficult(a)}};var o=document.querySelector("[data-switcher]"),s=document.querySelector("[data-switcher-circle]"),c=document.querySelector(".header-controls__switcher-text"),d=document.querySelector("[data-content]"),l=!1;function p(){if(l)a.categories.forEach((function(e){e.style.backgroundColor=t})),m.properties.categoryItems.forEach((function(e){var t=e.element.childNodes[0].childNodes[0];t.style.width="100%",t.style.height="100%",e.element.childNodes[0].childNodes[1].style.display="none"})),m.properties.categoryItems.length>0&&n.init();else{if(a.categories.forEach((function(t){t.style.backgroundColor=e})),m.properties.categoryItems.forEach((function(e){var t=e.element.childNodes[0].childNodes[0];t.style.width="",t.style.height="",e.element.childNodes[0].childNodes[1].style.display=""})),m.properties.categoryItems.length>0)for(;d.children.length>1;)d.children[1].remove();if(n.button.started){var r=m.properties.currentCategory;n.resetGameStat(),setTimeout((function(){for(;d.children.length>0;)d.children[0].remove();m.init(r)}),500)}}}o.addEventListener("click",(function(){o.classList.toggle("header-controls__switcher--play"),l?s.animate([{right:"auto",left:"60%"},{right:"auto",left:"20%"}],{duration:100}):s.animate([{left:"auto",right:"60%"},{left:"auto",right:"20%"}],{duration:100}),s.classList.toggle("header-controls__switcher-circle--play"),c.classList.toggle("header-controls__switcher-text--play"),"Train"===c.textContent?c.textContent="Play":c.textContent="Train",document.querySelector(".header-controls__nav").classList.toggle("header-controls__nav--play"),document.querySelectorAll(".header-controls__stripe").forEach((function(e){return e.classList.toggle("header-controls__stripe--play")})),document.querySelector(".footer-descr").classList.toggle("footer-descr--play"),i.properties.words.length>0&&(document.querySelector(".statistics-table__head").classList.toggle("statistics-table__head--play"),document.querySelectorAll(".controls__btn").forEach((function(e){e.classList.toggle("controls__btn--play")}))),l=!l,p()}));const m={properties:{categoryItems:[],backSide:!1,currentCategory:0,difficultWords:[]},init:function(e){var t=document.querySelector("[data-content]"),r=document.createElement("div");if(r.className="flash-cards",r.appendChild(this.createFlashCards(e)),-1===e&&0===this.properties.difficultWords.length){var a=document.createElement("p");a.className="flash-cards__message",a.textContent="No difficult words to train yet!",r.appendChild(a)}t.appendChild(r),this.properties.currentCategory=e,this.setInteraction(),l&&p()},createFlashCards:function(e){var t=this,a=document.createDocumentFragment();return(-1===e?this.properties.difficultWords:r[e+1]).forEach((function(r,n){var i=document.createElement("div"),o=document.createElement("div"),s=document.createElement("div"),c=document.createElement("div"),d=document.createElement("div"),l=document.createElement("div"),p=document.createElement("div"),m=document.createElement("span"),u=document.createElement("span"),h=document.createElement("i");i.className="flash-cards__item",c.className="flash-cards__img",d.className="flash-cards__img",l.className="flash-cards__descr",p.className="flash-cards__descr",h.className="fas fa-sync-alt",o.className="flash-cards__front",s.className="flash-cards__back",h.classList.add("flash-cards-arrow"),m.textContent=r.word,u.textContent=r.translation,c.style.backgroundImage="url(./assets/".concat(r.image,")"),d.style.backgroundImage="url(./assets/".concat(r.image,")"),l.appendChild(m),l.appendChild(h),o.appendChild(c),o.appendChild(l),p.appendChild(u),s.appendChild(d),s.appendChild(p),i.appendChild(o),i.appendChild(s);var g={};-1===e?(g.element=i,g.categoryID=r.categoryID,g.cardID=r.cardID):(g.element=i,g.categoryID=e+1,g.cardID=n),h.addEventListener("click",(function(){t.properties.backSide=!0,h.style.display="none",i.style.transform="rotateY(180deg)",i.addEventListener("mouseleave",(function(){i.style.transform="none",h.style.display="",t.properties.backSide=!1}))})),t.properties.categoryItems.push(g),a.appendChild(i)})),a},setInteraction:function(){var e=this;this.properties.categoryItems.forEach((function(t){t.element.addEventListener("click",(function(){if(e.properties.backSide||l||(e.properties.categoryItems.forEach((function(e){e.element.style.pointerEvents="none"})),new Audio("./assets/".concat(r[t.categoryID][t.cardID].audioSrc)).play(),setTimeout((function(){e.properties.categoryItems.forEach((function(e){e.element.style.pointerEvents=""}))}),400)),!l){var a="".concat(r[t.categoryID][t.cardID].word,"|").concat(r[0][t.categoryID-1]);if(localStorage.getItem(a)){var n=JSON.parse(localStorage.getItem(a));n.train+=1,localStorage.setItem(a,JSON.stringify(n))}else localStorage.setItem(a,JSON.stringify({train:1,asked:0,hit:0,miss:0}))}}))}))},trainDifficult:function(e){var t=this;e.forEach((function(e){t.properties.difficultWords.push(e)})),this.init(-1)},reset:function(){this.properties.categoryItems=[],this.properties.backSide=!1,this.properties.currentCategory=0,this.properties.difficultWords=[]}};var u=document.querySelector("[data-burger]"),h=document.querySelectorAll("[data-burger-stripe]"),g=document.querySelector("[data-close]"),f=document.querySelector(".header-controls__nav"),y=document.querySelector(".blackout"),w=[];function v(){h.forEach((function(e){e.classList.remove("header-controls__stripe--active")})),u.style.opacity="",f.classList.remove("header-controls__nav--active"),y.classList.remove("blackout--active"),document.body.classList.remove("lock")}u.addEventListener("mouseover",(function(){h.forEach((function(e){e.classList.add("burger-menu--hover")}))})),u.addEventListener("mouseout",(function(){h.forEach((function(e){e.classList.remove("burger-menu--hover")}))})),u.addEventListener("click",(function(){h.forEach((function(e){e.classList.toggle("header-controls__stripe--active")})),u.style.opacity="0",f.classList.toggle("header-controls__nav--active"),y.classList.toggle("blackout--active"),document.body.classList.toggle("lock")})),y.addEventListener("click",v),g.addEventListener("click",v);var S=["Main","Animals 1","Animals 2","Clothing","Emotions","Actions 1","Actions 2","Food","Nature","Statistics"],_=["1-menu.png","2-menu.png","3-menu.png","4-menu.png","5-menu.png","6-menu.png","7-menu.png","8-menu.png","9-menu.png","10-menu.png"],C=document.querySelector("[data-header-menu]");function b(e){if(w.forEach((function(e){return e.classList.remove("header-controls__menu-link--active")})),"remove"!==e){var t=S.indexOf(e);w[t].classList.add("header-controls__menu-link--active")}}S.forEach((function(e,t){var r=document.createElement("li");r.className="header-controls__menu-item",r.classList.add("header-controls__menu-link"),r.innerHTML='<img class="header-controls__menu-icon" src="assets/'.concat(_[t],'" alt="menu icon"> ').concat(e),0===t&&r.classList.add("header-controls__menu-link--active"),C.appendChild(r),w.push(r),r.addEventListener("click",(function(){var e=document.querySelector("[data-content]");for(document.querySelectorAll(".header-controls__menu-item").forEach((function(e){return e.classList.remove("header-controls__menu-link--active")})),r.classList.add("header-controls__menu-link--active");e.children.length>0;)e.children[0].remove();i.properties.words&&(i.properties.words=[]),m&&m.reset(),a&&a.reset(),n.resetGameStat(),0===t?a.init():t===S.length-1?i.init():m.init(t-1),v()}))})),a.init()})()})();
//# sourceMappingURL=script.js.map