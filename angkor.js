

(function(){
    //If you want to include more images, add the link name and URL of the image in the array list below.
        let images_list = [
            {"url":"https://html-generator.com/uploads/images/2022/05/18/30894UIHL1630SM.jpg","name":"30894UIHL1630SM.jpg","link":""},
            {"url":"https://html-generator.com/uploads/images/2022/05/18/29130U6GWACH0GH.jpg","name":"29130U6GWACH0GH.jpg","link":""},
            {"url":"https://html-generator.com/uploads/images/2022/05/18/28416P6ZBEC62MI.jpg","name":"28416P6ZBEC62MI.jpg","link":""},
            {"url":"https://html-generator.com/uploads/images/2022/05/18/297575ND__EV08W.jpg","name":"297575ND__EV08W.jpg","link":""},
            {"url":"https://html-generator.com/uploads/images/2022/05/18/30047GW1AM_6EF9.jpg","name":"30047GW1AM_6EF9.jpg","link":""},
            {"url":"https://html-generator.com/uploads/images/2022/05/18/31941BMV1D4SP57.jpg","name":"31941BMV1D4SP57.jpg","link":""},
            {"url":"https://html-generator.com/uploads/images/2022/05/18/32551LU3X85D0R3.jpg","name":"32551LU3X85D0R3.jpg","link":""},
            {"url":"https://html-generator.com/uploads/images/2022/05/18/33652KNZWC74M23.jpg","name":"33652KNZWC74M23.jpg","link":""},
            {"url":"https://html-generator.com/uploads/images/2022/05/18/340961E8OSVZSP5.jpg","name":"340961E8OSVZSP5.jpg","link":""},
            {"url":"https://html-generator.com/uploads/images/2022/05/18/83630ABUJ4QUZDB.jpg","name":"83630ABUJ4QUZDB.jpg","link":""},
            {"url":"https://html-generator.com/uploads/images/2022/05/18/84306O2PP4V995K.jpg","name":"84306O2PP4V995K.jpg","link":""},
            {"url":"https://html-generator.com/uploads/images/2022/05/18/85084O9REPHE62K.jpg","name":"85084O9REPHE62K.jpg","link":""},
            {"url":"https://html-generator.com/uploads/images/2022/05/18/85883NE3XM8BFYA.jpg","name":"85883NE3XM8BFYA.jpg","link":""},
            {"url":"https://html-generator.com/uploads/images/2022/05/18/88290Z0JOSVKTGH.jpg","name":"88290Z0JOSVKTGH.jpg","link":""},
            {"url":"https://html-generator.com/uploads/images/2022/05/18/89531LI_US7ER3V.jpg","name":"89531LI_US7ER3V.jpg","link":""},
            {"url":"https://html-generator.com/uploads/images/2022/05/18/90172IOCIXSGSH2.jpg","name":"90172IOCIXSGSH2.jpg","link":""},
            {"url":"https://html-generator.com/uploads/images/2022/05/18/90858IDH7MRPHUK.jpg","name":"90858IDH7MRPHUK.jpg","link":""},
            {"url":"https://html-generator.com/uploads/images/2022/05/18/93382NYYC3P9U8Q.jpg","name":"93382NYYC3P9U8Q.jpg","link":""},
            {"url":"https://html-generator.com/uploads/images/2022/05/18/10871YWWDZWLARF.jpg","name":"10871YWWDZWLARF.jpg","link":""},
            {"url":"https://html-generator.com/uploads/images/2022/05/18/831197WXCWVKBB2.jpg","name":"831197WXCWVKBB2.jpg","link":""}
        ];
    
        let slider_id = document.querySelector("#hcg-slider-1");
    
        // append all images
        let dots_div = "";
        let images_div = "";
        for (let i = 0; i < images_list.length; i++) {
            // if no link without href="" tag
            let href = (images_list[i].link == "" ? "":' href="'+images_list[i].link+'"');
            images_div += '<a'+href+' class="hcg-slides animated"'+(i === 0 ? ' style="display:block"':'')+'>'+
                            '<span class="hcg-slide-number">'+(i+1)+'/'+images_list.length+'</span>'+
                            '<img src="'+images_list[i].url+'" alt="'+images_list[i].name+'">'+
                         '</a>';
            dots_div += '<span class="hcg-slide-dot'+(i === 0 ? ' dot-active':'')+'" data-id="'+i+'"></span>';
        }
        slider_id.querySelector(".hcg-slider-body").innerHTML = images_div;
        slider_id.querySelector(".hcg-slide-dot-control").innerHTML = dots_div;
    
        let slide_index = 0;
    
        let images = slider_id.querySelectorAll(".hcg-slides");
        let dots = slider_id.querySelectorAll(".hcg-slide-dot");
        let prev_button = slider_id.querySelector(".hcg-slide-prev");
        let next_button = slider_id.querySelector(".hcg-slide-next");
    
        function showSlides() {
            if (slide_index > images.length-1) {
                slide_index = 0;
            }
            if (slide_index < 0) {
                slide_index = images.length-1;
            }
            for (let i = 0; i < images.length; i++) {
                images[i].style.display = "none";
                dots[i].classList.remove("dot-active");
                if (i == slide_index) {
                    images[i].style.display = "block";
                    dots[i].classList.add("dot-active");
                }
            }
        }
    
        prev_button.addEventListener("click", function(event) {
            event.preventDefault();
            slide_index--;
            showSlides();
        }, false);
    
        next_button.addEventListener("click", function(event){
            event.preventDefault();
            slide_index++;
            showSlides();
        }, false);
    
        function dot_click(event) {
            slide_index = event.target.dataset.id;
            showSlides();
        }
    
        for (let i = 0; i < dots.length; i++) {
            dots[i].addEventListener("click", dot_click, false);
        }
    })();


const prevScrollpos = window.pageYOffset;
window.onscroll = function() {
const currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("nav").style.bottom = "0";
  } else {
    document.querySelector("nav").style.bottom = "-100px";
  }
  prevScrollpos = currentScrollPos;
}