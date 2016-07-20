angular.module('tattva')
.controller("watchDialogCtrl",['$scope','$mdDialog','watch','orgSite','adminFactory',
function($scope, $mdDialog, watch, orgSite, adminFactory) {
  $scope.watch = watch;
  console.log("watch",watch);
  $scope.orgSite = orgSite;

  $scope.socket=io();

  $scope.$on('$destroy', function(){
    if($scope.socket){
      $scope.socket.disconnect();
    }
  });

  $scope.processorMap = [
    {
      "watchName": "consequat",
      "watchTask": "cupidatat"
    },
    {
      "watchName": "minim",
      "watchTask": "adipisicing"
    },
    {
      "watchName": "ea",
      "watchTask": "pariatur"
    },
    {
      "watchName": "deserunt",
      "watchTask": "fugiat"
    },
    {
      "watchName": "minim",
      "watchTask": "mollit"
    },
    {
      "watchName": "officia",
      "watchTask": "veniam"
    },
    {
      "watchName": "incididunt",
      "watchTask": "occaecat"
    },
    {
      "watchName": "commodo",
      "watchTask": "est"
    },
    {
      "watchName": "quis",
      "watchTask": "sint"
    },
    {
      "watchName": "Lorem",
      "watchTask": "occaecat"
    },
    {
      "watchName": "sint",
      "watchTask": "est"
    },
    {
      "watchName": "commodo",
      "watchTask": "officia"
    },
    {
      "watchName": "commodo",
      "watchTask": "ex"
    },
    {
      "watchName": "commodo",
      "watchTask": "irure"
    }

  ];
  $scope.processorName = "processor1"
  $scope.watchtaskfilter = "commodo";

  $scope.cancel=function(){
    $mdDialog.cancel();
  }

}]);