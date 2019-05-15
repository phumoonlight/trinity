/**
 * @api {get} /person/:id Find a people
 * @apiGroup Users
 * * @apiParam {Object[]} id firstname
 * @apiSuccess {String} firstname firstname
 * @apiSuccess {String} lastname lastname
 * @apiSuccessExample {json} Success
 *    [{
 *         "firstname" : "beat",
 *          "lastname" : "panupong"
 *    }]
 * @apiErrorExample {json} List error
 *    HTTP/1.1 500 Internal Server Error
 */
/**
 * @api {get} /person/ Find all people
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
 * @api {post} /person Register a new people
 * @apiGroup Users
 * @apiParamExample {json} Input
 *    {
 *      "firstname": "Study",
 *      "lastname": "Jonh"
 *    }
 * @apiSuccess {String} firstname  firstname
 * @apiSuccess {String} lastname  lastname

 * @apiSuccessExample {json} Success
 *    [{
 *      "firstname": "Study",
 *      "lastname": "Jonh"
 *    }]
 * @apiErrorExample {json} Register error
 *    HTTP/1.1 500 Internal Server Error
 */
/**
 * @api {put} /person/:id Update a person
 * @apiGroup Users
 * @apiParam {Object[]} id firstname
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
 * @api {delete} /person/:id Remove a person
 * @apiGroup Users
 * @apiParam {Object[]} id firstname
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 204 No Content
 * @apiErrorExample {json} Delete error
 *    HTTP/1.1 500 Internal Server Error
 */
