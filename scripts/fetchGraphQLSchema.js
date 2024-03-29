// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require("fs");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { fetch } = require("cross-undici-fetch");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { buildClientSchema, getIntrospectionQuery, printSchema } = require("graphql");

function fetchGraphQLSchema(url, options) {
    options = options || {}; // eslint-disable-line no-param-reassign

    return fetch(url, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            apiKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        },
        body: JSON.stringify({
            query: getIntrospectionQuery(),
        }),
    })
        .then((res) => res.json())
        .then((schemaJSON) => {
            if (options.readable) {
                return printSchema(buildClientSchema(schemaJSON.data));
            }

            return JSON.stringify(schemaJSON, null, 2);
        });
}

const filePath = path.join(__dirname, "../src/graphql/schema/", "schema.graphql");

fetchGraphQLSchema(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/graphql/v1`, {
    readable: true,
}).then((schema) => {
    fs.writeFileSync(filePath, schema, "utf-8");
});
