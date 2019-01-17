import { Request, Response } from 'express';
import { ContactController } from '../../controllers/contactController';

export class Routes {
    public contactController: ContactController = new ContactController();

    public routes(app): void {
        app.route('/').get((req: Request, res: Response) => {
            res.status(200).send({
                message: 'GET request successful.'
            });
        });

        // contact
        app.route('/contact')
            // GET endpoint
            .get((req: Request, res: Response) => {
                // Get all contacts
                res.status(200).send({
                    message: 'GET request successful.'
                });
            })
            // POST
            .post(this.contactController.addNewContact);

        // Contact detail
        app.route('/contact/:contactId')
            // get specific contact
            .get((req: Request, res: Response) => {
                // Get a single contact detail
                res.status(200).send({
                    message: 'GET request successful.'
                });
            })
            .put((req: Request, res: Response) => {
                // Update a contact
                res.status(200).send({
                    message: 'PUT request successful.'
                });
            })
            .delete((req: Request, res: Response) => {
                // Delete a contact
                res.status(200).send({
                    message: 'DELETE request successful.'
                });
            });
    }
}
