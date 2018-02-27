import { Module, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CorsMiddleware } from './cors.middleware';
@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/animals'), CatsModule, UserModule, AuthModule],
  // controllers: [AppController, CatsController, DogsController],
  components: [],
})
export class ApplicationModule {
  configure(consumer: MiddlewaresConsumer): void {
    consumer.apply(CorsMiddleware).forRoutes(
        { path: '*', method: RequestMethod.ALL }
    );
}
}
