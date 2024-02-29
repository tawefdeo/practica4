let menu, bebida;
menu = prompt("Tacos el panfilo menu; tacos de cerdo, chicharon, bistec, barbacoa, tripa")
switch (menu){
    case 'chicharon':
        bebida = "¿refresco?";
        break;
    case 'cerdo':
        bebida = "¿sangria?";
        break;
    case 'bistec':
       bebida = "¿ Coca Cola?";
        break;
    case 'barbacoa':
        bebida = "¿Un cafecito?";
        break;
    case 'tripa':
        bebida = "¿Agua?";
    break;
    default:
        bebida = "SEguro que no quieres comida, ok esta bien";
    }
alert(bebida);