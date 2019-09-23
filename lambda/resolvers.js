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
        getAlliances: async(_, args, {Alliance}) => {
            const alliances = await Alliance.find({});
            return alliances;
        },
        getAlliance: async (_, {allianceId}, {Alliance}) => {
            const alliance = await Alliance.findOne({_id: allianceId});
            return alliance;
        },
        getHeroes: async(_, args, {Hero}) => {
            const heroes = await Hero.find({});
            return heroes;
        },
        getHero: async (_, {heroId}, {Hero}) => {
            const hero = await Hero.findOne({_id: heroId});
            return hero;
        },
    },
    Mutation: {
        addItem: async (_, {name, img, tier, type, flavortext}, {Item}) =>{
            const newItem = await new Item({
                name,
                img,
                tier,
                type,
                flavortext
            }).save();
            return newItem;
        },
        addAlliance: async (_, {name, title, color, unit_names, alliance_bonus, alliance_max_bonus_count, height}, {Alliance}) =>{
            const newAlliance = await new Alliance({
                name,
                title,
                color,
                unit_names,
                alliance_bonus,
                alliance_max_bonus_count,
                height
            }).save();
            return newAlliance;
        },
        addHero: async (_, {Name, Alliances, Tier, Tier_1_Health, Tier_2_Health, Tier_3_Health, Mana, Tier_1_DPS, Tier_2_DPS, Tier_3_DPS, Tier_1_AD_MIN, Tier_1_AD_Max, Tier_2_AD_MIN, Tier_2_AD_Max, Tier_3_AD_MIN, Tier_3_AD_Max, Tier_1_Attack_Rate, Tier_2_Attack_Rate,Tier_3_Attack_Rate,Move_Speed,Attack_Range,Tier_1_Magic_Resist,Tier_2_Magic_Resist,Tier_3_Magic_Resist,Tier_1_Armor,Tier_2_Armor,Tier_3_Armor,Tier_1_Health_Regen,Tier_2_Health_Regen,Tier_3_Health_Regen, Hero_Image, Abilities, Lore_Text}, {Hero}) =>{
            const newHero = await new Hero({
                Name,
                Alliances,
                Tier,
                Tier_1_Health,
                Tier_2_Health,
                Tier_3_Health,
                Mana,
                Tier_1_DPS,
                Tier_2_DPS,
                Tier_3_DPS,
                Tier_1_AD_MIN,
                Tier_1_AD_Max,
                Tier_2_AD_MIN,
                Tier_2_AD_Max,
                Tier_3_AD_MIN,
                Tier_3_AD_Max,
                Tier_1_Attack_Rate,
                Tier_2_Attack_Rate,
                Tier_3_Attack_Rate,
                Move_Speed,
                Attack_Range,
                Tier_1_Magic_Resist,
                Tier_2_Magic_Resist,
                Tier_3_Magic_Resist,
                Tier_1_Armor,
                Tier_2_Armor,
                Tier_3_Armor,
                Tier_1_Health_Regen,
                Tier_2_Health_Regen,
                Tier_3_Health_Regen,
                Hero_Image,
                Abilities,
                Lore_Text
            }).save();
            return newHero;
        },
    }
}