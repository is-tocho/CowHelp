let _NOMBRE_CLIENTE; // Almacenara el nombre del usuario


let palmeras = 0;

console.log(palmeras);


let eventosSlots = ["null","null","null"];
let horaEventosSlots = [00,00,00];
let minutosEventosSlots = [00,00,00];
let lastEventosSlotsSelector;
let slotsTaken = false;



let tareasSlots = ["null", "null"];
let horaTareasSlots = [00,00];
let minutosTareasSlots = [00,00];
let duracionTareasSlots = [00,00];
let duracionTareasMinutosSlots = [00,00]
let lastTareasSlotsSelector;
let slotsTareasTaken = false;


let tareasInProgress = [false, false];
let done = [false, false];
let descansoDado = [false, false];


const saludosMadrugada = ["Hola ¿Te estás levantando o desvelando?", "Hola, recuerda hacer tus 7 horas de sueño.", 
"Si te estas desvelando espero que tengas una buena razon para ello. 🎮", "Al que madruga, la vaca le ayuda. O algo así."];
const saludosMañana = ["El sol sale, los pajaros cantan, el viento corre, y yo como pasto.",
"Buen dia ¿Ya desayunaste? Te recomiendo hacerlo si aun no lo haces.", "Muuuuy buenos dias ¿Qué planes tienes para hoy?"];
const saludosMediodia = ["Muuuu muuuu ¿muuuu muu muuu? ¡Muuuu! A que no entendiste mi lenguaje vacuno, yo tampoco.",
"Hola ¿Qué vas a almorzar? Si es carne mejor no me digas.", "Hey hey ¿Qué tal fue tu mañana?"];
const saludosTarde = ["Hola ¿Qué harás esta tarde?", "A veces me pregunto si soy una vaca real o una virtual.",
"¿Cómo te va? ¿Ya hiciste tus tareas?", "Nada como una buena merienda en la tarde ¿no?", "A-E-I-O-U, la vaca eres tú."];
const saludosNoche = ["Muuuuy buenas noches, recuerda dormir al menos 7 horas.", "Buenas noches ¿Sabías que las vacas dormimos 4 horas?",
"Es recomendable no usar celulares ni computadoras antes de dormir, la luz que emiten afecta tu sueño",
"Los humanos tienen problemas para dormir, afortunadamente yo soy una vaca."];



window.onload = () => {
    let date = new Date();
    bloquearTeclado(); // El bot no permite escribir hasta dar opciones 
    switch (date.getHours())
    {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5: document.getElementById("SaludoInicial").innerHTML = saludosMadrugada[Math.floor(Math.random() * saludosMadrugada.length)]; escribirMensaje("letI", 500, 500); break;
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11: document.getElementById("SaludoInicial").innerHTML = saludosMañana[Math.floor(Math.random() * saludosMañana.length)]; escribirMensaje("letI", 500, 500); break;
        case 12:
        case 13: document.getElementById("SaludoInicial").innerHTML = saludosMediodia[Math.floor(Math.random() * saludosMediodia.length)]; escribirMensaje("letI", 500, 500); break;
        case 14:
        case 15:
        case 16:
        case 17:
        case 18: document.getElementById("SaludoInicial").innerHTML = saludosTarde[Math.floor(Math.random() * saludosTarde.length)]; escribirMensaje("letI", 500, 500); break;
        case 19:
        case 20:
        case 21:
        case 22:
        case 23: document.getElementById("SaludoInicial").innerHTML = saludosNoche[Math.floor(Math.random() * saludosNoche.length)]; escribirMensaje("letI", 500, 500); break;
    }
    escribirMensaje("letII", 1500, 750);
}




