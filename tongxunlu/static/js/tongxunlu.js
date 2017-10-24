window.addEventListener('load',function(){
let dl = $('dl');
let aside =$('.aside');
let header =$('header');
let tips =$('.tips');


//   function render (arr){
//       dl.innerHTML='';
//       aside.innerHTML='';
//       let obj={};
//       arr.forEach(function(element){
//           let first = element.pinyin.charAt(0).toUpperCase();
//           // first=Z,L,W...
//           if(!obj[first]){
//               obj[first]=[];
//           }
//           obj[first].push(element);
//           // console.log(obj[first])-----放的是info中的{}，是个数组
//           // console.log(obj)---------------是一个对象，里面的元素是每个数组
//       });
//
//
//       let char = Object.keys(obj).sort();
//       // console.log(char)----------返回一个数组，L,W,C
//       // Object.keys()-----------获取指定对象的属性名
//       char.forEach(function(element){
//           dl.innerHTML+=`
//       <dt>${element}</dt>`;
//           obj[element].forEach(function(value){
//               dl.innerHTML+=`<dd><a href="tel:${value.tel}">${value.name}</a></dd>`
//           })
//           aside.innerHTML+=`
//           <li>${element}<li>
//           `
//       })
//
//   }
//
//     render(info);
//     let dt = document.querySelectorAll('dt');
//
// // 搜索功能
//  let search = document.querySelector('input');
//  // console.log(search)
//     search.onkeyup = function(){
//         let value = this.value.trim();
//       let data= info.filter(function(element){
//       return element.pinyin.includes(value) || element.tel.includes(value) || element.name.includes(value);
//         })
//         render(data);
//     }
//
// window.onscroll=function(){
//         let heights = header.offsetHeight+tips.offsetHeight;
//         let newarr=[];
//         for(let i=0;i<dt.length;i++){
//           newarr.push(dt[i].offsetTop)
//         }
//         newarr.forEach((element,index)=>{
//             let height1 = document.documentElement.scrollTop;
//             if(height1+heights>=element){
//                 tips.innerText=dt[index].innerText;
//             }
//
//         })
//
//
// }

    // scrollTop+(header-height).offsetHeight >=dt.offsetTop

$.ajax({
    url:'tongxunlu.php',
    success:function(data){
        $.each(data,function(index,element){
            render(element);
            console.log(element)
        })


    }
})



let render =function(data){
    dl.html('');
    aside.html('');
    let obj={};
    $.each(data,function(index,element){
        let first = element.pinyin.charAt(0).toUpperCase();
        if(!obj[first]){
            obj[first]=[];
        }
        obj[first].push(element);
    })
    let chars=Object.keys(obj).sort();
    $.each(chars,function(index,element){
        dl.html(function(index,value) {
            return value += `
            <dt>${element}</dt>`;
        });
         obj[element].forEach(function(value){
               dl.html(function(index,value){
                return  value +=`
                       <dd><a href="tel:${value.tel}">${value.name}</a></dd>
                   `
               })
                   })
        aside.html(function(index,value){
           return value +=`
                       <li>${element}<li>
                   `
        })
    })


}













})