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
            const alliances = await Alliance.find({}).populate('heroes');
            return alliances;
        },
        getAlliance: async (_, {allianceId}, {Alliance}) => {
            const alliance = await Alliance.findOne({_id: allianceId}).populate('heroes');
            return alliance;
        },
        getAllianceByName: async (_, {allianceName}, {Alliance}) => {
            const alliance = await Alliance.findOne({name: allianceName}).populate('heroes');
            return alliance;
        },
        getHeroes: async(_, args, {Hero}) => {
            const heroes = await Hero.find({}).populate('alliances');
            return heroes;
        },
        getHero: async (_, {heroId}, {Hero}) => {
            const hero = await Hero.findOne({_id: heroId}).populate('alliances');
            return hero;
        },
        getHeroByName: async (_, {heroName}, {Hero}) => {
            const hero = await Hero.findOne({name: heroName}).populate('alliances');
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
        addHero: async (_, {name, alliances, tier, tier_1_health, tier_2_health, tier_3_health, mana, tier_1_dps, tier_2_dps, tier_3_dps, tier_1_ad_min, tier_1_ad_max, tier_2_ad_min, tier_2_ad_max, tier_3_ad_min, tier_3_ad_max, tier_1_attack_rate, tier_2_attack_rate,tier_3_attack_rate,move_speed,attack_range,tier_1_magic_resist,tier_2_magic_resist,tier_3_magic_resist,tier_1_armor,tier_2_armor,tier_3_armor,tier_1_health_regen,tier_2_health_regen,tier_3_health_regen, filename, hero_image, abilities, lore_text, ace_ability, ace_description}, {Hero}) =>{
            const newHero = await new Hero({
                name,
                alliances,
                tier,
                tier_1_health,
                tier_2_health,
                tier_3_health,
                mana,
                tier_1_dps,
                tier_2_dps,
                tier_3_dps,
                tier_1_ad_min,
                tier_1_ad_max,
                tier_2_ad_min,
                tier_2_ad_max,
                tier_3_ad_min,
                tier_3_ad_max,
                tier_1_attack_rate,
                tier_2_attack_rate,
                tier_3_attack_rate,
                move_speed,
                attack_range,
                tier_1_magic_resist,
                tier_2_magic_resist,
                tier_3_magic_resist,
                tier_1_armor,
                tier_2_armor,
                tier_3_armor,
                tier_1_health_regen,
                tier_2_health_regen,
                tier_3_health_regen,
                filename,
                hero_image,
                abilities,
                lore_text,
                ace_ability,
                ace_description
            }).save();
            return newHero;
        },
    }
}