window.setInterval(function(){ 
    var date = new Date(); 
    if(date.getHours() === parseInt(horaEventosSlots[0]) && date.getMinutes() === parseInt(minutosEventosSlots[0]))
    {
        horaEventosSlots[0] = 00;
        minutosEventosSlots[0] = 00;
        alert(eventosSlots[0]);
        eventosSlots[0] = "null";
    }
    if(date.getHours() === parseInt(horaEventosSlots[1]) && date.getMinutes() === parseInt(minutosEventosSlots[1]))
    {
        horaEventosSlots[1] = 00;
        minutosEventosSlots[1] = 00;
        alert(eventosSlots[1]);
        eventosSlots[1] = "null";
    }
    if(date.getHours() === parseInt(horaEventosSlots[2]) && date.getMinutes() === parseInt(minutosEventosSlots[2]))
    {
        horaEventosSlots[2] = 00;
        minutosEventosSlots[2] = 00;
        alert(eventosSlots[2]);
        eventosSlots[2] = "null";
    }

//////////////////////00000000000///////////////////////

    if (date.getHours() === parseInt(horaTareasSlots[0]) && date.getMinutes() === parseInt(minutosTareasSlots[0]) || tareasInProgress[0])
    {
            duracionTareasSlots[0] -= 1000; 
            console.log(duracionTareasSlots[0]);        

            switch(done[0] == false)
            {
                case true:
                    bloquearTeclado();
                    tareasInProgress[0] = true;
                    document.getElementById("NombreTarea").innerHTML = tareasSlots[0];
                    document.getElementById("MinutosRestantes").innerHTML = duracionTareasMinutosSlots[0];
                    escribirMensaje("letXXIV", 500, 750);
                    done[0] = true;
                break;   
            }

            switch (duracionTareasMinutosSlots[0])
            {
                case 5:
                    switch(duracionTareasSlots[0] <= 180000 && duracionTareasSlots[0] >= 150000)
                    {case true: if(descansoDado[0] == false) {escribirMensaje("letXXIV.1.a", 500, 750); descansoDado[0] = true};
                    if (duracionTareasSlots[0] <= 150000) { escribirMensaje("letXXIV.1.b", 500, 750) };break;}break;

                case 15:   
                    switch(duracionTareasSlots[0] <= 450000 && duracionTareasSlots[0] >= 330000)
                    {case true: if(descansoDado[0] == false) {escribirMensaje("letXXIV.1.a", 500, 750); descansoDado[0] = true};
                    if (duracionTareasSlots[0] <= 330000) { escribirMensaje("letXXIV.1.b", 500, 750) }; break;} break;

                case 30:
                    switch(duracionTareasSlots[0] <= 1200000 && uracionTareasSlots[0] >= 840000)
                    {case true: if(descansoDado[0] == false) {escribirMensaje("letXXIV.1.a", 500, 750); descansoDado[0] = true};
                    if (duracionTareasSlots[0] <= 840000) { escribirMensaje("letXXIV.1.b", 500, 750) }; break;} break;

                case 45:
                    switch(duracionTareasSlots[0] <= 1380000 && uracionTareasSlots[0] >= 960000)
                    {case true: if(descansoDado[0] == false) {escribirMensaje("letXXIV.1.a", 500, 750); descansoDado[0] = true};
                    if (duracionTareasSlots[0] <= 960000) { escribirMensaje("letXXIV.1.b", 500, 750) }; break;} break;

                case 60:
                    switch(duracionTareasSlots[0] <= 1800000 && uracionTareasSlots[0] >= 1080000)
                    {case true: if(descansoDado[0] == false) {escribirMensaje("letXXIV.1.a", 500, 750); descansoDado[0] = true};
                    if (duracionTareasSlots[0] <= 1080000) { escribirMensaje("letXXIV.1.b", 500, 750) }; break;} break;
            }

            switch (duracionTareasSlots[0] <= 0)
            {
                case true:
                    tareasInProgress[0] = false;
                    desbloquearTeclado();
                    done[0] = false;
                    descansoDado[0] = false;
                    tareasSlots[0] = "null";
                    horaTareasSlots[0] = 00;
                    minutosTareasSlots[0] = 00;
                    duracionTareasSlots[0] = 00;
                    duracionTareasMinutosSlots[0] = 00;

                    escribirMensaje("letXXIV.2", 500, 500);
                    escribirMensaje("letXXV", 1500, 750)
                break;  
            }

    } 

///////////////////////////111111111111111111111111111111//////////////////////////////////

if (date.getHours() === parseInt(horaTareasSlots[1]) && date.getMinutes() === parseInt(minutosTareasSlots[1]) || tareasInProgress[1])
    {
            duracionTareasSlots[1] -= 1000; 
            console.log(duracionTareasSlots[1]);         

            switch(done[1] == false)
            {
                case true:
                    bloquearTeclado();
                    tareasInProgress[1] = true;
                    document.getElementById("NombreTarea").innerHTML = tareasSlots[1];
                    document.getElementById("MinutosRestantes").innerHTML = duracionTareasMinutosSlots[1];
                    escribirMensaje("letXXIV", 500, 750);
                    done[1] = true;
                break;   
            }

            switch (duracionTareasMinutosSlots[1])
            {
                case 5:
                    switch(duracionTareasSlots[1] <= 180000 && duracionTareasSlots[1] >= 150000)
                    {case true: if(descansoDado[1] == false) {escribirMensaje("letXXIV.1.a", 500, 750); descansoDado[1] = true};
                    if (duracionTareasSlots[1] <= 150000) { escribirMensaje("letXXIV.1.b", 500, 750) };break;}break;

                case 15:   
                    switch(duracionTareasSlots[1] <= 450000 && duracionTareasSlots[1] >= 330000)
                    {case true: if(descansoDado[1] == false) {escribirMensaje("letXXIV.1.a", 500, 750); descansoDado[1] = true};
                    if (duracionTareasSlots[1] <= 330000) { escribirMensaje("letXXIV.1.b", 500, 750) }; break;} break;

                case 30:
                    switch(duracionTareasSlots[1] <= 1200000 && uracionTareasSlots[1] >= 840000)
                    {case true: if(descansoDado[1] == false) {escribirMensaje("letXXIV.1.a", 500, 750); descansoDado[1] = true};
                    if (duracionTareasSlots[1] <= 840000) { escribirMensaje("letXXIV.1.b", 500, 750) }; break;} break;

                case 45:
                    switch(duracionTareasSlots[1] <= 1380000 && uracionTareasSlots[1] >= 960000)
                    {case true: if(descansoDado[1] == false) {escribirMensaje("letXXIV.1.a", 500, 750); descansoDado[1] = true};
                    if (duracionTareasSlots[1] <= 960000) { escribirMensaje("letXXIV.1.b", 500, 750) }; break;} break;

                case 60:
                    switch(duracionTareasSlots[1] <= 1800000 && uracionTareasSlots[1] >= 1080000)
                    {case true: if(descansoDado[1] == false) {escribirMensaje("letXXIV.1.a", 500, 750); descansoDado[1] = true};
                    if (duracionTareasSlots[1] <= 1080000) { escribirMensaje("letXXIV.1.b", 500, 750) }; break;} break;
            }

            switch (duracionTareasSlots[1] <= 0)
            {
                case true:

                    

                    tareasInProgress[1] = false;
                    desbloquearTeclado();
                    done[1] = false;
                    descansoDado[1] = false;
                    tareasSlots[1] = "null";
                    horaTareasSlots[1] = 00;
                    minutosTareasSlots[1] = 00;
                    duracionTareasSlots[1] = 00;
                    duracionTareasMinutosSlots[1] = 00;
                    escribirMensaje("letXXIV.2", 500, 500);
                    escribirMensaje("letXXV", 1500, 750)
                break;  
            }
    } 



}, 1000); 

      

