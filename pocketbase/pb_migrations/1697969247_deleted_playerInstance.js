/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("oau5p3af2qnegc1");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "oau5p3af2qnegc1",
    "created": "2023-10-21 13:01:43.436Z",
    "updated": "2023-10-21 13:01:43.436Z",
    "name": "playerInstance",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "4zb5u3ah",
        "name": "name",
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
})
