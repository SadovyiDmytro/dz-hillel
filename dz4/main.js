let date = prompt("Вкажіть дату народження", '')
    if (date == null) {
        alert ('Шкода, що Ви не захотіли ввести свою дату народження');
    };

let city = prompt("Вкажіть місто проживання", '')
    if (city == null) {
        alert ('Шкода, що Ви не захотіли ввести своє місто проживання');
    }
    else if (city == 'Київ') {
        alert('Ти живеш у столиці України');
    }
    else if (city == 'Лондон') {
        alert('Ти живеш у столиці Англії');
    }
    else if (city == 'Вашингтон') {
        alert('Ти живеш у столиці США');
    }
    else {
        alert('Ти живеш у місті '+ city +'');
    };

let sport = prompt("Вкажіть улюблений вид спорту", '')
    if (sport == null) {
        alert ('Шкода, що Ви не захотіли ввести свій улюблений вид спорту');
    }
    else if (sport == 'Футбол') {
        alert('Круто! Хочеш стати Мессі?');
    }
    else if (sport == 'Теніс') {
        alert('Круто! Хочеш стати Федерером?');
    }
    else if (sport == 'Формула 1') {
        alert('Круто! Хочеш стати Шумахером?');
    };





