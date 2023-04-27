# GreenSock

## Concepts de bases

Ajouter une animation avec gsap.to (à partir des valeurs de bases jusqu’à celles passées dans l’objet)

```jsx
gsap.to(img1, {x: 100, duration: 2})
gsap.to('h1', {color: 'red', duration: 2})
```

Ajouter une animation avec gsap.from (à partir des valeurs passées dans l’objet jusqu’à celle dans le CSS)

```jsx
gsap.from(img1, {x: 100, duration: 2})
```

Ajouter une animation avec gsap.fromTo (à partir des valeurs passées dans le premier objet jusqu’à celles passées dans le second objet)

```jsx
gsap.fromTo('img', {opacity: 0}, {opacity: 1, duration: 3})
```

La propriété stagger permet de définir l'intervalle entre les différents éléments

```jsx
stagger: 0.2 //0.2s entre chaque élément
stagger: function(index){ //possibilité de passer une fonction
    return index * 0.2
}
```

Pour ajouter de l’aléatoire dans l’animation 

```jsx
x: "random(-100, 100)" //prend un nombre entre -100 et 100
x: "random(-100, 100, 10)" //prend un nombre entre -100 et 100 et l'arrondie à 10
x: "random([-20, 23, 45, 57])" //prend un nombre parmi le tableau passé en paramètre
```

Pour enchainer plusieurs animations à la suite sur le même objet (utilisation des keyframes)

```jsx
gsap.to('.container-images img:nth-child(2)', {keyframes: [
    {duration: 0.3, y: 100},
    {duration: 0.3, scale: 1.3},
    {duration: 0.3, y: 200},
]})
```

Exemple de fonctions callback pour pouvoir déclencher des choses à un certain timing de l’animation (remplacer console.log par ce que l’on veut)

```jsx
gsap.to('.container-images img:nth-child(2)', {
    y: 100,
    repeat: 1,
    onComplete: () => console.log('terminée'),
    onStart: () => console.log('démarrée'),
    onUpdate: () => console.log('en cours'),
    onRepeat: () => console.log('répétée'),
})
```

Enregistrer un tween, on peut par la suite le réutiliser

```jsx
gsap.registerEffect({
    name: "imgCrazy", //Le nom de l'effet
    effect: (targets, config) => { //targets = l'élément / le reste des paramètres sont des variables
        return gsap.to(targets, {duration: config.duration, y: 200, scale: 1.4, rotation: 360})
    },
    defaults: {duration: 2} //possibilité de setup des valeurs par défaut
})

gsap.effects.imgCrazy(img1, {duration: 1}) //appeler l'animation
```

Set une propriété

```jsx
gsap.set('.container-images img', {opacity: 0})
```

Les “yoyo” et les méthodes des tweens

```jsx
const anim = gsap.to(img1, {y: 100, yoyo: true, repeat: 1}) //la prop yoyo permet de faire un effet yoyo, il faut obligatoirement la prop repeat avec
// en mettant l'animation dans une const on peut ajouter par la suite des méthodes
anim.duration(5)
anim.pause()
anim.seek(2.5) //commence l'animation à 2.5
anim.resume()
```

⚠️ Pour les sites un peu lourds, il faut mieux masquer tous les éléments en CSS puis les faire apparaitre avec GSAP plutôt que de les masquer avec GSAP sinon on risque d’avoir un flash lumineux au chargement de la page

Utiliser la timeline

```jsx
const TL = gsap.timeline()

TL
.to(img1, {autoAlpha: 1, y: 0, duration: 1}) //auto alpha = visibility + opacity
.to(img2, {autoAlpha: 1, y: 0, duration: 1}, "-=0.75") //positionnement relatif = se lance à la durée du précédent -0.75
.to(img3, {autoAlpha: 1, y: 0, duration: 1}, 1) //positionnement absolut = se lance à la position définit par la variable
.to(title, {autoAlpha: 1, y: 0, duration: 1}, "<") //démarre au début de l'animation précédente (possibilité de passer un nombre pour ajouter du délai : "<0.5")
.to(txt, {autoAlpha: 1, y: 0, duration: 1}, ">") //démarre à la fin de l'animation précédente
```

Paramètres de la timeline 

```jsx
const TL = gsap.timeline({
    defaults: {
        duration: 1,
        ease: "elastic"
    },
    repeat: -1, // -1 permet de répéter les animations à l'infinie
    onComplete: () => { //permet de lancer n'importe quoi quand les fonctions ont fini
        console.log('complete')
    },
})
```

Pour faire commencer l’animation à un endroit précis de la timeline

```jsx
.addLabel('milieu') //Ajouter un label avec le nom voulu

.add() //permet de lancer un tween ou n'importe quelle autre instruction

TL.play('milieu') //Utiliser play ou seek pour faire commencer l'animation à l'endroit précis
```
