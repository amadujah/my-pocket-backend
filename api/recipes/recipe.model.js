import mongoose from "mongoose"
const Schema = mongoose.Schema
let RecipeSchema = Schema({
    title: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    date: {
        type: String, 
        required: true
    }
}, {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    })
export default mongoose.model('Recipe', RecipeSchema)