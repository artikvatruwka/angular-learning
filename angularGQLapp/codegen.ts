import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: '../gqlserver/graphql/schema.graphql',
  documents: './src/**/*.graphql',
  generates: {
    './src/app/graphql/generated.ts': {
      overwrite: true,
      config: {
        addExplicitOverride: true,
      },
      plugins: ['typescript', 'typescript-operations', 'typescript-apollo-angular'],
    },
    './src/app/graphql/generated.schema.json': {
      plugins: ['introspection'],
    },
  },
};
export default config;
