function creaTables() {
    i=0;
    y=0;
    document.write("<table border=\"0\" cellspacing=\"2\" bgcolor=\"black\" width\"200\"");
    while(  i < 1) {
        document.write("<tr bgcolor=\"white\" height=\"50\" >");
        while ( y < 4){
            document.write("<td bgcolor=\"white\" width=\"50\" >&nbsp;</td>");
            y++;
        };
        document.write("</tr>");
        i++;
    };
    document.write("</table>");
}
creaTables();