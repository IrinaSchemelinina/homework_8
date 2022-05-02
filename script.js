let html = document.querySelector('html');
html.setAttribute('lang', 'en');

let meta = document.createElement('meta');
meta.setAttribute('charset','UTF-8');
document.head.appendChild(meta);

let title = document.createElement('title');
title.innerHTML = 'Call to Action';
document.head.appendChild(title);

let link = document.createElement('link');
link.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Libre+Bodoni:ital,wght@0,400;0,500;0,700;1,400;1,700&display=swap');
link.setAttribute('rel', 'stylesheet');
document.head.appendChild(link);


let h2 = document.createElement('h2');
h2.innerHTML = 'Choose Your Option';
h2.style.fontFamily = `'Libre Bodoni', serif`;
h2.style.fontSize = '46px';
h2.style.textAlign = 'center';
document.body.appendChild(h2);

let p = document.createElement('p');
p.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
p.style.fontFamily = `'Libre Bodoni', serif`;
p.style.fontSize = '20px';
p.style.color = '#808080';
p.style.textAlign = 'center';
document.body.appendChild(p);


let divForm = document.createElement('div');
divForm.classList.add('container');
divForm.style.marginTop = '50px';
divForm.style.width = '800px';
divForm.style.display = 'flex';
divForm.style.marginLeft = 'auto';
divForm.style.marginRight = 'auto';
divForm.style.backgroundColor = 'green';
divForm.style.border = '1px solid #808080';
divForm.style.borderRadius = '5px';
document.body.appendChild(divForm);

let divLeft = document.createElement('div');
divLeft.classList.add('container_left');
divLeft.style.width = '400px';
divLeft.style.display = 'flex';
divLeft.style.flexDirection = 'column';
divLeft.style.backgroundColor = '#fff';
divForm.appendChild(divLeft);

let divRight = document.createElement('div');
divRight.classList.add('container_right');
divRight.style.width = '400px';
divRight.style.display = 'flex';
divRight.style.flexDirection = 'column';
divRight.style.backgroundColor = '#9370DB';
divForm.appendChild(divRight);


let h3Left = document.createElement('h3');
h3Left.innerHTML = 'freelancer';
h3Left.style.fontFamily = `'Libre Bodoni', serif`;
h3Left.style.fontSize = '16px';
h3Left.style.color = '#808080';
h3Left.style.textAlign = 'center';
h3Left.style.textTransform = 'uppercase';
h3Left.style.letterSpacing = '2.4px';
h3Left.style.paddingTop = '80px'
divLeft.appendChild(h3Left);

let h3Right = document.createElement('h3');
h3Right.innerHTML = 'studio';
h3Right.style.fontFamily = `'Libre Bodoni', serif`;
h3Right.style.fontSize = '16px';
h3Right.style.color = '#FFD700';
h3Right.style.textAlign = 'center';
h3Right.style.textTransform = 'uppercase';
h3Right.style.letterSpacing = '2.4px';
h3Right.style.paddingTop = '80px'
divRight.appendChild(h3Right);

let h2Left = document.createElement('h2');
h2Left.innerHTML = 'Initially designed to';
h2Left.style.fontFamily = `'Libre Bodoni', serif`;
h2Left.style.fontSize = '46px';
h2Left.style.textAlign = 'center';
h2Left.style.padding = '0 60px';
divLeft.appendChild(h2Left);

let h2Right = document.createElement('h2');
h2Right.innerHTML = 'Initially designed to';
h2Right.style.fontFamily = `'Libre Bodoni', serif`;
h2Right.style.color = '#fff';
h2Right.style.fontSize = '46px';
h2Right.style.textAlign = 'center';
h2Right.style.padding = '0 60px';
divRight.appendChild(h2Right);

let pLeft = document.createElement('p');
pLeft.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
pLeft.style.fontSize = '16px';
pLeft.style.fontFamily = `'Libre Bodoni', serif`;
pLeft.style.color = '#808080';
pLeft.style.padding = '0 60px';
pLeft.style.textAlign = 'center';
pLeft.style.lineHeight = '24px';
divLeft.appendChild(pLeft);

let pRight = document.createElement('p');
pRight.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
pRight.style.fontSize = '16px';
pRight.style.fontFamily = `'Libre Bodoni', serif`;
pRight.style.color = '#fff';
pRight.style.padding = '0 60px';
pRight.style.textAlign = 'center';
pRight.style.lineHeight = '24px';
divRight.appendChild(pRight);

let btnLeft = document.createElement('button');
btnLeft.innerHTML = 'start here';
btnLeft.style.fontFamily = `'Libre Bodoni', serif`;
btnLeft.style.textTransform = 'uppercase';
btnLeft.style.border = '3px solid #FFD700';
btnLeft.style.borderRadius = '30px';
btnLeft.style.padding = '15px 30px';
btnLeft.style.marginTop = '50px';
btnLeft.style.marginBottom = '80px';
btnLeft.style.marginLeft = 'auto';
btnLeft.style.marginRight = 'auto';
btnLeft.style.backgroundColor = '#fff';
btnLeft.style.letterSpacing = '2.4px';
btnLeft.style.fontWeight = 'bold';
btnLeft.style.cursor = 'pointer';
divLeft.appendChild(btnLeft);

let btnRight = document.createElement('button');
btnRight.innerHTML = 'start here';
btnRight.style.fontFamily = `'Libre Bodoni', serif`;
btnRight.style.textTransform = 'uppercase';
btnRight.style.color = '#fff';
btnRight.style.border = '3px solid #FFD700';
btnRight.style.borderRadius = '30px';
btnRight.style.padding = '15px 30px';
btnRight.style.marginTop = '50px';
btnRight.style.marginBottom = '80px';
btnRight.style.marginLeft = 'auto';
btnRight.style.marginRight = 'auto';
btnRight.style.backgroundColor = '#9370DB';
btnRight.style.letterSpacing = '2.4px';
btnRight.style.fontWeight = 'bold';
btnRight.style.cursor = 'pointer';
divRight.appendChild(btnRight);