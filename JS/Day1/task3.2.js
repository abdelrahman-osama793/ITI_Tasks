var num= new Array(5);
            for (i = 0; i<5 ; i++){
                num[i] = prompt("Enter a number:");
            }

            document.write("<h3>" +"u have enterd this values ".fontcolor("red") + num+ "</h3>");

            function ascendingSort(a,b){
                ascNum = num.sort(
                    function (a,b) {return a-b}
                );
                document.write("<h3>" +"ur values after being sorted ascending".fontcolor("red") + ascNum +"</h3>");
            }
            function descendingSort(a,b){
                desNum = num.sort(
                    function (a,b) {return b-a}
                );
                document.write("<h3>" +"ur values after being sorted descending ".fontcolor("red") + desNum +"</h3>");
            }

            descendingSort();
            ascendingSort();