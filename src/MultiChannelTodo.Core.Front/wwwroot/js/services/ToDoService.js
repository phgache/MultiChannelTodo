﻿'use strict';
multiChannelToDoApp
    .factory('toDoService', ['$http', function ($http) {
        return {

            getItems: function () {
                return $http.get(apiPath + '/ToDoItems');
            },

            add: function (id, task) {
                return $http.post(apiPath + '/ToDoItems', { "Text": task, "Complete": false });
            },

            complete: function (item) {
                return $http.put(apiPath + '/ToDoItems/' + item.id);
            },

            remove: function (item) {
            return $http.delete(apiPath + '/ToDoItems/' + item.id);
        }
        }
    }]);