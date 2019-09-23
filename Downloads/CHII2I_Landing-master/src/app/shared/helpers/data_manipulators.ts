
export class DataManipulators {
    constructor() { }
    public static groupBy = (array, key) => {
        if (array.length > 0) {
            return array.reduce((acc, curr) => {
                (acc[curr[key]] = acc[curr[key]] || []).push(curr);
                return acc;
            }, {});
        } else {
            return null;
        }
    }
    public static toMatrix = (arr, width) => {
        return arr.reduce((rows, key, index) => (index % width === 0 ? rows.push([key])
            : rows[rows.length - 1].push(key)) && rows, []);
    }
    public static valuesPolyfill = function values(object) {
        return Object.keys(object).map(key => object[key]);
    }; // For IE11

}

