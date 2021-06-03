function circleArea(){
                var radius= prompt("Enter a Radius");
                var area=Math.PI*Math.pow(radius,2);
                alert("Your Area = " + area);
            }

            function getSquareRoot(){
                var number= prompt("Enter a number to get square root");
                var squareRoot=Math.sqrt(number,2);
                alert("Your squareRoot = " + squareRoot);
            }

            function getCos(){
                var angle= parseInt(prompt("Enter an Angle"));
                var result=Math.cos(angle * (Math.PI/180).toFixed(2));
                alert("Your Result = " + result);
            }

            circleArea();
            getSquareRoot();
            getCos();