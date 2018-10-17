function creaTables() {
    document.write("<table border=\"0\" cellspacing=\"2\" bgcolor=\"black\" width\"200\"");
    for (i = 0; i < 1; i++) {
        document.write("<tr bgcolor=\"white\" height=\"50\" >");
        for (y = 0; y < 4; y++) {
            if (y % 2 == 0) {
                document.write("<td bgcolor=\"white\" width=\"50\" >&nbsp;</td>");
            } else {
                document.write("<td bgcolor=\"black\" width=\"50\" >&nbsp;</td>");
            };
        }
        document.write("</tr>");
    };
    document.write("</table>");
}
creaTables();