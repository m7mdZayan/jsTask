window.addEventListener('load',function(){

    // Home Page 
     main = document.getElementById('mainContent');
    var slider = 1;   //variable that's used to change backgrond image path

    function slideShow(){
        setInterval(function(){
             imgPath = `url(images/${slider}.jpg)`;
             main.style.backgroundImage = imgPath;
            slider++;
            if (slider === 5){
                slider = 1;
            }
        },3000)
    };               //slider function
    
    slideShow();    //executing the function
});
