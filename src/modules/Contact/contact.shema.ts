import * as yup from "yup";

export const ContactSchema = {
	contact: yup.object({
		contactId: yup.number().required(),
        localName: yup.string().required()
	})
};
