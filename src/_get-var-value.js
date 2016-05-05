import is from '../node_modules/is';

import message from './_message.js';

function resolveVarValue (name, values) {
    if (is.undef(values) || is.args.empty(arguments)) {
        message('Error: Missing arguments');
        return undefined;
    }

    if (!is.string(name) || !is.object(values)) {
        message('Error: Check arguments type');
        return undefined;
    }

    const varName = name.slice(1);

    return values[varName] || null;
}

export default resolveVarValue;