const RespuestaPreguntaTarea = () => {

    let optionClient = document.getElementById("readText").value; // Se obtiene la opcion introducida
    if (optionClient != "") { // Se purga si el campo es dejado en blanco
    msjCliente(optionClient); // Se imprime el mensaje del usuario
    switch (optionClient) {
                            
        case "completada":
        case "COMPLETADA": 
            palmeras = palmeras + 2;
            console.log("PALMERAS===" + palmeras);
            document.getElementById("PalmerasTareaRecompensa").innerHTML = 2;
            document.getElementById("TotalPalmeras").innerHTML = palmeras;
            escribirMensaje("letXXV.1", 500, 500) ,escribirMensaje("letIII.1", 1500, 750); escribirMensaje("letXV", 2500, 1000);
        break;
                            
        case "incompleta":
        case "INCOMPLETA": escribirMensaje("letXXV.2", 500, 500); break; 

        default: rePreguntarTarea();

    }
    } else alert("Debes ingresar una opcion si deseas continuar"); // Se purga opcion vacia

}

                    

const rePreguntarTarea = () => {

    escribirMensaje("letXVI", 500, 500);
    escribirMensaje("letXXV", 1500, 750);

}


const preguntasTareaIncompleta = () => {

    let optionClient = document.getElementById("readText").value; // Se obtiene la opcion introducida
    if (optionClient != "") { // Se purga si el campo es dejado en blanco
    msjCliente(optionClient); // Se imprime el mensaje del usuario
    switch (optionClient) {
                            
        case "1":
        case "a":
        case "A": escribirMensaje("letXXV.3.a", 500, 500); break;
        case "2":
        case "b":
        case "B": escribirMensaje("letXXV.3.b", 500, 500); escribirMensaje("letXXV.3.b.i", 1500, 750); break;
        case "3":
        case "c":
        case "C": escribirMensaje("letXXV.3.c", 500, 500); break;
        case "4":
        case "d":
        case "D": escribirMensaje("letXXV.3.d", 500, 500); break;
        case "5":
        case "e":
        case "E": escribirMensaje("letXXV.3.e", 500, 500); break;
        case "6":
        case "f":
        case "F": escribirMensaje("letXXV.3.f", 500, 500); break;
        default: rePreguntarTarea();
    }

    escribirMensaje("letIII.1", 1500, 750);
    escribirMensaje("letXV", 2500, 1000);

    } else alert("Debes ingresar una opcion si deseas continuar"); // Se purga opcion vacia

}




const bloquearTeclado = () => {
    const input = document.getElementById("readText"); // Selecciona el input del usuario
    const button = document.getElementById("btnReadText"); // Seleccion el boton del usuario

    input.setAttribute("readonly", "readonly"); // Bloquea el input
    button.removeAttribute("onclick"); // Bloquea el boton

    input.style.background = "#AAAAAA"; // Se oscurece el input
    button.style.opacity = "50%";
    

    //button.style.background = "#191050"; // Se oscurece el button
    //button.style.color = "#999999";

    input.value = ""; // Se limpia el input
}

const desbloquearTeclado = destino => {
    const input = document.getElementById("readText"); // Selecciona el input del usuario
    const button = document.getElementById("btnReadText"); // Seleccion el boton del usuario

    input.removeAttribute("readonly"); // Desbloquea el input
    button.setAttribute("onclick", destino); // Desbloquea el botton y define funcion de destino

    input.style.background = "#F5F5F5"; // Se aclarece el input
    button.style.opacity = "100%";

    //button.style.background = "#303F9F"; // Se aclarece el button
    //button.style.color = "#F5F5F5";
}

const escribirMensaje = (letiable, delay1, delay2) => {
    setTimeout(() => {
        asistenteEscribiendo(); // Dispara el mensaje de "escribiendo..." por parte del Bot
        setTimeout(() => { msjAsistente(letiable) }, delay2); // Dispara el mensaje del Bot
    }, delay1);
}

const asistenteEscribiendo = () => {
    const nameAssistant = document.getElementById("nameAssistant").innerHTML; // Obtiene el nombre del Bot
    const assisWrite = document.createElement("div"); // Crea el mensaje vacio

    assisWrite.id = "assisWrite"; // Define ID del mensaje
    assisWrite.innerHTML = `<p id="textAssisWrite">${nameAssistant} esta escribiendo...</p><div id="loadMsjAssis"></div>`; // Llena el mensaje
    contAssistant.appendChild(assisWrite); // Introduce el mensaje dentro del chat

    fixScroll(); // Scrollea hasta abajo;
}

const msjAsistente = leti => {
    let dataToWrite = document.getElementById(leti).innerHTML; // Obtiene la "letiable html" (div) seleccionado mediante ID, ej: letII
    const letNum = leti.substring(3, leti.length); // Obtiene el numero de la "letiable", quitando los primeros 3 caracteres
    const hourAssis = document.createElement('p'); // Creacion de "hora" del mensaje del Bot
    const textAssis = document.createElement('p'); // Creacion de "texto" del mensaje del Bot
    const contAssistant = document.getElementById('contAssistant'); // Selecciona el chat entero

    $('#assisWrite').remove(); // Elimina mensaje "escribiendo" del bot

    if (letNum == "IV") dataToWrite += _NOMBRE_CLIENTE + "!"; // Especifico para nombrar al cliente
    if (letNum == "XIII") dataToWrite += _NOMBRE_CLIENTE + "!"; // Especifico para nombrar al cliente

    hourAssis.className = "hourAssisLeft"; // Define Class de la hora del msj del Bot
    textAssis.className = "textAssisLeft"; // Define Class del texto del msj del Bot

    hourAssis.id = `hourAssisLeft${letNum}`; // Define ID de la hora junto al numero de "letiable"
    textAssis.id = `textAssisLeft${letNum}`; // Define ID del texto junto al numero de "letiable"

    hourAssis.innerHTML = horaActual(); // Obtiene la hora en la que el mensaje es enviado
    textAssis.innerHTML = dataToWrite; // Obtiene la respuesta del mensaje segun la letiable html

    contAssistant.appendChild(hourAssis); // Introduce la hora del msj dentro del chat
    contAssistant.appendChild(textAssis); // Introduce el texto del msj dentro del chat

    determinarAccion(letNum); // En base a la letiable, el programa avanza de forma determinada
    fixScroll(); // Scrollea hasta abajo;
}

