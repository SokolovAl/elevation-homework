const StringFormatter = () => {
    const capitalizeFirst = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    };

    const toSkewerCase = (str) => {
        return str.replace(/\s+/g, "-");
    };

    return {
        capitalizeFirst,
        toSkewerCase
    };
};

const formatter = StringFormatter();

console.log(formatter.capitalizeFirst("dorothy")); // Output: Dorothy
console.log(formatter.toSkewerCase("blue box")); // Output: blue-box
