require('dotenv').config();


module.exports = {
    Query: {
        getItems: async(_, args, ctx) => {
            console.log(ctx);
            var str = JSON.stringify(ctx.Item, null, 4);
            console.log(str);
            const items = await Item.find({});
            console.log(items);
            return items;
        },
        getItem: async (_, {name}, {Item}) => {
            console.log(Item);
            const item = await Item.findOne({name: name});
            console.log(name);
            console.log(item);
            return item;
        },
    },
}