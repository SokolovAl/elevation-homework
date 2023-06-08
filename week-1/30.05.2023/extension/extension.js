const date = 3;

const kitchen = {
  owner: "Geraldine",
  hasOven: true,
  fridge: {
    price: 500,
    works: true,
    items: [
      { name: "cheese", expiryDate: 7 },
      { name: "raddish", expiryDate: 5 },
      { name: "bread", expiryDate: 1 },
    ],
  },
};

const hasOven = kitchen.hasOven;
const fridgeWorks = kitchen.fridge.works;

for (let item of kitchen.fridge.items) {
  const isOverdue = date - item.expiryDate;
  const fridgeRepairCost = kitchen.fridge.price / 2;

  if (isOverdue < 0) {
    console.log(`${kitchen.owner}'s ${item.name} is still good. No need to worry.`);
  } else if (hasOven && fridgeWorks) {
    console.log(
      `${kitchen.owner}'s ${item.name} expired ${isOverdue} day ago. Weird, considering her fridge works. Luckily, she has an oven to cook the ${item.name} in.`
    );
  } else if (hasOven && !fridgeWorks) {
    console.log(
      `${kitchen.owner}'s ${item.name} expired ${isOverdue} day ago. Probably because her fridge doesn't work. Luckily, she has an oven to cook the ${item.name} in. And she'll have to pay ${fridgeRepairCost} to fix the fridge.`
    );
  } else if (!hasOven && fridgeWorks) {
    console.log(
      `${kitchen.owner}'s ${item.name} expired ${isOverdue} day ago. Weird, considering her fridge works. Too bad she doesn't have an oven to cook the ${item.name} in.`
    );
  } else {
    console.log(
      `${kitchen.owner}'s ${item.name} expired ${isOverdue} day ago. Probably because her fridge doesn't work. Too bad she doesn't have an oven to cook the ${item.name} in. And she'll have to pay ${fridgeRepairCost} to fix the fridge.`
    );
  }
}
