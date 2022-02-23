const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const extra = ["!", "$", "%"]
let h = [];
let u = [];

const Gen = async () => {
    const salt = Math.floor((Math.random() * 30) + 10)
    let sh = "";
    for (let i = 0; i < letters.length; i++) {
        const upperSlut = letters[i].toUpperCase()
        u = u.concat(upperSlut);
    }
    h = h.concat(u, extra, letters)
    for (let i = 0; i < salt; i++) {const genPass = h[Math.floor(Math.random() * h.length)]; sh = sh.concat(genPass);}; sh = sh.concat("!"); const copier = navigator.clipboard.writeText(sh); return copier;
}
const starter = $(".startBtn").on('click', Gen)