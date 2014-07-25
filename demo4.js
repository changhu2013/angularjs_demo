var m = angular.module('drag', []);

	alert(m);

	m.directive('draggable', function($document){
		
		var startX = 0, startY =0, x = 0, y = 0;
		
		return function(scope, element, attr){
			
			element.css({
			    position : 'relatiove',
				border : '1px solid red',
				backgroundColor : 'lightgrew',
				cursor : 'pointer'
			});
			
			element.bind('mousedown', function(event){
			    
				startX = event.screenX - x;
				startY = event.screenY - y;
				$document.bind('mousemove', mousemove);
				$document.bind('mouseup', mouseup);
			});
			
			function mousemove(event){
			    
				y = event.screenY - startY;
				x = event.screenX - startX;
				
				event.css({
				    top : y + 'px',
					left : x + 'px'
				});
				
			}
			
			function mouseup(){
			    
				$document.upbind('mousemove', mousemove);
				$document.upbind('mouseup', mouseup);
			}
			
		};
		
	});