



let fitTesxOnSash = (item) => { // dopasowanie textu na szarfie
    let part = item.querySelector('.major_part');
    let txt = item.querySelector('.text');

    let h = part.getBoundingClientRect().height;

    txt.style.setProperty('font-size', (h / 13) + 'px');
    // txt.style.setProperty('line-height', (h / 220));
}


const elems = document.querySelectorAll('.let_anim');
for (let i = 0; i < elems.length; i++) { // nadawanie id - do kontroli animacji
    e = elems[i];
    e.id = 'CMS_elem_' + i;
    fitTesxOnSash(e);
}

setInterval(() => { // włączanie animacji jak się pojawią w obszarze ekranu
    for (let e of elems) {
        let pos = e.getBoundingClientRect();
        if (e.getAttribute('data-a') != 'on'
            && ((pos.top > 0 && pos.top < window.innerHeight)
                || (pos.bottom > 0 && pos.bottom < window.innerHeight))) {

            e.setAttribute('data-a', 'on');
            let anim = e.querySelector('.glow');
            let time = (3 + (Math.random() * 4));
            // console.log('%c amin elem id:', 'background: #ffcc00; color: #003300', e.id, time)

            anim.style.setProperty('animation-duration', time + 's')
            anim.style.display = 'block';
        }
        fitTesxOnSash(e);
    }
}, 100);


// document.addEventListener('mouseover', e => {
//     let tar = e.target;
//     console.log('%c tar:', 'background: #ffcc00; color: #003300', tar)
// })


{ // formatowanie h1
    let h1 = document.querySelector('h1');
    let hend_text = document.querySelector('.title_hendler .hend_text');
    let title_hendler = document.querySelector('.title_hendler');
    let title = h1.innerHTML.split(' ');

    h1.style.setProperty('animation-name', 'wait_for_load');
    h1.style.setProperty('animation-iteration-count', 'infinite');
    hend_text.style.setProperty('animation-name', 'wait_for_load');
    hend_text.style.setProperty('animation-iteration-count', 'infinite');

    let title2 = hend_text.innerHTML.split(' ');
    hend_text.innerHTML = title2[0];

    if (title.length != 1) {
        let res = title[0];

        res += '<br><b>'
        for (let i = 1; i != title.length; i++) {
            res += ' ' + title[i];
        }
        res += '</b>'
        h1.innerHTML = res;
    } else {
        h1.style.top = '60px';
        title_hendler.style.height = '100px'
    }
}


{ // odpalanie animacji h1 po załadowaniu strony
    let h1 = document.querySelector('h1');
    let hend_text = document.querySelector('.hend_text');
    setTimeout(() => {
        h1.style.setProperty('animation-name', 'spread');
        h1.style.setProperty('animation-iteration-count', '1');
        hend_text.style.setProperty('animation-name', 'fade_left');
        hend_text.style.setProperty('animation-iteration-count', '1');
    }, 100);
}

// ---------------------------------------

const baner_links = document.querySelectorAll('.baner_link');
const baner_link_big = document.querySelectorAll('.baner_link_big');
const fit_imgs = document.querySelectorAll('.fit_img');
const proportions = document.querySelectorAll('.proportions');

let caniSee = item => { // sprawdza czy obszar jest widoczny na ekranie
    let pos = item.getBoundingClientRect();
    if (item.getAttribute('data-a') != 'on'
        && ((pos.top > 0 && pos.top < window.innerHeight)
            && (pos.bottom > 0 && pos.bottom < window.innerHeight))) {

        item.setAttribute('data-a', 'on');
        return true
    }
    return false
}
let caniSeeIcon = item => { // sprawdza czy obszar jest widoczny na ekranie
    let pos = item.getBoundingClientRect();
    if (item.getAttribute('data-i') != 'on'
        && ((pos.top > 0 && pos.top < window.innerHeight)
            || (pos.bottom > 0 && pos.bottom < window.innerHeight))) {

        item.setAttribute('data-i', 'on');
        return true
    }
    return false
}

const setAnim = (item, handAnim, trueAnim) => { // włącza animację napisów na polach z linkami
    let hend_text = item.querySelector('.hend_text');
    let true_font = item.querySelector('.true_font');
    hend_text.style.setProperty('animation-name', handAnim);
    hend_text.style.opacity = '1';
    true_font.style.setProperty('animation-name', trueAnim);
    true_font.style.opacity = '1';

    setTimeout(() => {
        hend_text.style.color = '#333333';
        true_font.style.color = '#ffffff';
    }, 100);

}

