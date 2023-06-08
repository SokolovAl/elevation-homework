const coffeeShop = {
    beans: 40,
    money: 100,

    drinkRequirements: {
        latte: 10,
        americano: 5,
        doubleShot: 15,
        frenchPress: 12
    },

    makeDrink: function (drinkType) {
        if (!(drinkType in this.drinkRequirements)) {
            console.log(`Sorry, we don't make ${drinkType}`);
            return;
        }

        const requiredBeans = this.drinkRequirements[drinkType];
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
    }
};

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"

coffeeShop.buyBeans(20); //should alert/console "Successfully buy 20 beans"
coffeeShop.buyBeans(10); //should alert/console "Not enough money to buy 10 beans"

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"