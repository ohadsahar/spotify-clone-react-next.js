import {ClassType} from "class-transformer/ClassTransformer";
import {plainToClass} from "class-transformer";
import {validate} from "class-validator";
import {isEmpty} from "lodash";
import {Container} from "typedi";
import {Request, Response} from 'express';
import {ResHandlerService} from "../services/res-handler.service";
import multer from "multer";
import getConfig from "../../config/env.config";

const resHandlerService = Container.get(ResHandlerService);

export const validationMiddleware = <T>(clazz: ClassType<T>) => {
    return async (req: Request, res: Response, next) => {
        const transformedObject = plainToClass(clazz, {...req.body, ...req.params, ...req.query});
        const errors = await validate(transformedObject);
        if (errors && !isEmpty(errors)) {
            resHandlerService.handleValidationErrors(res, errors);
        } else {
            next();
        }
    }
}

export const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, getConfig().uploadDir)
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
});
