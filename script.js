//while
const kleur = ['geel', 'blauw', 'rood', 'oranje'];
while (w < 5) {
    console.log('This is while iteration number ${w}');
    w++;
}

//for
const kleur1 = ['geel', 'blauw', 'rood', 'oranje'];
    let kLen = kleur1.length;

text = '<ul>';    
    for (let i = 0; i < kLen; i++) {
       text += '<li>' + kleur1[i] + '</li>';
}
text += "</ul>";

//forEach
const array1 = ['geel', 'blauw', 'rood', 'oranje'];

array1.forEach(element => console.log(element));

// 1: for 5, while 4
// 2: 2
// 3:
// 4: