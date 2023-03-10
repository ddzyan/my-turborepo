import { httpError, MidwayHttpError, Catch } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';

@Catch(httpError.NotFoundError)
export class NotFoundFilter {
  async catch(err: MidwayHttpError, ctx: Context) {
    return {
      message: '404, ' + ctx.path,
    };
  }
}
