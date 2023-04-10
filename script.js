function start(){
    let success = {
        title : 'Success',
        text : 'This is success',
        type : 'success',
        duration: 2000

    }
    let error = {
        title : 'Error',
        text : 'This is error',
        type : 'error',
        duration: 2000

    }
    let icon = {
        success: '<i class="gg-check-o"></i>',
        error: '<i class="gg-danger"></i>'
    }

    function addMessage(typeMessage){
        let sumMessage = document.querySelector("#sumMessage");
        let mes = document.createElement('div');
        mes.setAttribute('id', 'message');
        mes.innerHTML = `
            <div id="iconMessage">
                ${icon[typeMessage.type]}
            </div>
            <div id="contentMessage">
                <p id="title">${typeMessage.title}</p>
                <span id="textContent">${typeMessage.text}</span>
            </div>
            <div id="messageFooter">
                <i class="gg-close"></i>
            </div>
        `
        mes.setAttribute('class',`${typeMessage.type}`)

        mes.style.animation = `dichChuyenMesasge ease 1s, hideMessage ease 1s ${typeMessage.duration/1000}s forwards`

        sumMessage.appendChild(mes)

        setTimeout(() => {
            sumMessage.removeChild(mes)
        }, typeMessage.duration+1000);


    }

    function setOnClickBnt(){
        let buttonScusses = document.querySelector("#buttonSuccess");
        let buttonError = document.querySelector("#buttonError");

        buttonScusses.onclick = function(){
            addMessage(success)
        }

        buttonError.onclick = function(){
            addMessage(error)
        }
    }

    setOnClickBnt();
}

start();