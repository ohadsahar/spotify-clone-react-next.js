import { Service } from 'typedi';
import sgMail from '@sendgrid/mail';
import getConfig from '../../config/env.config';
import { ForbiddenError } from '../errors';
import { ErrosType } from '../dto/util/enums';

@Service()
export class EmailService {

	private templates = {
		sendOTP: 'd-40506369faab4130b2b139185b5d8029',
		forgotPassword: 'd-d27b7937f2d14add967771442bd68e0b'
	};

	constructor() {
		sgMail.setApiKey(getConfig().sendGrid.sgApiKey);
	}

	async sendMail(to: string, subject, template: string, attachment?: any, templateData?: any) {
		try {
			const msg = {
				to,
				from: getConfig().sendGrid.fromAuth,
				subject: subject,
				templateId: this.templates[template],
				dynamic_template_data: templateData,
				attachments: attachment ?? []
			};
			return await sgMail.send(msg);
		} catch (error) {
			throw new ForbiddenError(
				ErrosType.FORBIDDEN, 'email.service.ts -> mail was not sent',
				new Error('Email was not sent'));
		}

	}
}
