// ============== OUVRIR ET FERMER LE TOGGEL =============== //

var navigation = document.querySelector('.contenaire-nav')
document.querySelector('.toggle').onclick = function(){
    this.classList.toggle('active');
    navigation.classList.toggle('active');
}
