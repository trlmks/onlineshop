const container = document.querySelector('.container-thumbs');
const jumbo = document.querySelector('.jumbo');

container.addEventListener('click',function(e){
    if(e.target.className='img-thumbnail'){
        jumbo.src=e.target.src;
        jumbo.classList.add('fade');
        setTimeout(()=>{
            jumbo.classList.remove('fade')
        },500)
    }
})