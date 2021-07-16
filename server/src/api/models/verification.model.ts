import { Column, Entity } from 'typeorm';
import { MainEntity } from './main.abstract';
import { Transform } from 'class-transformer';
import { mailTransformer } from '../utils/mail.transformer';

@Entity()
export class Verification extends MainEntity {

	@Column()
	@Transform(mailTransformer)
	email: string;

	@Column()
	verificationCode: string;
}