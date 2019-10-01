const mongoose = require('mongoose');

const HeroSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    alliances:[{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Alliance'
    }],
    tier:{
        type: String,
        required: true
    },
    tier_1_health: {
        type: String,
        required: true
    },
    tier_2_health: {
        type: String,
        required: true
    },
    tier_3_health: {
        type: String,
        required: true
    },
    mana: {
        type: String,
        required: true
    },
    tier_1_dps: {
        type: String,
        required: true
    },
    tier_2_dps: {
        type: String,
        required: true
    },
    tier_3_dps: {
        type: String,
        required: true
    },
    tier_1_ad_min: {
        type: String,
        required: true
    },
    tier_1_ad_max: {
        type: String,
        required: true
    },
    tier_2_ad_min: {
        type: String,
        required: true
    },
    tier_2_ad_max: {
        type: String,
        required: true
    },
    tier_3_ad_min: {
        type: String,
        required: true
    },
    tier_3_ad_max: {
        type: String,
        required: true
    },
    tier_1_attack_rate: {
        type: String,
        required: true
    },
    tier_2_attack_rate: {
        type: String,
        required: true
    },
    tier_3_attack_rate: {
        type: String,
        required: true
    },
    move_speed: {
        type: String,
        required: true
    },
    attack_range: {
        type: String,
        required: true
    },
    tier_1_magic_resist: {
        type: String,
        required: true
    },
    tier_2_magic_resist: {
        type: String,
        required: true
    },
    tier_3_magic_resist: {
        type: String,
        required: true
    },
    tier_1_armor: {
        type: String,
        required: true
    },
    tier_2_armor: {
        type: String,
        required: true
    },
    tier_3_armor: {
        type: String,
        required: true
    },
    tier_1_health_regen: {
        type: String,
        required: true
    },
    tier_2_health_regen: {
        type: String,
        required: true
    },
    tier_3_health_regen: {
        type: String,
        required: true
    },
    filename: {
        type: String,
        required: true
    },
    hero_image: {
        type: String,
        required: true
    },
    abilities: [{
        ability_image: {
            type: String,
            required: true
        },
        ability: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    }],
    lore_text: {
        type: String,
        required: true
    },
    ace_ability: {
        type: String,
        required: false
    },
    ace_description: {
        type: String,
        required: false
    }
});


module.exports = mongoose.model('Hero', HeroSchema);