var citylocation,map,marker = null;
var init = function() {
    var center = new qq.maps.LatLng(39.916527,116.397128);
    map = new qq.maps.Map(document.getElementById('container'),{
        center: center,
        zoom: 13
    });
    //获取城市列表接口设置中心点
    citylocation = new qq.maps.CityService({
        complete : function(result){
            map.setCenter(result.detail.latLng);
        }
    });
    //调用searchLocalCity();方法    根据用户IP查询城市信息。
    citylocation.searchLocalCity();
}

$(document).ready(function() {
    init();
    var s = document.getElementById("container");
    s.onclick=function() {
        alert("container"); 
    }
});