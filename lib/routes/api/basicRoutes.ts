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
            .get(this.contactController.getContacts)
            // POST
            .post(this.contactController.addNewContact);

        // Contact detail
        app.route('/contact/:contactId')
            // get specific contact
            .get(this.contactController.getContactWithID)
            .put(this.contactController.updateContact)
            .delete(this.contactController.deleteContact);
    }
}
