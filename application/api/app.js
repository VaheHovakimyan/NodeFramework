"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const global_1 = require("../../global");
({
    post: async ({ name }) => {
        const { path, fs } = global_1.node;
        return name;
    },
    get: async ({ a }) => {
        const { bcrypt } = global_1.npm;
        return a + 2;
    }
});
//# sourceMappingURL=app.js.map