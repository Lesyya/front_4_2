const Movies = document.getElementById('Movies');
let add_amount = 0;

Movies.addEventListener('click', function onClick(event) {
    const Movies = document.getElementById('Movies');
    Movies.style.backgroundColor = '#' + (Math.random().toString(16) + "000000").substring(2,8);
    Movies.style.color = '#' + (Math.random().toString(16) + "000000").substring(2,8);
});

document.querySelectorAll('Avatar')
Avatar.addEventListener('click', () => Avatar.style.backgroundColor = '#' + (Math.random().toString(16) + "000000").substring(2,8));
Avatar.addEventListener('click', () => Avatar.style.color = '#' + (Math.random().toString(16) + "000000").substring(2,8));

function imageAdd() {
    if (add_amount == 0) {
    var img = new Image();
    img.src = "./img/rome_0.jpg";
    img.style.width='1100px';
    img.style.height='700px';
    var holder = document.getElementById('img2');
    holder.appendChild(img);
    add_amount = 1;
    }
    else {
    alert("Ви не можете додати більше фото");    
    }
}

function bigger() {
    var holder = document.getElementById('img1');
    if (holder.width<1149 & holder.height<1599) {
    holder.width += 200;
    holder.height += 200;      
    } 
    else {
    alert("Ви не можете збільшити фото");
    }
}

function smaller() {
    var holder = document.getElementById('img1');
    if (holder.width>350 & holder.height>400) {
    holder.width -= 200;
    holder.height -= 300;      
    } 
    else {
    alert("Ви не можете зменшити фото");
    }
}

function imageDelete() {
    if (add_amount == 1) {
    var holder = document.getElementById('img2');
    document.body.removeChild(holder);
    add_amount = 0;
    }
    else {
    alert("Ви не можете видалити головне фото");    
    }
}