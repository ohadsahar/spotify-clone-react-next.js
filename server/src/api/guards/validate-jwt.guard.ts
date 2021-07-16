import {NextFunction, Request, Response} from "express";
import {authenticate} from "passport";
import {Container} from "typedi";
import {ForbiddenError} from "../errors";
import {ResHandlerService} from "../services/res-handler.service";
import {cloneDeep} from "lodash";

const resService = Container.get(ResHandlerService);
export const validateJwt = (req: Request, res: Response, next: NextFunction) => {

    return authenticate('jwt', { session: false, failWithError: true }, (err, data, info) => {
        if (err) {
            return resService.handleError(res, new ForbiddenError('general.error.authenticate_jwt', 'error authenticating jwt', err));
        }
        if (!data || !data?.user && !data?.userAdmin) {
            return resService.handleError(res, new ForbiddenError('general.error.authenticate_jwt', 'error authenticating jwt', new Error("no data")))

        } else {
            const user = data.user ?? data.userAdmin;
            req.user = cloneDeep(user);
            req.isAuthenticated = () => true;
        }

        return next();
    })(req, res, next);
};


