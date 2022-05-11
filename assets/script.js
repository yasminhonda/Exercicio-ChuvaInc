function videoLegends() {
    let video = document.querySelector('video')
    let p = document.querySelector('.video p')
    if (video.paused == 'true') {
        p.style.display = 'inline'
        p.innerHTML = 'oi'
    }
}

videoLegends()