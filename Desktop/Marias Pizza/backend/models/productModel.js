const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema(
    {
        itemName: {
            type: String,
            required: [true, "Please add an 'item Name'"],
            unique: true,
            trim: true,
            maxLength: [50, "Name cannot be more than 50 characters"],
            minLength: [1, "Name must have at least 1 character"]
        },

        price: {
            type: Number,
            required: [true, "Please add a price to this"],
            unique: false,
            trim: true,
            maxLength: [10, "Name cannot be more than 50 characters"],
            minLength: [1, "Name must have at least 1 character"]
        }
    }
)

module.exports = mongoose.model('Product', ProductSchema);