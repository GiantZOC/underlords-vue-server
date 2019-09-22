require('dotenv').config();


module.exports = {
    Query: {
        getItems: async(_, args, {Item}) => {
            const items = await Item.find({});
            return items;
        },
        getItem: async (_, {itemId}, {Item}) => {
            const item = await Item.findOne({_id: itemId});
            return item;
        },
    },
}