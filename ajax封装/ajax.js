//
//function Ajax(obj){
////根据obj对method,data,url等进行初始化
//};
//Ajax.prototype.send = function() {
//  let xmls = new XMLHttpRequest();//新建ajax请求
//  xmls.onreadystatechange = function () {回调函数
//      if (xmls.readyState === 4)
//          callback(xmls.responseText);
//  };
//  if (method === 'get') {//如果是get方法，需要把data中的数据转化作为url
//      xmls.open(method, url, true);
//      xmls.send(null);
//  } else if (method === 'post') {//如果是post，需要在头中添加content-type
//      xmls.open(method, url, true);
//      xmls.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//      xmls.send(JSON.stringify(data));//发送的数据需要转化成JSON格式
//  } else {
//      console.log('不识别的方法:' + method);
//      return fasle;
//  }
//};


//{method:'get',url,data,datatype,success:function({})}
//method:可选  get(默认  )  post 
//url 必选
//asynch:是否异步   可选  true(默认)
//data:可选  发送的数据  'name=zhangsan&age=18'   或者 {name:'zhangsan',age:18}
//datatype:可选   接收的数据类型  text(默认值)  json  xml
//success: 数据获取成功之后
 
//ajax({})

function ajax(options){
	if(!options.url){
		return;
	}
//参数初始化	
 let method = options.method?options.method:'get';
 let datatype =options.dataType ? options.dataType : 'text';
 let asynch=options.asynch==undefined ? true : options.asynch;
 let data='';
 if(typeof options.data=='string'){
     data=options.data;
 }else if(typeof options.data=='object'){
 	for(let i in options.data){
 	data+=`${i}=${options.data[i]}&`
 	}
 	data.slice(0,-1);
 }
	
  let xml = new XMLHttpRequest();
     if (method === 'get'){
        xml.open('get', options.url+'?'+data,asynch);
        xml.send();
    } else if (method === 'post') {
        xml.open('post',options.url,asynch);
        xml.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
       }
        if(data){
        	xml.send(data)
        }else{
        	xml.send();
        }

xml.onreadystatechange = function () {
        if (xml.readyState === 4){
        	if(xml.status===200){
        		if(datatype=='text'){
        			options.success(xml.responseText);
        		}else if(datatype=='json'){
        	      options.success(xml.response);
                 }else if(datatype=='xml'){
        	      options.success(xml.responseXML);
                  }
	
	}
        }
	
	
}


}

