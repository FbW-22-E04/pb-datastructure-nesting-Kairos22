// 1.Array
let board = [
  [1, 2, 3],
  ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
  [true, false]
]; 
for (const item of board) {
    for (const inner of item) {
        console.log(inner);
    }
}

console.log('-------------------------1');

// 2.Doggo
const doggo = {
    name: 'Fox',
    breed: 'German Shephard',
    foods: ['chicken', 'meat', 'bones'],
    dogFood () {
        for (const food of this.foods)
        console.log(food);
    }
};
console.log(doggo.foods[1]);

console.log('-------------------------');

doggo.dogFood ();

console.log('--------------------------');

// 3.Recipes
const recipes = {
    ingredients: {
        butter: 'butter',
        sugar: '2 spoon',
        flour: '1 cup'
    },
    getValue () {
        for (const item in recipes.ingredients) {
            console.log(recipes.ingredients[item]);
        }
    }
};

recipes.ingredients.ginger = 'ginger';

recipes.ingredients.sugar = 'brown suger';
console.log(recipes);
recipes.getValue();
