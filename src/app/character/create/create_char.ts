export class playerStats {
    xp = 0;
    
    level = () => {
        return this.xp < 3 ? 1 : Math.floor(this.xp / 3) + 1;
    };

    dice = (score: number) => {
        switch (score) {
            case 0:
                return "d20";
            case 1:
                return "d20 + d4";
            case 2:
                return "d20 + d6";
            case 3:
                return "d20 + d8";
            case 4:
                return "d20 + d10";
            case 5:
                return "d20 + 2d6";
            case 6:
                return "d20 + 2d8";
            case 7:
                return "d20 + 2d10";
            case 8:
                return "d20 + 3d8";
            case 9:
                return "d20 + 3d10";
            case 10:
                return "d20 + 4d8";
            default:
                return "error";
        }
    };

    cost = (score: number) => {
        return (score * (score + 1)) / 2;
    };
    
    passives = (score: number) => {
        return 10 + 2 * score;
    };
    
    attribute_points_available = (xp: number) => {
        return 40 + xp;
    };

    attributes = {
        Physical: {
                Agility: { score: 0, dice: 0, cost: 0, passives: 0 },
                Fortitude: { score: 0, dice: 0, cost: 0, passives: 0 },
                Might: { score: 0, dice: 0, cost: 0, passives: 0 },
        },
        Mental:
            {
                Learning: { score: 0, dice: 0, cost: 0, passives: 0 },
                Logic: { score: 0, dice: 0, cost: 0, passives: 0 },
                Perception: { score: 0, dice: 0, cost: 0, passives: 0 },
                Will: { score: 0, dice: 0, cost: 0, passives: 0 },
            },
        Social:
            {
                Deception: { score: 0, dice: 0, cost: 0, passives: 0 },
                Persuasion: { score: 0, dice: 0, cost: 0, passives: 0 },
                Presence: { score: 0, dice: 0, cost: 0, passives: 0 },
            },
        Extraodinary:
            {
                Alteration: { score: 0, dice: 0, cost: 0, passives: 0 },
                Creation: { score: 0, dice: 0, cost: 0, passives: 0 },
                Energy: { score: 0, dice: 0, cost: 0, passives: 0 },
                Entropy: { score: 0, dice: 0, cost: 0, passives: 0 },
                Influence: { score: 0, dice: 0, cost: 0, passives: 0 },
                Movement: { score: 0, dice: 0, cost: 0, passives: 0 },
                Prescience: { score: 0, dice: 0, cost: 0, passives: 0 },
                Protection: { score: 0, dice: 0, cost: 0, passives: 0 },
            },
    };

    update_attribute_info () {
        for (let attribute in this.attributes.Extraodinary) {
            for (let val of attribute) {
                console.log(val)
            }
        }
    }
}