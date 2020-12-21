const firstImage = document.querySelector('#banner');

// firstImage.src = 'https://images.unsplash.com/photo-1501200291289-c5a76c232e5f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2781&q=80'

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:

const letters = document.querySelectorAll('span');

for (let i = 0; i < colors.length; i++){

    letters[i].style.color = colors[i];
}

// 100 Buttons! : 

for (let i = 0; i < 100; i++){
    let btn = document.createElement('button');
    btn.innerText= 'Hey you!';
    const container = document.querySelector('.container');
    container.appendChild(btn);
}