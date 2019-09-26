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
    unit_names: [String]!
    alliance_bonus: [AllianceBonus]!
    alliance_max_bonus_count: Int!
    height: String!
  }

  input AbilityInput {
    Ability: String!
    Ability_Image: String!
    Description: String!
  }

  type Ability {
    Ability: String!
    Ability_Image: String!
    Description: String!
  }

  type Hero {
    _id: ID
    Name: String!
    Alliances: [String]!
    Tier: String!
    Tier_1_Health: String!
    Tier_2_Health: String!
    Tier_3_Health: String!
    Mana: String!
    Tier_1_DPS: String!
    Tier_2_DPS: String!
    Tier_3_DPS: String!
    Tier_1_AD_MIN: String!
    Tier_1_AD_Max: String!
    Tier_2_AD_MIN: String!
    Tier_2_AD_Max: String!
    Tier_3_AD_MIN: String!
    Tier_3_AD_Max: String!
    Tier_1_Attack_Rate: String!
    Tier_2_Attack_Rate: String!
    Tier_3_Attack_Rate: String!
    Move_Speed: String!
    Attack_Range: String!
    Tier_1_Magic_Resist: String!
    Tier_2_Magic_Resist: String!
    Tier_3_Magic_Resist: String!
    Tier_1_Armor: String!
    Tier_2_Armor: String!
    Tier_3_Armor: String!
    Tier_1_Health_Regen: String!
    Tier_2_Health_Regen: String!
    Tier_3_Health_Regen: String!
    Hero_Image: String!
    Abilities: [Ability]
    Lore_Text: String!
    Ace_Ability: String
    Ace_Description: String
  }

  type Query {
    getItem(itemId: ID): Item
    getItems: [Item]
    getAlliance(allianceId: ID): Alliance
    getAllianceByName(allianceName: String): Alliance
    getAlliances: [Alliance]
    getHero(heroId: ID): Hero
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
      Name: String!
      Alliances: [String]!
      Tier: String!
      Tier_1_Health: String!
      Tier_2_Health: String!
      Tier_3_Health: String!
      Mana: String!
      Tier_1_DPS: String!
      Tier_2_DPS: String!
      Tier_3_DPS: String!
      Tier_1_AD_MIN: String!
      Tier_1_AD_Max: String!
      Tier_2_AD_MIN: String!
      Tier_2_AD_Max: String!
      Tier_3_AD_MIN: String!
      Tier_3_AD_Max: String!
      Tier_1_Attack_Rate: String!
      Tier_2_Attack_Rate: String!
      Tier_3_Attack_Rate: String!
      Move_Speed: String!
      Attack_Range: String!
      Tier_1_Magic_Resist: String!
      Tier_2_Magic_Resist: String!
      Tier_3_Magic_Resist: String!
      Tier_1_Armor: String!
      Tier_2_Armor: String!
      Tier_3_Armor: String!
      Tier_1_Health_Regen: String!
      Tier_2_Health_Regen: String!
      Tier_3_Health_Regen: String!
      Hero_Image: String!
      Abilities: [AbilityInput]
      Lore_Text: String!
      Ace_Ability: String
      Ace_Description: String
    ): Hero
  }
`;

module.exports = typeDefs;
