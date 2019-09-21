require('dotenv').config();


module.exports = {
    Query: {
        getItems: async(_, args, {Item}) => {
            console.log(Item);
            const items = await Item.find({});
            console.log(items);
            return items;
        },
    },
}