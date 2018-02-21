export function tsToTranslations(input: any, parentKeys: Array<string> = []): { [key: string]: string } {
    const result: { [key: string]: string } = {};

    const allKeys: { [key: string]: boolean } = {};

    for (let key in input) {
        if (input.hasOwnProperty(key)) {
            allKeys[key] = true;
        }
    }

    for (let key in allKeys) {
        if (allKeys.hasOwnProperty(key)) {
            if (typeof input[key] === 'string') {
                result[[...parentKeys, key].join('.')] = input[key];
            } else {
                const sub: { [key: string]: string } = tsToTranslations(input[key], [...parentKeys, key]);

                for (let sKey in sub) {
                    if (sub.hasOwnProperty(sKey)) {
                        result[sKey] = sub[sKey];
                    }
                }
            }
        }
    }

    return result;
}
