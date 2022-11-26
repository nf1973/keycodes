function myFunction() {
    const input = document.querySelector('body');
    var result = document.getElementById('result');
    
    input.addEventListener('keypress', keyPressed);
    
    function keyPressed(key) {
        console.log(key.keyCode);
        result.innerHTML="<p>"+key.keyCode+"</p>";
        console.log(result);
    }
}