const setAnimIcon = (item, speed_L, speed_R) => {
    let r = item.getBoundingClientRect();
    let iconL = item.querySelector('.anim_icon_left');
    if (iconL) {
        iconL.style.fontSize = r.height * .9 + 'px';
        iconL.style.setProperty('animation-duration', (speed_L + (Math.random() * speed_L)) + 's');
    }

    let iconR = item.querySelector('.anim_icon_right');
    if (iconR) {
        iconR.style.fontSize = r.height * .6 + 'px';
        iconR.style.setProperty('animation-duration', (speed_R + (Math.random() * speed_R)) + 's');
    }
}

setInterval(() => { // sprawdza na których elkementach włączyć animację
    for (let bl of baner_links) {
        if (caniSee(bl)) {
            setAnim(bl, 'fade_left_2', 'spread_2')
        }
        if (caniSeeIcon(bl)) {
            setAnimIcon(bl, 12, 6)
        }
    }
    for (let bl of baner_link_big) {
        if (caniSee(bl)) {
            setAnim(bl, 'fade_left_3', 'spread_2')
        }
        if (caniSeeIcon(bl)) {
            setAnimIcon(bl, 20, 10)
        }
    }
}, 100);

for (let bl of baner_links) { // wtawianie atrybutow linków
    let color = bl.getAttribute('data-c');
    if (color != null && color != '') {
        bl.style.backgroundColor = color;
    }
}

let sash = document.querySelectorAll('.sash');
for (let sa of sash) { // włączanie szarf
    let on = sa.getAttribute('data-on');
    if (on != null && on == 'on') {
        sa.style.display = 'inline'
    }
}

let f_baner_links = () => { // stawianie wielkości czcionki na linku
    for (let bl of baner_links) {
        let hand = bl.querySelector('.hend_text');
        let font = bl.querySelector('.true_font');
        let iconL = bl.querySelector('.anim_icon_left');
        let iconR = bl.querySelector('.anim_icon_right');
        let r = bl.getBoundingClientRect();

        hand.style.fontSize = r.width / 7 + 'px';
        font.style.fontSize = r.width / 6.5 + 'px';
        if (iconL) {
            iconL.style.fontSize = r.height * .9 + 'px';
        }
        if (iconR) {
            iconR.style.fontSize = r.height * .6 + 'px';
        }
    }
}

let f_baner_link_big = () => { // stawianie wielkości czcionki na większym linkku
    for (let bl of baner_link_big) {
        let hand = bl.querySelector('.hend_text');
        let font = bl.querySelector('.true_font');
        let iconL = bl.querySelector('.anim_icon_left');
        let iconR = bl.querySelector('.anim_icon_right');
        let r = bl.getBoundingClientRect();

        hand.style.fontSize = r.width / 8 + 'px';
        font.style.fontSize = r.width / 7.3 + 'px';
        if (iconL) {
            iconL.style.fontSize = r.height * .9 + 'px';
        }
        if (iconR) {
            iconR.style.fontSize = r.height * .6 + 'px';
        }
    }
}

let f_proportions = () => { // ustawianie proporcji
    for (let p of proportions) {
        let h = p.getAttribute('data-h');
        if (h != null) {
            let prop = Number(h) / 100;
            let orygin_w = p.getBoundingClientRect().width;

            p.style.height = orygin_w * prop + 'px';
        }
    }
}

let f_fit_imgs = () => { // dopasowywanie zjęć do wielkości parenta
    for (let fi of fit_imgs) {
        // console.log('%c fi:', 'background: #ffcc00; color: #003300', fi)
        let rect = fi.parentElement.getBoundingClientRect();
        let h = rect.height;
        let w = rect.width;
        let p = fi.naturalHeight / fi.naturalWidth;

        if (h > w) {
            if (p > h / w) {
                fi.style.width = h + 'px';
                fi.style.height = h * p + 'px';
            } else {
                fi.style.width = h / p + 'px';
                fi.style.height = h + 'px';
            }
        } else {
            if (p > h / w) {
                fi.style.width = w + 'px';
                fi.style.height = w * p + 'px';
            } else {
                fi.style.width = w / p + 'px';
                fi.style.height = w + 'px';
            }
        }
    }
}

setInterval(() => {

    f_baner_links();
    f_baner_link_big();
    f_proportions();
    f_fit_imgs();

}, 300);

f_baner_links();
f_baner_link_big();
f_proportions();
f_fit_imgs();



// ---tests----

document.addEventListener('keypress', e => {
    // let key = e.code;
    // console.log('%c key:', 'background: #ffcc00; color: #003300', e)

    const elems = document.querySelectorAll('.let_anim');
    let list = [];
    for (let e of elems) {
        let pos = e.getBoundingClientRect();
        list.push([pos.top, pos.bottom]);
        let test = e.querySelector('.text').innerHTML;
        console.log('%c test:', 'background: #ffcc00; color: #003300', test)
    }
    console.table(list)

});