const activ = document.getElementsByClassName('detailx');
// const plusv = document.querySelector('.plus'); // nokta eklemeyi unutmayın
// const minusv = document.querySelector('.minus'); // nokta eklemeyi unutmayın


for (let i = 0 ; i < activ.length; i++) {
    activ[i].addEventListener('click', function() {
        this.classList.toggle('full');
        
        // if (this.classList.contains('full')) {
        //     plusv.classList.add('hidden');
        //     minusv.classList.remove('hidden');
        // } else {
        //     plusv.classList.remove('hidden');
        //     minusv.classList.add('hidden');
        // }

    });
    
}


// const active = document.querySelectorAll('.detailx');
// const plus = document.querySelectorAll('.plus'); // nokta eklemeyi unutmayın
// const minus = document.querySf1212electorAll('.minus'); // nokta eklemeyi unutmayın
// const detal = document.getElementById('detaill');
// const labla = document.querySelectorAll('.labl'); // nokta eklemeyi unutmayın

// for(let i = 0; i < active.length; i++) {
//     active[i].addEventListener('click', function() {
//         this.classList.toggle('full');

//         if (this.classList.contains('full')) {
//             plus.classList.add('hidden');
//             minus.classList.remove('hidden');
//         } else {
//             plus.classList.remove('hidden');
//             minus.classList.add('hidden');
//         }
//     });
// }


// active.addEventListener("click" , function(){
//     if(this){

//     }
// })
// const box = document.querySelector('.chek');
// if(box){
//     box.classList.remove('chek');
// }
// const card = e.target ;
// card.classList.add('chek');
// reat = e.target.innerText;
// active.addEventListener('click' , () =>{
//     if(this){

//     }
// })