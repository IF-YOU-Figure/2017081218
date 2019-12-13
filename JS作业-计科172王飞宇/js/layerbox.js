
window.onload = function(){
	function layerBox (e){
	layer.alert('', {
		
		content: '<input class="cityIn" name="city-in" type="text" placeholder="武汉" style="width: 100%;">',
		area: ['100px', '200px'],
		skin: 'layui-layer-molv' ,
		title: '请输入中文城市名称',
		btn: ['确定' , '取消'],
		closeBtn: 0
	}, 
	function(layero,index){
		var a =  $('.cityIn').val();
		console.log(a);
		layer.closeAll();
				
	})
	}


	var searchInput = document.getElementById('searchText');
	searchInput.onkeyup = function (e) {
    	console.log("输入框被点击！");
    	return 0;
   	}

}
