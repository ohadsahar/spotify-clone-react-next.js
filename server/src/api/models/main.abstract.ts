import {BaseEntity, Column, PrimaryGeneratedColumn, VersionColumn} from 'typeorm'

export abstract class MainEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'timestamp with time zone', name: '_createdAt', default: () => 'LOCALTIMESTAMP'})
    _createdAt: string

    @Column({type: 'timestamp with time zone', name: '_updatedAt', default: () => 'LOCALTIMESTAMP'})
    _updatedAt: string

    @VersionColumn()
    _version: number

    readonly _type = this.constructor.name

}
