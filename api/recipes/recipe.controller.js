import Recipe from './recipe.model'

//Creation de recipe
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