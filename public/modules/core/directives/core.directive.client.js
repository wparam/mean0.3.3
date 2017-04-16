'use strict';

angular.module('core').directive('leftbar', ['$document', leftbar]);

function leftbar($document){
    return {
        restrict: 'AE',
        scope: {},
        link: function(scope, ele, attr, ctrl){
            $document.ready(function(){
                $('#side-menu').metisMenu();

                ele.bind('load resize', function() {
                    topOffset = 50;
                    width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
                    if (width < 768) {
                        $('div.navbar-collapse').addClass('collapse');
                        topOffset = 100; // 2-row-menu
                    } else {
                        $('div.navbar-collapse').removeClass('collapse');
                    }

                    height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
                    height = height - topOffset;
                    if (height < 1) height = 1;
                    if (height > topOffset) {
                        $("#page-wrapper").css("min-height", (height) + "px");
                    }
                });
            });
            
        }
    };
};