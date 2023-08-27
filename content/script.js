// creating post
function post(ev) {
    ev.preventDefault();

    let postclass= document.querySelector(".post-container");

    // let postDiv= document.createElement("div");
    // let postTitle= document.createElement("h4");
    // let postContent= document.createElement("p");
    // let postImage= document.createElement("img");
    // let deletebutton= document.createElement("button");

    // postTitle.textContent="ANISH";
    // postTitle.innerHTML="<div><div><div></div></div></div>"
    // postContent.textContent="2 hours ago";
    // postImage.src="";
    // postImage.alt="Aventador";

    //e deltebutton.textContent="Delete";
    // deletebutton.addEventListener("click",function(){
    //     postclass.removeChild(postDiv);
    // })

    // postDiv.appendChild(postTitle);
    // postDiv.appendChild(postContent);
    // postDiv.appendChild(postImage);
    // postDiv.appendChild(deletebutton);

    // postclass.appendChild(postDiv);
    let postDiv = document.createElement("div");
      postDiv.classList.add("post");
      
      // Create the post-top section
      let postTop = document.createElement("div");
      postTop.classList.add("post-top");
      
      // Create the dp (display picture) section
      let dpDiv = document.createElement("div");
      dpDiv.classList.add("dp");
      let dpImage = document.createElement("img");
      dpImage.src = "imgs/friend-2.png";
      dpImage.alt = "";
      dpDiv.appendChild(dpImage);
      
      // Create the post-info section
      let postInfo = document.createElement("div");
      postInfo.classList.add("post-info");
      let nameP = document.createElement("p");
      nameP.classList.add("name");
      nameP.textContent = "ANISH";
      let timeSpan = document.createElement("span");
      timeSpan.classList.add("time");
      timeSpan.textContent = "6 hrs ago";
      postInfo.appendChild(nameP);
      postInfo.appendChild(timeSpan);
      
      // Create the ellipsis icon
      let ellipsisIcon = document.createElement("i");
      ellipsisIcon.classList.add("fas", "fa-ellipsis-h");
      
      // Add elements to post-top
      postTop.appendChild(dpDiv);
      postTop.appendChild(postInfo);
      postTop.appendChild(ellipsisIcon);
      
      // Create the post-content section
      let postContent = document.createElement("div");
      postContent.classList.add("post-content");
      postContent.textContent = "CAPTION!";
      let postImage = document.createElement("img");
      postImage.src = "imgs/post-3.jpg";
      postImage.alt = "";
      postContent.appendChild(postImage);
      
      // Create the post-bottom section
      let postBottom = document.createElement("div");
      postBottom.classList.add("post-bottom");
      
      // Action= Like
      let likeAction = createAction("far", "fa-thumbs-up", "Like");
      
      // Action= Comment
      let commentAction = createAction("far", "fa-comment", "Comment");
      
      // Action= Share
      let shareAction = createAction("fa", "fa-share", "Share");

      let deletebutton= document.createElement("button");
      deletebutton.textContent="Delete";
      deletebutton.style.height = "28px";
      deletebutton.style.width = "104px";
      deletebutton.style.textDecoration="none";
      deletebutton.style.backgroundColor= "blue";
      deletebutton.style.color= "#eee";
      deletebutton.style.fontSize= "15px";
      deletebutton.style.fontWeight= "bold";
      deletebutton.style.textAlign= "center";
      deletebutton.style.border= "none";
      deletebutton.style.borderRadius= "6px";
      deletebutton.style.cursor= "pointer";

      deletebutton.addEventListener("click",function(){
            postclass.removeChild(postDiv);
        })

      
      // Add actions to post-bottom
      postBottom.appendChild(likeAction);
      postBottom.appendChild(commentAction);
      postBottom.appendChild(shareAction);
      
      // Add all sections to the main post container
      postDiv.appendChild(postTop);
      postDiv.appendChild(postContent);
      postDiv.appendChild(postBottom);
      postDiv.appendChild(deletebutton);
      
      // Add the new post to the container
    postclass.appendChild(postDiv);
}

function createAction(iconType, iconName, text) {
    const actionDiv = document.createElement("div");
    actionDiv.classList.add("action");
    
    const icon = document.createElement("i");
    icon.classList.add(iconType, iconName);
    
    const span = document.createElement("span");
    span.textContent = text;
    
    actionDiv.appendChild(icon);
    actionDiv.appendChild(span);
    
    return actionDiv;
  }

// accessing button
let button= document.querySelector(".addpost");
button.addEventListener("click",post);

// deleting the existing posts
let del= document.querySelector(".post-container");
console.log(del);

del.addEventListener("click",function(ev){
    console.log(ev.target);
    let className= ev.target.className;
    let currentElement= ev.target;
    console.log(className);

    if (className=="dele") {
        let item= currentElement.parentElement.parentElement;
        console.log(item);
        item.remove();
    }
})
