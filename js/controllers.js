angular.module('app.controllers',[])
  
.controller('indexCtrl', function($scope) {
      $scope.activeIndex = 0;//保存当前活动幻灯片的索引

    //当发生幻灯片切换事件时
    $scope.onSlideChanged = function (index) {
        $scope.activeIndex = index;
    };


      //单击分页器小圆点时，执行
     $scope.pagerClick = function (index) {
         $scope.activeIndex = index;
     }
})
    .controller('hourlyRoomCtrl', function ($scope,$http) {
        $scope.activeIndex = 0;//保存当前活动幻灯片的索引

        //当发生幻灯片切换事件时
        $scope.onSlideChanged = function (index) {
            $scope.activeIndex = index;
        };


        //单击分页器小圆点时，执行
        $scope.pagerClick = function (index) {
            $scope.activeIndex = index;
        };

        $http.get("indexZdf.json").success(function (response) {
            $scope.cities = response.cities;
           })
            .error(function (err,status) {
                console.log(status);
            })
    })
   
.controller('findCtrl', function($scope,$rootScope,$http,$ionicScrollDelegate,$ionicActionSheet) {
    $scope.page = 0;//当前城市序号
    $scope.total = 1;//总城市个数
    $scope.cities = [ ];//存储所有旅游目的地的信息
    var url = "find.json";
    $scope.i = 0;
    $scope.isShow = false;
    $scope.getCities = function () {
         $scope.page ++ ;//当前城市序号加1

        //ajax请求
        $http.get(url)
            .success(function (response) {
                //遍历返回的数据，找出每个旅游地的信息 添加到数组中
                angular.forEach(response.cities, function (city) {
                    $scope.cities.push(city);
                });
        /*        //每次只加载4个旅游地的信息
                for( var count = $scope.i  ;count < response.cities.length;count ++){
                    if(count % 4 == 0){
                        $scope.i = count;
                        break;
                    }
                    $scope.cities.push( response.cities[count]) ;

                }*/

                //更新页面总数
                $scope.total = response.totalCities;//获得总城市数
                //广播事件，告诉无限滚动事件，everything is done
                $scope.$broadcast("scroll.infiniteScrollComplete");

            })
            .error(function (err) {
                $scope.$broadcast("scroll.infiniteScrollComplete");
                console.log(err);
            });
    };

    $scope.getCities();//加载时，从api加载第一个城市


    //下拉刷新
    $scope.loadMore = function(){
        $http.get(url)
            .success(function (response) {
            //重新加载城市数据
                $scope.cities = response.cities;
        }).finally(function () {
            $scope.$broadcast("scroll.refreshComplete");
        })
    };

    //判断是否下拉滚动了
 /*   $scope.isScroll = function () {
        if(parseInt($ionicScrollDelegate.getScrollPosition().top) > 0){
            return true;
        }else{
            return false;
        }
    }
*/

     //弹出选项  选择旅游类别的选项

    // 点击按钮触发，或一些其他的触发条件
/*    $rootScope.show = function() {

        // 显示操作表
        $ionicActionSheet.show({
            buttons: [
                { text: '全部' },
                { text: '城市特色' },
                { text: '度假酒店' },
            ],
            //destructiveText: '',
            titleText: '请选择旅游城市类别',
            cancelText: 'Cancel',
            buttonClicked: function(index) {
                switch(index){
                    case 0:
                        showAll(all);
                        break;
                    case 1:
                        showCity();
                        break;
                    case 2:
                        showHotel();
                        break;
                }
                return true;
            }
        });

    };
    $rootScope.showAll = function (all) {
        //清空原来的数据
        $scope.cities.length = 0;
        //加载所有json数据中 类别为all的数据
        $http.get(url).success(function (response) {
            for(var index = 0;index < response.cities.length;index ++){
                if(response.cities[index].type == "all"){
                    $scope.cities.push(response.cities[index]);
                }
            }
        })
    }*/
   $rootScope.show = function () {
       $scope.isShow = true;
   }
})
   
.controller('mineCtrl', function($scope) {

})
   
.controller('serverCtrl', function($scope) {

})

.controller('enterCtrl', function ($scope,$ionicSlideBoxDelegate) {
   $scope.isShow = false;
    //幻灯片事件响应函数
    $scope.onSlideChanged = function () {
        if($ionicSlideBoxDelegate.currentIndex() == $ionicSlideBoxDelegate.slidesCount()-1){
            //当前索引是最后一张幻灯片
            $scope.isShow = true;
        }
    }

});
 