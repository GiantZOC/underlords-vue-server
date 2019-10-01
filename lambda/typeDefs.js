const { gql } = require("apollo-server-lambda");

const typeDefs = gql`
  type Item {
    _id: ID
    name: String!
    img: String!
    description: String!
    tier: Int!
    type: String!
    flavortext: String!
  }

  type AllianceBonus {
    _id: ID
    unit_count: Int!
    description: String!
  }

  input AllianceBonusInput {
    unit_count: Int!
    description: String!
  }

  type Alliance {
    _id: ID
    name: String!
    title: String!
    color: String!
    heroes: [Hero]!
    alliance_bonus: [AllianceBonus]!
    alliance_max_bonus_count: Int!
    height: String!
  }

  input AbilityInput {
    ability: String!
    ability_image: String!
    description: String!
  }

  type Ability {
    ability: String!
    ability_image: String!
    description: String!
  }

  type Hero {
    _id: ID
    name: String!
    alliances: [Alliance]!
    tier: String!
    tier_1_health: String!
    tier_2_health: String!
    tier_3_health: String!
    mana: String!
    tier_1_dps: String!
    tier_2_dps: String!
    tier_3_dps: String!
    tier_1_ad_min: String!
    tier_1_ad_max: String!
    tier_2_ad_min: String!
    tier_2_ad_max: String!
    tier_3_ad_min: String!
    tier_3_ad_max: String!
    tier_1_attack_rate: String!
    tier_2_attack_rate: String!
    tier_3_attack_rate: String!
    move_speed: String!
    attack_range: String!
    tier_1_magic_resist: String!
    tier_2_magic_resist: String!
    tier_3_magic_resist: String!
    tier_1_armor: String!
    tier_2_armor: String!
    tier_3_armor: String!
    tier_1_health_regen: String!
    tier_2_health_regen: String!
    tier_3_health_regen: String!
    filename: String!
    hero_image: String!
    abilities: [Ability]
    lore_text: String!
    ace_ability: String
    ace_description: String
  }

  type Query {
    getItem(itemId: ID): Item
    getItems: [Item]
    getAlliance(allianceId: ID): Alliance
    getAllianceByName(allianceName: String): Alliance
    getAlliances: [Alliance]
    getHero(heroId: ID): Hero
    getHeroByName(heroName: String): Hero
    getHeroes: [Hero]
  }

  type Mutation {
    addItem(
      name: String!
      img: String!
      description: String!
      tier: Int!
      type: String!
      flavortext: String!
    ): Item
    addAlliance(
      name: String!
      title: String!
      color: String!
      unit_names: [String]
      alliance_bonus: [AllianceBonusInput]
      alliance_max_bonus_count: Int!
      height: String!
    ): Alliance
    addHero(
      name: String!
      tier: String!
      tier_1_health: String!
      tier_2_health: String!
      tier_3_health: String!
      mana: String!
      tier_1_dps: String!
      tier_2_dps: String!
      tier_3_dps: String!
      tier_1_ad_min: String!
      tier_1_ad_max: String!
      tier_2_ad_min: String!
      tier_2_ad_max: String!
      tier_3_ad_min: String!
      tier_3_ad_max: String!
      tier_1_attack_rate: String!
      tier_2_attack_rate: String!
      tier_3_attack_rate: String!
      move_speed: String!
      attack_range: String!
      tier_1_magic_resist: String!
      tier_2_magic_resist: String!
      tier_3_magic_resist: String!
      tier_1_armor: String!
      tier_2_armor: String!
      tier_3_armor: String!
      tier_1_health_regen: String!
      tier_2_health_regen: String!
      tier_3_health_regen: String!
      filename: String!
      hero_image: String!
      abilities: [AbilityInput]
      lore_text: String!
      ace_ability: String
      ace_description: String
    ): Hero
  }
`;

module.exports = typeDefs;
