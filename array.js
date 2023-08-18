const hobbies = ['Futebol', 'Jogar', 'Assistir'];
console.log(hobbies);
console.log(hobbies[0]);
console.log(hobbies[1]);
console.log(hobbies[2]);

hobbies[0] = 'Basquete';
console.log(hobbies[0]);

console.log(hobbies.length);

hobbies.push = 'Andar de bike';
console.log(hobbies);

let posicao = hobbies.indexOf('Assistir');
hobbies.slice(posicao, 1);
console.log(hobbies);

const hobbiesDoAmigo = ['Música', 'Conversa', 'Leitura'];
const AllHobbies = hobbies.concat(hobbiesDoAmigo)
console.log(AllHobbies)

const music = ['cantar', 'tocar guitarra', 'escutar música'];
const sport = ['correr', 'jogar futebol', 'nadar'];
const art = ['desenhar', 'escrever histórias', 'fazer esculturas'];

const HobbiesCategory = [music, sport, art];
console.log(HobbiesCategory)
console.log(HobbiesCategory[2])
console.log(HobbiesCategory[0][1])
console.log(HobbiesCategory[0][2])





