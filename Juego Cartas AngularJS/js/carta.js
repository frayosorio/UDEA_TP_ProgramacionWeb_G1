function Carta() {
    //atributos
    this.indice = Math.floor(Math.random() * 52) + 1;

    //metodos
    this.getImagen = function(){
        return "imagenes/cartas/Carta" + this.indice + ".jpg";
    }

    //metodo que devuelve el nombre de la carta
    this.getNombre = function () {
        numero = this.indice % 13;
        switch (numero) {
            case 0:
                return "K";
            case 1:
                return "A";
            case 11:
                return "J";
            case 12:
                return "Q";
            default:
                return numero.toString();
        }
    }

    //Metodo que devuelve la pinta de la carta
    this.getPinta = function () {
        if (this.indice <= 13)
            return "Trebol";
        else if (this.indice <= 26)
            return "Pica";
        else if (this.indice <= 39)
            return "Corazon";
        else
            return "Diamante";
    };

    /* Metodo que devuelve el indice en la lista de nombres de carta
    Ace=0, Dos=1, Tres=2, ..., Diez=9, Jack=10, Queen=11, King=12 */
    this.getIndiceNombre = function () {
        residuo = this.indice % 13;
        return residuo == 0 ? 12 : residuo - 1;
    }

}