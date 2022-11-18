

document.write('<table>');

document.write("<tr>");
document.write("<td style='background-color: red;'>Rojo</td>");
document.write("<td style='background-color: green;'>Verde</td>");
document.write("<td style='background-color: blue;'>Azul</td>");
document.write("<td>Color</td>");
document.write("</tr>");

document.write('<tr>');


    for (let i = 0; i < 20; i++) {
        
        let arrayRGB = [];

        for (let j = 0; j < 3; j++) {
            
            let randomColor = Math.floor(Math.random()*255+1);

            arrayRGB[j] = randomColor;
            
            document.write('<td>'+randomColor+'</td>');

            if (j==2) {
                document.write("<td style='background-color: rgb(255,0,255)';>"+randomColor[0]+"</td>");
                //document.write("<td style='background-color: rgb(randomColor[0],randomColor[1],randomColor[2]);>RGB'</td>");
            }
            
        }
        
        document.write('</tr>');
        
    }





document.write('</table>');