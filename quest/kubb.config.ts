import createSwagger from "@kubb/swagger";
import createSwaggerTS from "@kubb/swagger-ts";
import createSwaggerTanstackQuery from "@kubb/swagger-tanstack-query";
import { defineConfig } from "@kubb/core";

/** @type {import('@kubb/core').UserConfig} */
export const baseConfig = {
  root: ".",
  hooks: {
    // done: ['prettier --write "**/*.{ts,tsx}"', 'eslint --fix ./src/gen'],
  },
  plugins: [
    createSwagger({ output: false }),
    createSwaggerTS({
      output: {
        path: "models",
      },
    }),
    // createSwaggerClient({
    //   output: {
    //     path: "./src/axios",
    //   },
    // }),
    createSwaggerTanstackQuery({
      client: {
        importPath: "@app/modules/client",
      },
      transformers: {
        name: (name, type) => {
          if (type === "file" || type === "function") {
            return `${name}Hook`;
          }
          return name;
        },
      },
      output: {
        path: "./hooks",
      },
      framework: "react",
      query: {
        queryKey: (keys) => ['"v5"', ...keys],
      },
      suspense: {},
      override: [
        {
          type: "operationId",
          pattern: "findPetsByTags",
          options: {
            dataReturnType: "full",
            infinite: {
              queryParam: "pageSize",
              initialPageParam: 0,
              cursorParam: undefined,
            },
          },
        },
      ],
    }),
  ],
};

/** @type {import('@kubb/core').UserConfig} */
export const baseConfigForQuestsAPI = {
  root: ".",
  hooks: {
    // done: ['prettier --write "**/*.{ts,tsx}"', 'eslint --fix ./src/gen'],
  },
  plugins: [
    createSwagger({ output: false }),
    createSwaggerTS({
      output: {
        path: "models",
      },
    }),
    // createSwaggerClient({
    //   output: {
    //     path: "./src/axios",
    //   },
    // }),
    createSwaggerTanstackQuery({
      client: {
        importPath: "@app/modules/client.quests",
      },
      transformers: {
        name: (name, type) => {
          if (type === "file" || type === "function") {
            return `${name}Hook`;
          }
          return name;
        },
      },
      output: {
        path: "./hooks",
      },
      framework: "react",
      query: {
        queryKey: (keys) => ['"v5"', ...keys],
      },
      suspense: {},
      override: [
        {
          type: "operationId",
          pattern: "findPetsByTags",
          options: {
            dataReturnType: "full",
            infinite: {
              queryParam: "pageSize",
              initialPageParam: 0,
              cursorParam: undefined,
            },
          },
        },
      ],
    }),
  ],
};

export default defineConfig([
  {
    ...baseConfig,
    ...{
      input: {
        path: "./swagger/Customer.json",
      },
      output: {
        path: "./src/apis/customer",
        clean: true,
      },
    },
  },
  {
    ...baseConfig,
    ...{
      input: {
        path: "./swagger/Contract.json",
      },
      output: {
        path: "./src/apis/contract",
        clean: true,
      },
    },
  },
  {
    ...baseConfig,
    ...{
      input: {
        path: "./swagger/Profile.json",
      },
      output: {
        path: "./src/apis/profile",
        clean: true,
      },
    },
  },
  {
    ...baseConfig,
    ...{
      input: {
        path: "./swagger/Wish.json",
      },
      output: {
        path: "./src/apis/wish",
        clean: true,
      },
    },
  },
  {
    ...baseConfig,
    ...{
      input: {
        path: "./swagger/Quest.json",
      },
      output: {
        path: "./src/apis/quest",
        clean: true,
      },
    },
  },
  {
    ...baseConfig,
    ...{
      input: {
        path: "./swagger/Feed.json",
      },
      output: {
        path: "./src/apis/feed",
        clean: true,
      },
    },
  },
  {
    ...baseConfig,
    ...{
      input: {
        path: "./swagger/App.json",
      },
      output: {
        path: "./src/apis/app",
        clean: true,
      },
    },
  },
  {
    ...baseConfig,
    ...{
      input: {
        path: "./swagger/Asset.json",
      },
      output: {
        path: "./src/apis/asset",
        clean: true,
      },
    },
  },
  {
    ...baseConfig,
    ...{
      input: {
        path: "./swagger/Search.json",
      },
      output: {
        path: "./src/apis/search",
        clean: true,
      },
    },
  },
  {
    ...baseConfigForQuestsAPI,
    ...{
      input: {
        path: "./swagger/Task.json",
      },
      output: {
        path: "./src/apis/task",
        clean: true,
      },
    },
  },
  {
    ...baseConfig,
    ...{
      input: {
        path: "./swagger/Quests.json",
      },
      output: {
        path: "./src/apis/quests",
        clean: true,
      },
    },
  },
  {
    ...baseConfigForQuestsAPI,
    ...{
      input: {
        path: "./swagger/QuestsCustomer.json",
      },
      output: {
        path: "./src/apis/questsCustomer",
        clean: true,
      },
    },
  },
]);
