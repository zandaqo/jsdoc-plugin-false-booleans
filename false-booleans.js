'use strict';

exports.handlers = {
  newDoclet(e) {
    const params = e.doclet.params;
    if (!params) return;
    for (const param of params) {
      if (!param.type) continue;
      if (param.type.names[0] === 'boolean' && param.defaultvalue == null) {
        param.defaultvalue = false;
      }
    }
  },
};
