function parseDeclaraion (declaration) {
    const keyRegexp = new RegExp(/(?:\$)([\w-]+)(?:[\s\n\r\t])*(?:\:)/);
    const valueRegexp = new RegExp(/(?:\:)(?:[\s\n\r\t])*(.+)(?:[\s\n\r\t])*(?:\;)/);

    const matchKey = declaration.match(keyRegexp);
    const key = matchKey[1].trim();

    const matchValue = declaration.match(valueRegexp);
    const value = matchValue[1].trim();

    return { key, value };
}

export default parseDeclaraion;
