/**
 * @api {get} /people/:name Find a PersonByID
 * @apiGroup Users
 * @apiParam {String} name firstname of user
 * @apiSuccess {String} firstname firstname
 * @apiSuccess {String} lastname lastname
 * @apiSuccessExample {json} Success
 *    {
 *         "firstname" : "beat",
 *          "lastname" : "panupong"
 *    }
 * @apiErrorExample {json} List error
 *    HTTP/1.1 500 Internal Server Error
 */

/**
 * @api {get} /people/ Find All People
 * @apiGroup Users
 * @apiSuccess {String} firstname  firstname
 * @apiSuccess {String} lastname  lastname

 * @apiSuccessExample {json} Success
 *    [{
 *         "firstname" : "beat",
 *          "lastname" : "panupong"
 *    },
 *    {
 *         "firstname" : "aof",
 *          "lastname" : "naluebet"
 *    },
 *    {
 *         "firstname" : "puu",
 *          "lastname" : "poosan"
 *    }
 * ]
 * @apiErrorExample {json} Task not found
 *    HTTP/1.1 404 Not Found
 * @apiErrorExample {json} Find error
 *    HTTP/1.1 500 Internal Server Error
 */

/**
 * @api {post} /people/ Register a new Person
 * @apiGroup Users
 * @apiParamExample {json} Input
 *    {
 *      "firstname": "Study",
 *      "lastname": "Jonh"
 *    }
 * @apiSuccess {String} firstname  firstname
 * @apiSuccess {String} lastname  lastname

 * @apiSuccessExample {json} Success
 * [
 *    {
 *         "firstname" : "beat",
 *          "lastname" : "panupong"
 *    },
 *    {
 *         "firstname" : "aof",
 *          "lastname" : "naluebet"
 *    },
 *    {
 *         "firstname" : "puu",
 *          "lastname" : "poosan"
 *    },
 *    {
 *      "firstname": "Study",
 *      "lastname": "Jonh"
 *    }
 * ]
 * @apiErrorExample {json} Register error
 *    HTTP/1.1 500 Internal Server Error
 */


/**
 * @api {put} /people/:name Update a Person
 * @apiGroup Users
 * @apiParam {String} name firstname of user
  * @apiSuccess {String} firstname  firstname
 * @apiSuccess {String} lastname  lastname
 * @apiParamExample {json} Input
 *    {
 *      "firstname": "Work",
 *      "lastname": "Doe"
 *    }
 * @apiSuccessExample {json} Success
 *    {
 *      "firstname": "Work",
 *      "lastname": "Doe"
 *    }
 * @apiErrorExample {json} Update error
 *    HTTP/1.1 500 Internal Server Error
 */


/**
 * @api {delete} /people/:name Remove a PersonByName
 * @apiGroup Users
 * @apiParam {String} name firstname of user
 * @apiParamExample {json} Input
 * localhost:3000/people/Study
 * @apiSuccessExample {json} Success
 * [
 *    {
 *         "firstname" : "beat",
 *          "lastname" : "panupong"
 *    },
 *    {
 *         "firstname" : "aof",
 *          "lastname" : "naluebet"
 *    },
 *    {
 *         "firstname" : "puu",
 *          "lastname" : "poosan"
 *    },
 * ]
 * @apiErrorExample {json} Delete error
 *    HTTP/1.1 500 Internal Server Error
 */
