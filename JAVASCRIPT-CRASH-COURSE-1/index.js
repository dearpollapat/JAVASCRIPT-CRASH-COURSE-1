
function appentImageElem(keyword,index){
    const imgElem = document.createElement('img');
    imgElem.src = `https://source.unsplash.com/400x225/?${keyword}&sig=${index}`;

    const galleryElem = document.querySelector('.gallery');
    galleryElem.appendChild(imgElem);
}

function searchPhotos(event){
    const keyword = event.target.value;

    if(event.key === 'Enter' && keyword){
        removePhoto();
        for(let i = 1;i<= 9;i++){
            appentImageElem(keyword,i);
        }
    }
    console.log(event.target);
}

function removePhoto(){
    const galleryElem = document.querySelector('.gallery');
    galleryElem.innerHTML = '';
}
function run(){
    const inputElem = document.querySelector('input');
    inputElem.addEventListener('keydown',searchPhotos)
}

run();