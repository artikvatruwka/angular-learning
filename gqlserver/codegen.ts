
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "graphql/schema.graphql",
  generates: {
    "generated/graphql.ts": {
      plugins: ["typescript", "typescript-resolvers", "typescript-mongodb", "typescript-document-nodes"]
    },
    // "./graphql/schema.graphql": {
    //   plugins: ["introspection"]
    // }
  }
};

export default config;
