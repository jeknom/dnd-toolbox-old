/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ctitudqwj7c9mpt",
    "created": "2023-10-21 11:21:26.765Z",
    "updated": "2023-10-21 11:21:26.765Z",
    "name": "action",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "a2dgpofo",
        "name": "name",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": 100,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "qdur04ju",
        "name": "diceNotation",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "otctoml8",
        "name": "description",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ctitudqwj7c9mpt");

  return dao.deleteCollection(collection);
})
