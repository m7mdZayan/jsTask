window.addEventListener('load',function(){
    var parent = document.getElementById('parentNode'),  // main tag
        postsRequest = new XMLHttpRequest(); //requset that will get the data
    postsRequest.open('GET','http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&pretty=true&postText={randomString|100}&age={randomNumber|60}',false);
    postsRequest.send();
    var posts = JSON.parse(postsRequest.responseText); //the data stored now in posts(array) 
    

    function postTemplate(post){
        return `<section class="post">
                    <img id="photo" src="https://via.placeholder.com/50">
                    <h2>${post.fname} ${post.lname}</h2>
                     <p>${post.postText}</p>
                     <span>age: ${post.age}</span>
                     <button class="like">like</button>
                     <button class="remove">remove</button>
                </section>`;
    };  // function that will return the data with its tags

    parent.innerHTML = `<h1 class="title">you have ${posts.length} news posts </h1>
                        ${posts.map(postTemplate).join('')}
                        `; //put the data into the container(main tag)

    var likeBtn = document.querySelectorAll('.like');
    var removeBtn = document.querySelectorAll('.remove');

    for (var i =0 ;i <= likeBtn.length -1; i++){
        likeBtn[i].addEventListener('click',function(e){
            this.innerHTML = "liked";
            this.style.color ="blue"; 
        });
    };                      // make like buutons changes when it's clicked

    for(var j = 0;j<= removeBtn.length -1;j++){
        removeBtn[j].addEventListener('click',function(e){
            var sec = this.parentNode;
            sec.parentNode.removeChild(sec);
        });
    };                    //make the remove buttons remove its post
});