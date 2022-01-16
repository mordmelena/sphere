/**
 * Empty object for groups in scenegraph.
 *
 * @namespace cog1.data
 * @module empty
 */
define(["exports", "data"], function(exports, data) {
    "use strict";

    /**
     * Create an instance of the model defined in this module.
     *
     * @parameter object with fields:
     * @returns instance of this model.
     */
    exports.create = function(parameter) {
        if(parameter) {
            var scale = parameter.scale;
            var textureURL = parameter.textureURL;
            // Each face shows a different area of the given texture (e.g, a dice).
            var sixFacesTexture = parameter.sixFacesTexture;
        }
        if(scale == undefined){
            scale = 200;
        }
        if(textureURL == undefined){
            textureURL = "";
        }
        if(sixFacesTexture == undefined){
            sixFacesTexture = false;
        }

        // Instance of the model to be returned.
        var instance = {};

        instance.vertices = [
            // bottom (y=-1)
            [-5,0, 4], //0
            [ 5,0, 4], //1
            [ 5,0,-1], //2
            [-5,0,-1], //3
            //
            // top (y=+1)
            [-5,1, 4], //4
            [ 5,1, 4], //5
            [ 5,1,-1], //6
            [-5,1,-1], //7
           //
            [1, 1, -1 ], //8
            [-1, 1, -1 ], //9
            [1, 1, -10], //10
            [-1, 1, -10], //11
            //
            [1, 0, -1 ], //12
            [-1, 0, -1 ], //13
            [1, 0, -10], //14
            [-1, 0, -10], //15
            //
            [3, 0, -10], //16
            [3, 0, -9], //17
            // [1, 0, -9], //18
            [2, 0, -9], //18
            [2, 0, -8], //19
            [1, 0, -8], //20
            // top
            [3, 1, -10], //21
            [3, 1, -9], //22
            [2, 1, -9], //23
            [2, 1, -8], //24
            [1, 1, -8], //25

            //
            [-3, 0, 1 ], //26
            [3, 0, 1 ], //27
            [-3, 0, 3], //28
            [3, 0, 3], //29
            //
            [-3, 1, 1], //30
            [ 3, 1, 1], //31
            [ 3, 1, 3], //32
            [-3, 1, 3], //33
        ];



        instance.polygonVertices = [
            // [3,2,1,0],
            // [4,5,6,7],
            // [4,0,1,5],
            // [1,2,6,5],
            // [6,2,12,8],
            // [3,0,4,7],
            //
            // [6,8,12,2],
            // [8,6,2,12],
            // [8,9,13,12],
            // [10,11,15,14],
            // [9,13,15,11],
            // [8,12,14,10],
            // [12,13,15,14],
            // [8,9,11,10]
            // [3,2,1,0], // long u/d
            [0, 3, 13, 15, 14, 12, 2, 1], // lower T
            // [4,5,6,7], // long u/d
            [4,7,9,11,10,8,6,5], //upper T
            [10,11,15,14], // free end
            [4,5,1,0],
            [4,7,3,0],
            [5,6,2,1],
            // [9,13,15,11], // long side l/r
            // [8,12,14,10], // long side l/r
            // [14,16,17,18],
            [14, 16, 17, 18, 19, 20],
            [10, 21, 22, 23, 24, 25],
            [10,21,16,14],
            [16,17,22,21],
            [23,22,17,18],
            [25,24,19,20],
            [26,27,29,28],
            [30, 31, 32,33]
        ];
        instance.polygonColors = [0,1,2,3,4,5,0,1,2,3,4,5, 0,1,2,3,4,5];
        data.applyScale.call(instance, scale);
        return instance;
    };
});