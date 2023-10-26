
const panelFront = document.getElementById('front-panel');
const panelBack = document.getElementById('back-panel');

const infoFront = document.getElementById('front-info');
const infoBack = document.getElementById('back-info');

panelFront.addEventListener('click', function(event) {
    if(panelBack.className === 'container-box-desactived') {
        panelFront.className = 'container-box-actived'
        infoFront.className = 'container-info'
    } else {
        panelBack.className = 'container-box-desactived'
        infoBack.className = 'disable'
        panelFront.className = 'container-box-actived'
        infoFront.className = 'container-info'
    }
})


panelBack.addEventListener('click', function(event) {
    if(panelFront.className === 'container-box-desactived') {
        panelBack.className = 'container-box-actived'
        infoBack.className = 'container-info'
    } else {
        panelFront.className = 'container-box-desactived'
        infoFront.className = 'disable'
        panelBack.className = 'container-box-actived'
        infoBack.className = 'container-info'
    }
})

panelFront.addEventListener('dblclick', function(event) {
    panelFront.className = 'container-box-desactived'
    infoFront.className = 'disable'
    panelBack.className = 'container-box-desactived'
    infoBack.className = 'disable'
})

panelBack.addEventListener('dblclick', function(event) {
    panelFront.className = 'container-box-desactived'
    infoFront.className = 'disable'
    panelBack.className = 'container-box-desactived'
    infoBack.className = 'disable'
})