const msjCliente = data => {
    bloquearTeclado(); // Una vez escrito el nombre

    const contAssistant = document.getElementById("contAssistant"); // Selecciona el chat entero
    const hourClient = document.createElement("p"); // Creacion de "hora" del mensaje del Usuario
    const textClient = document.createElement("p"); // Creacion de "texto" del mensaje del Usuario

    hourClient.className = "hourClientRight"; // Define Class de la hora del msj del Usuario
    textClient.className = "textClientRight"; // Define Class del texto del msj del Usuario

    hourClient.id = "horaCliente"; // Define ID de la hora del Usuario
    textClient.id = "textoCliente"; // Define ID del texto del Usuario

    hourClient.innerHTML = horaActual(); // Obtiene la hora en la que el mensaje es enviado
    textClient.innerHTML = data; // Se envia la respuesta del mensaje segun el usuario

    contAssistant.appendChild(hourClient); // Introduce la hora del msj dentro del chat
    contAssistant.appendChild(textClient); // Introduce el texto del msj dentro del chat

    fixScroll(); // Scrollea hasta abajo
}

const fixScroll = () => {
    // Scrollea hasta abajo del chat cuando sea ejecutado //
    $("#contAssistant").animate({ scrollTop: $('#contAssistant')[0].scrollHeight }, 100);
}

const determinarAccion = letiable => {
    switch (letiable) { // Desbloquea al teclado a conveniencia y prepara el input para:
        case "II": desbloquearTeclado("sendName()"); break; // para escribir el nombre del usuario
        case "VIII": desbloquearTeclado("optionWhatOrMail()"); break; // para decidir entre wpp y email
        case "IX": desbloquearTeclado("sendWhats()"); break; // par enviar numero de celu
        case "X": desbloquearTeclado("sendMail()"); break; // para enviar correo
        case "XV": desbloquearTeclado("decisionCliente()"); break; // para decidir entre estudio, contacto o salir
        case "XXI": desbloquearTeclado("decisionClienteTarea()"); break; // para decidir materia para profesor particular
        case "XXII": desbloquearTeclado("decisionClienteEvento()"); break; // para registrar un nuevo evento
        case "XXII.1": desbloquearTeclado("decisionClienteHoraEvento()"); break;
        case "XXII.1.a": desbloquearTeclado("decisionClienteMinutosEvento()"); break;
        case "XXI.1.a": desbloquearTeclado("decisionClienteHoraTarea()"); break;
        case "XXI.1.b": desbloquearTeclado("decisionClienteMinutosTarea()"); break;
        case "XXI.1.c" : desbloquearTeclado("decisionClienteDuracionTarea()"); break;
        case "XXV": desbloquearTeclado("RespuestaPreguntaTarea()"); break;
        case "XXV.2": desbloquearTeclado("preguntasTareaIncompleta()"); break;
        case "XXVI.1": desbloquearTeclado("responderAyuda()"); break;
        default: break; // Default no configurado
    }
}

const horaActual = () => {
    const presente = new Date(); // Obtiene la fecha actual
    let horas = presente.getHours(); // Obtiene las horas
    let minutos = presente.getMinutes(); // Obtiene los minutos

    if (horas >= 0 && horas <= 9) horas = "0" + horas; // Agrega un 0 en caso de ser digito unico
    if (minutos >= 0 && minutos <= 9) minutos = "0" + minutos; // Agrega un 0 en caso de ser digito unico

    return horas + ":" + minutos; // Retorna la hora actual de forma presentable
}

const sendName = () => {
    const nameClient = document.getElementById("readText").value; // Se obtiene el nombre introducido
    if (nameClient != "") { // Se purga si el campo es dejado en blanco
        msjCliente(nameClient); // Se imprime el mensaje del usuario

        escribirMensaje("letIV", 500, 500);
        escribirMensaje("letIII", 1500, 500);
        escribirMensaje("letXV", 2500, 750);

        _NOMBRE_CLIENTE = nameClient[0].toUpperCase() + nameClient.slice(1).toLowerCase(); // Se almacena el nombre de forma global (Para reutilizarlo)
    } else alert("Debes ingresar tu nombre si deseas continuar"); // Se purga nombre vacio
}










////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const decisionCliente = () => {
    const optionClient = document.getElementById("readText").value; // Se obtiene la opcion introducida
    if (optionClient != "") { // Se purga si el campo es dejado en blanco
        msjCliente(optionClient); // Se imprime el mensaje del usuario
        switch (optionClient) { // Se procesa la opcion del usuario
            case '1':
            case 'a':
            case 'A': escribirMensaje("letXXII", 500, 750); break;
            case '2':
            case 'b': 
            case 'B': escribirMensaje("letVII", 500, 500); escribirMensaje("letXXI", 1500, 750); break;
            case '3':
            case 'c':
            case 'C': apartadoAyuda(); break;
            case '4':
            case 'd':
            case 'D': salirBot(); break;
            default: clienteReDecide(); break; // En caso de introducir una opcion invalida
        }
    } else alert("Debes ingresar una opcion si deseas continuar"); // Se purga opcion vacia
}

