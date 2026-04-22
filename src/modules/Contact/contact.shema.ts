import * as yup from "yup";

export const ContactSchema = {
	contact: yup.object({
		// avatar: yup.string().required(),
		contactId: yup.number().required(),
        localName: yup.string().required()
	})
};
