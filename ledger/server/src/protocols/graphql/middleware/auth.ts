import {Context, Next } from "koa";

export async function auth(ctx: Context, next: Next) {

    const {authorization} = ctx.header;

    console.log(authorization)

    if (!authorization) {
        ctx.status = 401;
        ctx.body = {
            status: "error",
            message: 'Missing Authorization Token',
        };
        return;
    }

    ctx.id = authorization
    // If auth is successful, proceed to next middleware
    await next();
}