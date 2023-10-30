let fuc_display_work = true

const HandleCloseElement = (id) => {
    if (fuc_display_work) {
        return;
    } else {
        const Ele = document.getElementById(id)
        if (Ele) {
            if (!Ele.classList.contains('hidden')) {
                Ele.classList.add('hidden')
            }
        }
    }
}

const HandleDisplayElement = (id) => {
    const Ele = document.getElementById(id)
    if (Ele) {
        fuc_display_work = true
        if (Ele.classList.contains('hidden')) {
            Ele.classList.remove('hidden')
            Ele.classList.add('block')
        }
        setTimeout(() => fuc_display_work = false , 4000)
    }
}

module.exports = {HandleCloseElement , HandleDisplayElement}