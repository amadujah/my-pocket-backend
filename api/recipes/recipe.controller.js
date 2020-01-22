import Recipe from './recipe.model'

//Create a recipe
export function create(req, res) {
    return Recipe.create(req.body)
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(403).send(err)
        })
}
//Get all recipes
export function list(req, res) {
    Recipe.find({})
    .then(recipes => {
        res.status(201).json(recipes)
    })
    .catch(err => {
        res.status(403).send(err)
    })
}
export function update(req, res) {
    Recipe.findByIdAndUpdate({id : req.recipe_id}, {
        
    })
    .then()
    .catch();
}
//Delete a recipe
export function destroy(req, res) {
    Recipe.findByIdAndRemove(req.recipe_id)
    .then(
        res.status(202).json({'message' : 'Recipe delete successfuly'})
    )
    .catch(err => {
        res.status(403).send(err);
    });
}
