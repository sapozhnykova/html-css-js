const mnth = prompt ("Введіть номер місяця.");
switch (mnth) {
case '1':
case '2':
case '12':
alert("Зима");
break;
}
switch (mnth) {
case '3':
case '4':
case '5':
alert("Весна");
break;
}
switch (mnth) {
case '6':
case '7':
case '8':
alert("Літо");
break;
}
switch (mnth) {
case '9':
case '10':
case '11':
alert("Осінь");
break;
default:
    alert('Не вірний номер!');
}
