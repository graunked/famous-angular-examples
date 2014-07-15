'use strict';

angular.module('integrationApp')
  .controller('NewTimelineCtrl', function ($scope, $famous, $timeline) {

    var Transitionable = $famous['famous/transitions/Transitionable'];
    var Easing = $famous['famous/transitions/Easing'];
    var linear = function(x) { return x; };

    $scope.tlFn = $timeline.timeline([
      [0, [-50, -100, 0], Easing.inOutQuad],
      [1, [50, 100, 0]]
    ]);

    $scope.rotation = $timeline.timeline([
      [0, 0, Easing.inOutQuad],
      [1, Math.PI / 2]
    ]);

    $scope.t = new Transitionable(0);

    var up = true;
    $scope.move = function() {
      if (up) {
        $scope.t.set(1, {duration: 300});
        up = false;
      }
      else {
        $scope.t.set(0, {duration: 300});
        up = true;
      }

    };

    window.tlFn = $scope.tlFn;
    window.t = $scope.t;

  });
