/** @type {import("../pb_data/types.d.ts")} */
migrate(
  (app) => {
    const collection = new Collection({
      createRule: null,
      deleteRule: null,
      fields: [
        {
          autogeneratePattern: "[a-z0-9]{15}",
          hidden: false,
          id: "text3208210256",
          max: 15,
          min: 15,
          name: "id",
          pattern: "^[a-z0-9]+$",
          presentable: false,
          primaryKey: true,
          required: true,
          system: true,
          type: "text",
        },
        {
          cascadeDelete: false,
          collectionId: "_pb_users_auth_",
          hidden: false,
          id: "relation2753293999",
          maxSelect: 1,
          minSelect: 0,
          name: "leaderId",
          presentable: false,
          required: true,
          system: false,
          type: "relation",
        },
        {
          autogeneratePattern: "",
          hidden: false,
          id: "text1579384326",
          max: 255,
          min: 3,
          name: "name",
          pattern: "",
          presentable: false,
          primaryKey: false,
          required: true,
          system: false,
          type: "text",
        },
        {
          cascadeDelete: false,
          collectionId: "pbc_3458742876",
          hidden: false,
          id: "relation3142338504",
          maxSelect: 1,
          minSelect: 0,
          name: "problemId",
          presentable: false,
          required: false,
          system: false,
          type: "relation",
        },
        {
          hidden: false,
          id: "autodate2990389176",
          name: "created",
          onCreate: true,
          onUpdate: false,
          presentable: false,
          system: false,
          type: "autodate",
        },
        {
          hidden: false,
          id: "autodate3332085495",
          name: "updated",
          onCreate: true,
          onUpdate: true,
          presentable: false,
          system: false,
          type: "autodate",
        },
      ],
      id: "pbc_1568971955",
      indexes: [
        "CREATE UNIQUE INDEX `idx_SJ7OOwbYO8` ON `teams` (`leaderId`)",
        "CREATE UNIQUE INDEX `idx_uvRFOZcAGE` ON `teams` (`name`)",
      ],
      listRule: null,
      name: "teams",
      system: false,
      type: "base",
      updateRule: null,
      viewRule: null,
    });

    return app.save(collection);
  },
  (app) => {
    const collection = app.findCollectionByNameOrId("pbc_1568971955");

    return app.delete(collection);
  },
);
