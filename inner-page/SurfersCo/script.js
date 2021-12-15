(function(){ 
var template = document.querySelector('#team-card__item').content.querySelector('.team-list__item');
var memberCardList = document.querySelector('.our-team__list');

var memberBase = [
  {name:'Taj Burrow',
  nick: '@tajamos',
  live: 'Yallingup, Australia'
},
{
  name: 'Malia Manuel',
  nick: '@maliamanuel',
  live: 'Wailua, Hi'
},
{
  name: 'Ian Walsh',
  nick: '@ian.walsh',
  live: 'Maui, Hi'
},
{
  name: 'Mace Callaghan',
  nick: '@macyjanecallaghan',
  live: 'San Clemente, CA'
}
];

for(var i = 0; i < memberBase.length; i++){
  var elem = template.cloneNode(true);
  elem.querySelector('img').src = 'img/Photo-'+i+'.jpg';
  elem.querySelector('h4').textContent = memberBase[i].name;
  elem.querySelector('span').textContent = memberBase[i].nick;
  elem.querySelector('p').textContent = memberBase[i].live;
  memberCardList.appendChild(elem)
}
}())
