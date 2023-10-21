/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "on0jaxcsl8sf4uv",
    "created": "2023-10-21 11:27:18.193Z",
    "updated": "2023-10-21 11:27:18.193Z",
    "name": "npcInstance",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ctv1zhan",
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
      },
      {
        "system": false,
        "id": "rjkglz1q",
        "name": "field",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "2pwubfgpclbapkk",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
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
  const collection = dao.findCollectionByNameOrId("on0jaxcsl8sf4uv");

  return dao.deleteCollection(collection);
})
