let numberOfDrums = document.querySelectorAll('.drum').length;
const audio = [];
const sounds = ['tom-1','tom-2','tom-3','tom-4','snare','crash','kick-bass'];
let activeBtn;
for(let i = 0; i < numberOfDrums; i++)
{
    document.querySelectorAll('.drum')[i].addEventListener('click', function(event){
        audio[i] = new Audio(`sounds/${sounds[i]}.mp3`);
        audio[i].play();
        activeBtn = event.target;
        btnAnimation(activeBtn);    
    });
}

document.addEventListener('keydown', function(event) {
    switch(event.key){
        case 'w':
            document.getElementById('w').click();
            break;
        case 'a':
            document.getElementById('a').click();
             break;
        case 's':
            document.getElementById('s').click();
            break;
        case 'd':
            document.getElementById('d').click();
            break;
        case 'j':
            document.getElementById('j').click();
            break;
        case 'k':
            document.getElementById('k').click();
            break;
        case 'l':
            document.getElementById('l').click();
            break;
        default: 
            return;
    }

});

function btnAnimation(currentKey){
    currentKey.classList.add('pressed');
    setTimeout(function(){
        currentKey.classList.remove('pressed');
    }, 100);
}