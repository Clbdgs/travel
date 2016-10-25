angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

      .state('tabs', {
        url: '/tabs',
        abstract:true,
        templateUrl: 'templates/tabs.html'

      })

      .state('tabs.index', {
    url: '/index',
    views:{"tab-index":{ templateUrl: 'templates/index.html', controller: 'indexCtrl'}}


  })
      .state('inlandHotel', {
        url: '/inlandHotel',

          templateUrl: 'templates/inlandHotel.html'
          //controller: 'inlandHotelCtrl'

      })
      .state('hourlyRoom', {
          url: '/hourlyRoom',

          templateUrl: 'templates/hourlyRoom.html',
          controller: 'hourlyRoomCtrl'

      })

  .state('tabs.find', {
    url: '/find',
    views:{"tab-find":{ templateUrl: 'templates/find.html', controller: 'findCtrl'}}

  })

  .state('tabs.mine', {
    url: '/mine',
    views:{"tab-mine":{ templateUrl: 'templates/mine.html', controller: 'mineCtrl'}}

  })
      .state('allOrder', {
          url: '/allOrder',
          templateUrl: 'templates/allOrder.html'

      })

  .state('tabs.server', {
    url: '/server',
    views:{"tab-server":{ templateUrl: 'templates/server.html', controller: 'serverCtrl'}}
  })

  .state('enter', {
    url: '/enter',
    templateUrl: 'templates/enter.html',
    controller:'enterCtrl'

  })

    //全部订单页面的tabs 路由组
/*
      .state('allOrder', {
          url: '/allOrder',
          abstract:true,
          templateUrl: 'templates/allOrder.html'/!*, controller: 'allOrderCtrl'*!/

      })

      .state('allOrder.index', {
      url: '/allOrders',
      views:{"tab-index":{ templateUrl: 'templates/allOrders.html'/!*, controller: 'allOrdersCtrl'*!/}}
  })
      .state('allOrder.unpaid', {
          url: '/unpaid',
          views:{"tab-unpaid":{ templateUrl: 'templates/unpaid.html'/!*, controller: 'unpaidCtrl'*!/}}
      })
      .state('allOrder.notGo', {
          url: '/notGo',
          views:{"tab-notGo":{ templateUrl: 'templates/notGo.html'/!*, controller: 'notGoCtrl'*!/}}
      })
      .state('allOrder.saleOff', {
          url: '/saleOff',
          views:{"tab-saleOff":{ templateUrl: 'templates/saleOff.html'/!*, controller: 'saleOffCtrl'*!/}}
      })
*/



    $urlRouterProvider.otherwise('/enter');


});