const mongoose = require('mongoose');

const HeroSchema = new mongoose.Schema({
    Name: {
        type:String,
        required:true
    },
    Alliances: {
        type: [String],
        required: true
    },
    Tier_1_Health: {
        type: String,
        required: true
    },
    Tier_2_Health: {
        type: String,
        required: true
    },
    Tier_3_Health: {
        type: String,
        required: true
    },
    Mana: {
        type: String,
        required: true
    },
    Tier_1_DPS: {
        type: String,
        required: true
    },
    Tier_2_DPS: {
        type: String,
        required: true
    },
    Tier_3_DPS: {
        type: String,
        required: true
    },
    Tier_1_AD_MIN: {
        type: String,
        required: true
    },
    Tier_1_AD_Max: {
        type: String,
        required: true
    },
    Tier_2_AD_MIN: {
        type: String,
        required: true
    },
    Tier_2_AD_Max: {
        type: String,
        required: true
    },
    Tier_3_AD_MIN: {
        type: String,
        required: true
    },
    Tier_3_AD_Max: {
        type: String,
        required: true
    },
    Tier_1_Attack_Rate: {
        type: String,
        required: true
    },
    Tier_2_Attack_Rate: {
        type: String,
        required: true
    },
    Tier_3_Attack_Rate: {
        type: String,
        required: true
    },
    Move_Speed: {
        type: String,
        required: true
    },
    Attack_Range: {
        type: String,
        required: true
    },
    Tier_1_Magic_Resist: {
        type: String,
        required: true
    },
    Tier_2_Magic_Resist: {
        type: String,
        required: true
    },
    Tier_3_Magic_Resist: {
        type: String,
        required: true
    },
    Tier_1_Armor: {
        type: String,
        required: true
    },
    Tier_2_Armor: {
        type: String,
        required: true
    },
    Tier_3_Armor: {
        type: String,
        required: true
    },
    Tier_1_Health_Regen: {
        type: String,
        required: true
    },
    Tier_2_Health_Regen: {
        type: String,
        required: true
    },
    Tier_3_Health_Regen: {
        type: String,
        required: true
    },
    Hero_Image: {
        type: String,
        required: true
    },
    Abilities: [{
        Ability_Image: {
            type: Number,
            required: true
        },
        Ability: {
            type: String,
            required: true
        },
        Description: {
            type: String,
            required: true
        }
    }],
    Lore_Text: {
        type: String,
        required: true
    },
});


module.exports = mongoose.model('Hero', HeroSchema);