const clienteReDecide = () => {
    // Funcion para reintroducir opciones //
    escribirMensaje("letXVI", 500, 500);
    escribirMensaje("letXV", 1500, 750);
}

const opcionA = () => {
    // Ayudas para estudiar //
    escribirMensaje("letXIV", 1500, 500);
    escribirMensaje("letXV", 2500, 750);
}

const salirBot = () => {
    // Salir del asistente //
    escribirMensaje("letVI", 500, 500);
    setTimeout(() => {
        const discon = document.createElement('p');
        discon.id = "discon";
        discon.innerHTML = "CowHelp se desconecto";
        contAssistant.appendChild(discon);
        fixScroll();
    }, 2000);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




///////////////////////////////////////////////////////////////

const apartadoAyuda = () => {
    //apartado de ayuda e info del bot
    console.log("entre en apartado ayuda");
    escribirMensaje("letXXVI", 500, 500)
    escribirMensaje("letXXVI.1", 1500, 750);
}

const responderAyuda = () => {

    let optionClient = document.getElementById("readText").value; // Se obtiene la opcion introducida
    console.log("OPTIONCLIENT : " + optionClient)
    if (optionClient != "") { // Se purga si el campo es dejado en blanco
        msjCliente(optionClient); // Se imprime el mensaje del usuario
        switch (optionClient){

            case "1":
            case "a":
            case "A": escribirMensaje("letXXVI.1.a", 500, 500); escribirMensaje("letIII.1", 1500, 750); escribirMensaje("letXV", 2500, 1000); break;
            case "2":
            case "b":
            case "B": escribirMensaje("letXXVI.1.b", 500, 500); escribirMensaje("letIII.1", 1500, 750); escribirMensaje("letXV", 2500, 1000); break; 
            case "3":
            case "c":
            case "C": escribirMensaje("letXXVI.1.c", 500, 500); escribirMensaje("letIII.1", 1500, 750); escribirMensaje("letXV", 2500, 750); break;
            case "4":
            case "d":
            case "D": escribirMensaje("letXXVI.1.d", 500, 500); escribirMensaje("letIII.1", 1500, 750); escribirMensaje("letXV", 2500, 750); break;
            default: alert("Debes ingresar una opcion si deseas continuar"); return;

        }
    } else {alert("Debes ingresar una opcion si deseas continuar"); return;}

}














///////////////////////////////////////////////////













///////////////////////////////////////////////////////////////////////////////

const decisionClienteEvento = () => {
    let optionClient = document.getElementById("readText").value; // Se obtiene la opcion introducida
    console.log("OPTIONCLIENT : " + optionClient)
    if (optionClient != "") { // Se purga si el campo es dejado en blanco
        msjCliente(optionClient); // Se imprime el mensaje del usuario
        switch (optionClient) { // Se procesa la opcion del usuario
            case 'VOLVER':
            case 'volver': escribirMensaje("letXXII.4", 500, 500); escribirMensaje("letXV", 1500, 750); return; // Volver al menu

            default: for (i = 0; i <= eventosSlots.length - 1; i++)
            {
                switch (eventosSlots[i] === "null")
                {
                    case true:
                        slotsTaken = false;
                        eventosSlots[i] = optionClient;
                        lastEventosSlotsSelector = i;
                        console.log(eventosSlots[i]);
                        i = eventosSlots.length
                        break;
                    case false:
                        slotsTaken = true;
                        break;
                }
            };
            if (slotsTaken)
            {
                escribirMensaje("letXXII.3", 500, 500);
                escribirMensaje("letIII.1", 1500, 750); // Volver al menu 
                escribirMensaje("letXV", 2500, 1000); // Volver al menu
                return;          
            }          
        }
    } else {alert("Debes ingresar una opcion si deseas continuar"); return;} // Se purga opcion vacia
    
    escribirMensaje("letXXII.1", 500, 750);

}


const decisionClienteHoraEvento = () => {

    let optionClient = document.getElementById("readText").value; // Se obtiene la opcion introducida
    console.log("OPTIONCLIENT : " + optionClient)
    if (optionClient != "") { // Se purga si el campo es dejado en blanco

        if (optionClient >= 0 && optionClient <= 23)
        {
            msjCliente(optionClient); // Se imprime el mensaje del usuario
            switch (optionClient) {
                case 'VOLVER':
                case 'volver':
                    eventosSlots[lastEventosSlotsSelector] = "null";
                    horaEventosSlots[lastEventosSlotsSelector] = 00;
                    minutosEventosSlots[lastEventosSlotsSelector] = 00;
                    escribirMensaje("letXXII.4", 500, 500);
                    escribirMensaje("letXV", 1500, 750); 
                return; // Volver al menu 
    
                default: 
                    for (i = 0; i <= horaEventosSlots.length - 1; i++)
                    {
                        switch (horaEventosSlots[i] === 00)
                        {
                            case true:
                                if (optionClient >= 0 && optionClient <= 9) optionClient = "0" + optionClient;
                                horaEventosSlots[i] = optionClient;
                                lastEventosSlotsSelector = i;
                                console.log(horaEventosSlots[i]);
                                i = horaEventosSlots.length;
                                break;  
                        }
                    };    
            }
        } else {alert("Debes ingresar una hora correcta (00hs a 23hs)"); return;}    
    } else {alert("Debes ingresar una opcion si deseas continuar"); return;} // Se purga opcion vacia

    escribirMensaje("letXXII.1.a", 500, 750);

}




const decisionClienteMinutosEvento = () => {
    let optionClient = document.getElementById("readText").value; // Se obtiene la opcion introducida
    console.log("OPTIONCLIENT : " + optionClient)
    if (optionClient != "") { // Se purga si el campo es dejado en blanco

        if (optionClient >= 0 && optionClient <= 59)
        {
            msjCliente(optionClient); // Se imprime el mensaje del usuario
            switch (optionClient) {
                case 'VOLVER':
                case 'volver':
                    eventosSlots[lastEventosSlotsSelector] = "null";
                    horaEventosSlots[lastEventosSlotsSelector] = 00;
                    minutosEventosSlots[lastEventosSlotsSelector] = 00;
                    escribirMensaje("letXXII.4", 500, 500); 
                    escribirMensaje("letXV", 1500, 750);
                return; // Volver al menu 
                default: for (i = 0; i <= minutosEventosSlots.length - 1; i++)
                    {
                        switch (minutosEventosSlots[i] === 00)
                        {
                            case true:
                                if (optionClient >= 0 && optionClient <= 9) optionClient = "0" + optionClient;
                                minutosEventosSlots[i] = optionClient;
                                lastEventosSlotsSelector = i;
                                console.log(minutosEventosSlots[i]);
                                i = minutosEventosSlots.length;
                                break;
                        }
                    };        
            }
        }else {alert("Debes ingresar minutos correctos (00m a 59m)"); return;}        
    } else {alert("Debes ingresar una opcion si deseas continuar"); return;} // Se purga opcion vacia

    document.getElementById("Evento").innerHTML = eventosSlots[lastEventosSlotsSelector];
    document.getElementById("HoraEvento").innerHTML = horaEventosSlots[lastEventosSlotsSelector];
    document.getElementById("MinutosEvento").innerHTML = minutosEventosSlots[lastEventosSlotsSelector];

    console.log(eventosSlots + "/" + horaEventosSlots + "/" + minutosEventosSlots);


    escribirMensaje("letXXII.2.a", 500, 500);

    escribirMensaje("letIII.1", 1500, 750); // Volver al menu 
    escribirMensaje("letXV", 2500, 750); // Volver al menu 

}

/////////////////////////////////////////////













/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const decisionClienteTarea = () => {
    let optionClient = document.getElementById("readText").value; // Se obtiene la opcion introducida
    console.log("OPTIONCLIENT : " + optionClient)
    if (optionClient != "") { // Se purga si el campo es dejado en blanco
        msjCliente(optionClient); // Se imprime el mensaje del usuario
        switch (optionClient) { // Se procesa la opcion del usuario
            case 'VOLVER':
            case 'volver': escribirMensaje("letXXI.4", 500, 500); escribirMensaje("letXV", 1500, 750); return; // Volver al menu 
            default: for (i = 0; i <= tareasSlots.length - 1; i++)
            {
                switch (tareasSlots[i] === "null")
                {
                    case true:
                        slotsTareasTaken = false;
                        tareasSlots[i] = optionClient;
                        lastTareasSlotsSelector = i;
                        console.log(lastTareasSlotsSelector);
                        console.log(tareasSlots[i]);
                        i = tareasSlots.length
                        break;
                    case false:
                        slotsTareasTaken = true;
                        break;
                }
            };
            if (slotsTareasTaken)
            {
                escribirMensaje("letXXI.3", 500, 500);
                escribirMensaje("letIII.1", 1500, 750); // Volver al menu 
                escribirMensaje("letXV", 2500, 1000); // Volver al menu
                return;          
            }          
        }
    } else {alert("Debes ingresar una opcion si deseas continuar"); return;} // Se purga opcion vacia
    
    escribirMensaje("letXXI.1.a", 500, 500);
}


const decisionClienteHoraTarea = () => {

    let optionClient = document.getElementById("readText").value; // Se obtiene la opcion introducida
    console.log("OPTIONCLIENT : " + optionClient)
    if (optionClient != "") { // Se purga si el campo es dejado en blanco

        if (optionClient >= 0 && optionClient <= 23)
        {
            msjCliente(optionClient); // Se imprime el mensaje del usuario
        switch (optionClient) {
            case 'VOLVER':
            case 'volver':
                tareasSlots[lastTareasSlotsSelector] = "null";
                horaTareasSlots[lastTareasSlotsSelector] = 00;
                minutosTareasSlots[lastTareasSlotsSelector] = 00;
                duracionTareasSlots[lastTareasSlotsSelector] = 00;
                duracionTareasMinutosSlots[lastTareasSlotsSelector] = 00;
                escribirMensaje("letXXI.4", 500, 500); escribirMensaje("letXV", 1500, 750); return; // Volver al menu 
            default: for (i = 0; i <= horaTareasSlots.length - 1; i++)
                {
                    switch (horaTareasSlots[i] === 00)
                    {
                        case true:
                            if (optionClient >= 0 && optionClient <= 9) optionClient = "0" + optionClient;
                            horaTareasSlots[i] = optionClient;
                            lastTareasSlotsSelector = i;
                            console.log(horaTareasSlots[i]);
                            i = horaTareasSlots.length;
                            break;  
                    }
                };        
        }
        } else {alert("Debes ingresar una hora correcta (00hs a 23hs)"); return;}    

        
    } else {alert("Debes ingresar una opcion si deseas continuar"); return;} // Se purga opcion vacia

    escribirMensaje("letXXI.1.b", 500, 500);

}

const decisionClienteMinutosTarea = () => {

    let optionClient = document.getElementById("readText").value; // Se obtiene la opcion introducida
    console.log("OPTIONCLIENT : " + optionClient)
    if (optionClient != "") { // Se purga si el campo es dejado en blanco

        if (optionClient >= 0 && optionClient <= 59)
        {
            msjCliente(optionClient); // Se imprime el mensaje del usuario
            switch (optionClient) {
                case 'VOLVER':
                case 'volver':
                    tareasSlots[lastTareasSlotsSelector] = "null";
                    horaTareasSlots[lastTareasSlotsSelector] = 00;
                    minutosTareasSlots[lastTareasSlotsSelector] = 00;
                    duracionTareasSlots[lastTareasSlotsSelector] = 00;
                    duracionTareasMinutosSlots[lastTareasSlotsSelector] = 00;
                    escribirMensaje("letXXI.4", 500, 500); escribirMensaje("letXV", 1500, 750); return; // Volver al menu 
                default: for (i = 0; i <= minutosTareasSlots.length - 1; i++)
                    {
                        switch (minutosTareasSlots[i] === 00)
                        {
                            case true:
                                if (optionClient >= 0 && optionClient <= 9) optionClient = "0" + optionClient;
                                minutosTareasSlots[i] = optionClient;
                                lastTareasSlotsSelector = i;
                                console.log(minutosTareasSlots[i]);
                                i = minutosTareasSlots.length;
                                break;  
                        }
                    };        
            }
        } else {alert("Debes ingresar minutos correctos (00m a 59m)"); return;}       
    } else {alert("Debes ingresar una opcion si deseas continuar"); return;} // Se purga opcion vacia

    escribirMensaje("letXXI.1.c", 500, 750);
}




const decisionClienteDuracionTarea = () => {

    let optionClient = document.getElementById("readText").value; // Se obtiene la opcion introducida
    console.log("OPTIONCLIENT : " + optionClient)
    if (optionClient != "") { // Se purga si el campo es dejado en blanco
        //msjCliente(optionClient); // Se imprime el mensaje del usuario
        switch (optionClient) {

            case "1":
            case "a":
            case "A": for (i = 0; i <= duracionTareasSlots.length - 1; i++)
            {
                switch (duracionTareasSlots[i] === 00)
                {
                    case true:
                        duracionTareasSlots[i] = 300000;
                        duracionTareasMinutosSlots[i] = 5;
                        i = duracionTareasSlots.length;
                        msjCliente(optionClient); // Se imprime el mensaje del usuario
                        break;  
                }
            };  break;


            case "2":
            case "b":
            case "B": for (i = 0; i <= duracionTareasSlots.length - 1; i++)
            {
                switch (duracionTareasSlots[i] === 00)
                {
                    case true:
                        duracionTareasSlots[i] = 900000;
                        duracionTareasMinutosSlots[i] = 15;
                        i = duracionTareasSlots.length;
                        msjCliente(optionClient); // Se imprime el mensaje del usuario
                        break;  
                }
            };  break;


            case "3":
            case "c":
            case "C": for (i = 0; i <= duracionTareasSlots.length - 1; i++)
            {
                switch (duracionTareasSlots[i] === 00)
                {
                    case true:
                        duracionTareasSlots[i] = 1800000;
                        duracionTareasMinutosSlots[i] = 30;
                        i = duracionTareasSlots.length;
                        msjCliente(optionClient); // Se imprime el mensaje del usuario
                        break;  
                }
            };  break;


            case "4":
            case "d":
            case "D": for (i = 0; i <= duracionTareasSlots.length - 1; i++)
            {
                switch (duracionTareasSlots[i] === 00)
                {
                    case true:
                        duracionTareasSlots[i] = 2700000;
                        duracionTareasMinutosSlots[i] = 45;
                        i = duracionTareasSlots.length;
                        msjCliente(optionClient); // Se imprime el mensaje del usuario
                        break;  
                }
            };  break;


            case "5":
            case "d":
            case "D": for (i = 0; i <= duracionTareasSlots.length - 1; i++)
            {
                switch (duracionTareasSlots[i] === 00)
                {
                    case true:
                        duracionTareasSlots[i] = 3600000;
                        duracionTareasMinutosSlots[i] = 60;
                        i = duracionTareasSlots.length;
                        msjCliente(optionClient); // Se imprime el mensaje del usuarios
                        break;  
                }
            };  break;

            

            case 'VOLVER':
            case 'volver':
                msjCliente(optionClient); // Se imprime el mensaje del usuario
                tareasSlots[lastTareasSlotsSelector] = "null";
                horaTareasSlots[lastTareasSlotsSelector] = 00;
                minutosTareasSlots[lastTareasSlotsSelector] = 00;
                sduracionTareasSlots[lastTareasSlotsSelector] = 00;
                duracionTareasMinutosSlots[lastTareasSlotsSelector] = 00;
                escribirMensaje("letXXI.4", 500, 500); escribirMensaje("letXV", 1500, 750); return; // Volver al menu 
            default: alert("Debes ingresar una opción si deseas continuar"); return;
        }
    } else {alert("Debes ingresar una opcion si deseas continuar"); return;} // Se purga opcion vacia

    console.log(lastTareasSlotsSelector);

    document.getElementById("Tarea").innerHTML = tareasSlots[lastTareasSlotsSelector];
    document.getElementById("HoraTarea").innerHTML = horaTareasSlots[lastTareasSlotsSelector];
    document.getElementById("MinutosTarea").innerHTML = minutosTareasSlots[lastTareasSlotsSelector];
    document.getElementById("DuracionTarea").innerHTML = duracionTareasMinutosSlots[lastTareasSlotsSelector];

    console.log("TAREA REGISTRADA: " + tareasSlots + "/////" + horaTareasSlots + "//////" + minutosTareasSlots + 
    "/////" + duracionTareasSlots + "/////" + duracionTareasMinutosSlots);


    escribirMensaje("letXXI.2", 500, 500);

    escribirMensaje("letIII.1", 1500, 750); // Volver al menu 
    escribirMensaje("letXV", 2500, 750); // Volver al menu 

}


///////////////////////////////////////////////////










//////////////????????????????????//////////////////////////////////////////////////////////



const clienteReDecideEstudio = () => {
    // Funcion para reintroducir opciones //
    escribirMensaje("letXVI", 500, 500);
    escribirMensaje("letXXII", 1500, 750);
}


const clienteReDecideParticular = () => {
    // Funcion para reintroducir opciones //
    escribirMensaje("letXVI", 500, 500);
    escribirMensaje("letXXI", 1500, 750);
}

const optionWhatOrMail = () => {
    const optionClient = document.getElementById("readText").value; // Se obtiene la opcion introducida
    if (optionClient != "") { // Se purga si el campo es dejado en blanco
        msjCliente(optionClient); // Se imprime el mensaje del usuario
        switch (optionClient) { // Se procesa la opcion del usuario
            case '1':
            case 'a':
            case 'A': escribirMensaje("letIX", 500, 500); break;
            case '2':
            case 'b':
            case 'B': escribirMensaje("letX", 500, 500); break;
            default: optionReWhatOrMail(); break; // En caso de introducir una opcion invalida
        }
    } else alert("Debes ingresar una opcion si deseas continuar"); // Se purga opcion vacia
}

const optionReWhatOrMail = () => {
    // Funcion para reintroducir opciones //
    escribirMensaje("letXVI", 500, 500);
    escribirMensaje("letVIII", 1500, 750);
}

const sendWhats = () => {
    const dato = document.getElementById('readText').value; // Se obtiene el numero de telefono ingresado
    if (dato != "") { // Se filtra si el campo es dejado en blanco
        if (dato.length == 10) { // Se filtra numero con la cantidad correspondiente
            for (let i = 0; i < dato.length; i++) { // Se analizan todos los caracteres
                if (dato.charCodeAt(i) > 47 && dato.charCodeAt(i) < 58) { // Filtra que los caracteres sean entre 0 y 9
                    bloquearTeclado(); // Se bloquea el teclado
                    msjCliente(dato); // Se imprime el numero ingresado
                    escribirMensaje("letXIII", 500, 500);
                    escribirMensaje("letXIV", 1500, 750);
                    escribirMensaje("letXV", 2500, 750);
                    break;
                } else {
                    bloquearTeclado();
                    msjCliente(dato);
                    sendReWhats(); // En caso de que el numero sea invalido
                }
            }
        } else {
            bloquearTeclado();
            msjCliente(dato);
            sendReWhats();
        }
    } else alert("Debes ingresar un numero si deseas continuar"); // Se filtra si el campo es dejado en blanco
}

const sendReWhats = () => {
    // Funcion para reintroducir opciones //
    escribirMensaje("letXI", 500, 500);
    escribirMensaje("letIX", 1500, 750);
}

const sendMail = () => {
    let check = false; // Check de verificar el correo
    const dato = document.getElementById('readText').value; // Se obtiene el correo introducido

    if (dato != "") { // Se filtra si es dejado en blanco
        for (let x = 0; x < dato.length; x++) { // Se analiza todos los caracteres
            if (dato.charCodeAt(x) == 64) { // Busca un arroba (@)
                for (let y = x; y < dato.length; y++) { // Analiza los caracteres restantes
                    if (dato.charCodeAt(y) == 46) { // Busca un punto (.)
                        check = true; break; // Una vez encontrados el @ y el . el mail se da como valido 
                    }
                }
            }
        }
        bloquearTeclado(); // Se bloquea el teclado una vez ingresado el correo
        msjCliente(dato); // Se imprime en pantalla el correo

        if (check) {
            escribirMensaje("letXIII", 500, 500);
            escribirMensaje("letXIV", 1500, 750);
            escribirMensaje("letXV", 2500, 750);
        } else sendReMail(); // En caso de enviar una opcion invalida
    } else alert("Debes ingresar un correo si deseas continuar"); // Se filtra campo en blanco
}

const sendReMail = () => {
    // Funcion para reintroducir opciones //
    escribirMensaje("letXII", 500, 500);
    escribirMensaje("letX", 1500, 750);
}

// # Esto lo guardo para saber como generar la interfaz de opciones # //
// function decisiones() {
//    let decision = document.createElement('div');
//    decision.setAttribute("class", "decision");
//    let optionI = document.createElement("div");
//    optionI.setAttribute("class", "option");
//    optionI.setAttribute("id", "optionIII-I");
//    optionI.setAttribute("onclick", "selectOptI()");
// }

// # Esto lo guardo porque me parecio interesante # //
/* function envioDatos() {
   let nombre = _NOMBRE_CLIENTE;
   let destino = document.getElementById("letMail").innerHTML;
   let datos = document.getElementById("datosCliente").innerHTML;
   let letPregunta = document.getElementById("letVII").innerHTML;
   let rsptDeCliente = document.getElementById("rsptDeCliente").innerHTML;
   let letPreguntaOpciones = document.getElementById("letVIII").innerHTML;
   let letOpcionI = document.getElementById("letIX").innerHTML;
   let letOpcionII = document.getElementById("letX").innerHTML;
   let letOpcionIII = document.getElementById("letXI").innerHTML;
   if (optionSelect == 1) optionSelect = letOpcionI;
   if (optionSelect == 2) optionSelect = letOpcionII;
   if (optionSelect == 3) optionSelect = letOpcionIII;
   let param = {
      destino: destino,
      nombre: nombre,
      datos: datos,
      preguntaInteres: letPregunta,
      rsptaInteres: rsptDeCliente,
      preguntaOpciones: letPreguntaOpciones,
      opcionSelect: optionSelect
   } $.ajax({
      data: param,
      url: "envioMail/contacto.php",
      method: "post",
      success: data=>{}
   }) $.ajax({
      data: param,
      url: "envioMail/enviar.php",
      method: "post",
      success: data=>{}
   }) $.ajax({url: "basicConfig.php",success: data=>{}});
}*/