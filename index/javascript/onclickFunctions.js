let isMobile = window.matchMedia("(pointer:coarse)").matches;

if (isMobile) {


    document.getElementById("github-hover-info1").onclick = function() {

        document.getElementById("github-hover-tooltip1").style.display = "inline";

        document.getElementById("card-w-hover-info").style.boxShadow = "0 0 20px rgba(31, 30, 30, 0.2)";
        document.getElementById("card-w-hover-info").style.transform = "scale(1.1)";
        document.getElementById("card-w-hover-info").style.border = "none";
        document.getElementById("card-w-hover-info").style.transition = "none";
        document.getElementById("github-hover-tooltip1").style.position = "fixed";
        document.getElementById("github-hover-tooltip1").style.top = "1em";
        document.getElementById("github-hover-tooltip1").style.left = "1em";
        document.getElementById("github-hover-tooltip1").style.background = "white";
        document.getElementById("github-hover-tooltip1").style.color = "black";
        document.getElementById("github-hover-tooltip1").style.fontSize = "medium";
        document.getElementById("github-hover-tooltip1").style.padding = "10px";
        document.getElementById("github-hover-tooltip1").style.border = "1px solid black";


        document.getElementById("close-hover-btn").onclick = function() {
            document.getElementById("github-hover-tooltip1").style.display = "none";
            document.getElementById("card-w-hover-info").style.boxShadow = "none";
            document.getElementById("card-w-hover-info").style.transform = "none";
            document.getElementById("card-w-hover-info").style.border = "0.5px solid #000";
            document.getElementById("card-w-hover-info").style.transition = "box-shadow .3s,transform .3s";



        };


    };

    document.getElementById("github-hover-info2").onclick = function() {

        document.getElementById("github-hover-tooltip2").style.display = "inline";

        document.getElementById("card-w-hover-info2").style.boxShadow = "0 0 20px rgba(31, 30, 30, 0.2)";
        document.getElementById("card-w-hover-info2").style.transform = "scale(1.1)";
        document.getElementById("card-w-hover-info2").style.border = "none";
        document.getElementById("card-w-hover-info2").style.transition = "none";
        document.getElementById("github-hover-tooltip2").style.position = "fixed";
        document.getElementById("github-hover-tooltip2").style.top = "1em";
        document.getElementById("github-hover-tooltip2").style.left = "1em";
        document.getElementById("github-hover-tooltip2").style.background = "white";
        document.getElementById("github-hover-tooltip2").style.color = "black";
        document.getElementById("github-hover-tooltip2").style.fontSize = "medium";
        document.getElementById("github-hover-tooltip2").style.padding = "10px";
        document.getElementById("github-hover-tooltip2").style.border = "1px solid black";


        document.getElementById("close-hover-btn2").onclick = function() {
            document.getElementById("github-hover-tooltip2").style.display = "none";
            document.getElementById("card-w-hover-info2").style.boxShadow = "none";
            document.getElementById("card-w-hover-info2").style.transform = "none";
            document.getElementById("card-w-hover-info2").style.border = "0.5px solid #000";
            document.getElementById("card-w-hover-info2").style.transition = "box-shadow .3s,transform .3s";



        };


    };

    document.getElementById("github-hover-info3").onclick = function() {

        document.getElementById("github-hover-tooltip3").style.display = "inline";

        document.getElementById("card-w-hover-info3").style.boxShadow = "0 0 20px rgba(31, 30, 30, 0.2)";
        document.getElementById("card-w-hover-info3").style.transform = "scale(1.1)";
        document.getElementById("card-w-hover-info3").style.border = "none";
        document.getElementById("card-w-hover-info3").style.transition = "none";
        document.getElementById("github-hover-tooltip3").style.position = "fixed";
        document.getElementById("github-hover-tooltip3").style.top = "1em";
        document.getElementById("github-hover-tooltip3").style.left = "1em";
        document.getElementById("github-hover-tooltip3").style.background = "white";
        document.getElementById("github-hover-tooltip3").style.color = "black";
        document.getElementById("github-hover-tooltip3").style.fontSize = "medium";
        document.getElementById("github-hover-tooltip3").style.padding = "10px";
        document.getElementById("github-hover-tooltip3").style.border = "1px solid black";


        document.getElementById("close-hover-btn3").onclick = function() {
            document.getElementById("github-hover-tooltip3").style.display = "none";
            document.getElementById("card-w-hover-info3").style.boxShadow = "none";
            document.getElementById("card-w-hover-info3").style.transform = "none";
            document.getElementById("card-w-hover-info3").style.border = "0.5px solid #000";
            document.getElementById("card-w-hover-info3").style.transition = "box-shadow .3s,transform .3s";



        };


    };


}
