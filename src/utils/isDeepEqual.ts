const isObject = (object: object) => {
    return object != null && typeof object === "object";
};


export const isDeepEqual = (object1: any, object2: any) => {

    const objKeys1: string[] = Object.keys(object1);
    const objKeys2: string[] = Object.keys(object2);

    if (objKeys1.length !== objKeys2.length) return false;


    for (var key of objKeys1) {
        const value1 = object1[key];
        let value2 = object2[key];

        if (typeof value2 === "number") {
            value2 = object2[key].toString()
        }

        const isObjects = isObject(value1) && isObject(value2);

        if ((isObjects && !isDeepEqual(value1, value2)) ||
            (!isObjects && value1 !== value2)
        ) {
            return false;
        }
    }

    return true;
};