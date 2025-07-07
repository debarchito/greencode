/** @type {import("../pb_data/types.d.ts")} */
migrate(
  (app) => {
    const collection = app.findCollectionByNameOrId("_pb_users_auth_");

    // add field
    collection.fields.addAt(
      8,
      new Field({
        cascadeDelete: false,
        collectionId: "pbc_1568971955",
        hidden: false,
        id: "relation3629289297",
        maxSelect: 1,
        minSelect: 0,
        name: "teamId",
        presentable: false,
        required: false,
        system: false,
        type: "relation",
      }),
    );

    return app.save(collection);
  },
  (app) => {
    const collection = app.findCollectionByNameOrId("_pb_users_auth_");

    // remove field
    collection.fields.removeById("relation3629289297");

    return app.save(collection);
  },
);
