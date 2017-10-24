$(function(){
    let tbody = $('tbody');
    // let del = $('.dels');
    // let addbtn = $('.add');
    $.ajax({
        url:'../../admin/guanliyuan.php',
        success:function(data){
            $.each(data,function(index,element){
                creats(element);
            })
        }
    })




    let creats=function(data){
        tbody.html(function(index,value){
            return value+`<tr id="${data.id}">
			<td type="name">${data.uesrname}</td>
			<td type="sex">${data.password}</td>
			<td type="id">${data.id}</td>
			<td class="del"><button class=".dels">删除</button></td>
			</tr>`
        })
    }

    // tbody.on('dblclick','td[class!=del]',function(e){
    //     let ele =$(e.target);
    //     let oldv= ele.text();
    //     ele.text('');
    //     $('<input>').appendTo(ele).val(oldv).blur(function(){
    //         let newv = $(this).val();
    //         $(this).remove();
    //         ele.text(newv);
    //         let info = ele.attr('type');
    //         let id =ele.closest('tr').attr('id');
    //
    //         $.ajax({
    //             url:'update.php',
    //             data:{value:newv,info,id},
    //             success:function(data){
    //                 if(data){
    //                     alert('修改成功')
    //                 }else{
    //                     alert('修改失败')
    //                 }
    //             }
    //
    //
    //         })
    //
    //
    //     })
    //
    // })
    //
    // tbody.on('click',function(e){
    //     let ele=$(e.target);
    //     let id =ele.closest('tr').attr('id');
    //     if(ele[0].nodeName=='BUTTON'){
    //         let trs = ele[0].parentNode.parentNode;
    //         $(trs).remove();
    //         $.ajax({
    //             url:'delete.php',
    //             data:{id},
    //             success:function(data){
    //                 if(data){
    //                     alert('删除成功')
    //                 }else{
    //                     alert('删除失败')
    //                 }
    //             }
    //
    //
    //         })
    //
    //
    //
    //     }
    //
    //
    // })
    //
    // addbtn.on('click',function(){
    //     $.ajax({
    //         url:'add.php',
    //         success:function(data){
    //             creats({name:'',age:'',classes:'',phone:'',address:'',sex:'',id:data});
    //         }
    //     })
    // })


















})