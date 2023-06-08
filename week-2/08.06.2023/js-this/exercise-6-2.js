const coffeeShop = {
    beans: 40,
    money: 100,

    drinkRequirements: {
        latte: {beanRequirement: 10, price: 5},
        americano: {beanRequirement: 5, price: 3},
        doubleShot: {beanRequirement: 15, price: 6},
        frenchPress: {beanRequirement: 12, price: 4}
    },

    makeDrink: function (drinkType) {
        const requiredBeans = this.drinkRequirements[drinkType].beanRequirement;
        if (this.beans < requiredBeans) {
            console.log(`Sorry, we're all out of beans!`);
            return;
        }

        this.beans -= requiredBeans;
        console.log(`Enjoy your ${drinkType}!`);
    },

    buyBeans: function (numBeans) {
        const beanPrice = 5;
        const totalPrice = numBeans * beanPrice;

        if (totalPrice > this.money) {
            console.log(`Not enough money to buy ${numBeans} beans`);
            return;
        }

        this.money -= totalPrice;
        this.beans += numBeans;
        console.log(`Successfully purchased ${numBeans} beans`);
    },

    buyDrink: function (drinkType) {
        // console.log(`Before purchase ${this.money}`);

        if (!(drinkType in this.drinkRequirements)) {
            console.log(`Sorry, we don't make ${drinkType}`);
            return;
        }

        const drinkPrice = this.drinkRequirements[drinkType].price;
        this.money += drinkPrice;

        this.makeDrink(drinkType);

        // console.log(`After purchase ${this.money}`);
    }
};

coffeeShop.buyDrink("latte");
coffeeShop.buyDrink("americano");
coffeeShop.buyDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
coffeeShop.buyDrink("doubleShot");
coffeeShop.buyDrink("frenchPress");

coffeeShop.buyBeans(20); //should alert/console "Successfully buy 20 beans"
coffeeShop.buyBeans(10); //should alert/console "Not enough money to buy 10 beans"

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("doubleShot"); //should alert/console "Sorry, we're all out of beans"