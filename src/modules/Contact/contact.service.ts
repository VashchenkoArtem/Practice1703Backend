import { ContactServiceContract } from "./types/contact.contracts";

import {  NotFoundError } from "../../errors";
import { ContactRepository } from "./contact.repository";

export const ContactService: ContactServiceContract = {
	async create(data,id, filename) {
        try{
            const contact = await ContactRepository.create(data,id, filename)
            return contact
        } catch (err){
            throw err
        }
	},

	async getAll(userId) {
		try{
			const contacts = await ContactRepository.getAll(userId)
			return contacts
		} catch (err){
			throw err
		}
	},

	async getById(id,userId) {
		try{
			const contact = await ContactRepository.getById(userId,id)
            if (!contact){
                throw new NotFoundError("contact")
            }
			return contact
		} catch (err){
			throw err
		}
	}
};
