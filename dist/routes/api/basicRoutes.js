"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Routes {
    routes(app) {
        app.route('/').get((req, res) => {
            res.status(200).send({
                message: 'GET request successful.'
            });
        });
        // contact
        app.route('/contact')
            // GET endpoint
            .get((req, res) => {
            // Get all contacts
            res.status(200).send({
                message: 'GET request successful.'
            });
        })
            // POST
            .post((req, res) => {
            // Create new contact
            res.status(200).send({
                message: 'POST request successful.'
            });
        });
        // Contact detail
        app.route('/contact/:contactId')
            // get specific contact
            .get((req, res) => {
            // Get a single contact detail
            res.status(200).send({
                message: 'GET request successful.'
            });
        })
            .put((req, res) => {
            // Update a contact
            res.status(200).send({
                message: 'PUT request successful.'
            });
        })
            .delete((req, res) => {
            // Delete a contact
            res.status(200).send({
                message: 'DELETE request successful.'
            });
        });
    }
}
exports.Routes = Routes;
//# sourceMappingURL=basicRoutes.js.map