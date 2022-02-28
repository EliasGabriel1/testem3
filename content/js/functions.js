function topay(props) {
    var imagem = props.parentNode.childNodes[1].innerHTML;
    var title = props.parentNode.childNodes[3].innerHTML;
    var price = props.parentNode.childNodes[5].innerHTML;
    var describle = props.parentNode.childNodes[7].innerHTML;
    var x = document.getElementById("minicart");
    document.getElementById("vazio").innerHTML=""
    console.log(title);
    document.getElementById("minicart").innerHTML = document.getElementById("minicart").innerHTML+
    ' <div class="item-minicart"> <figure>'+imagem+ '<figure/> <div/> <p class="name title">'+
        ' '+title+'</p>    <p class="price"> '+price+'      </p>'+
         '<p class="installment describle">    '+describle+'    </p>';
}