import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './users/user.entity';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: 'postgres://timdb_ucue_user:MgxOsMFqw6F5yMQ1z6Za2yOsLhDasUQd@dpg-ck35d336fquc738f6ks0-a.oregon-postgres.render.com/timdb_ucue',
      entities: [User],
      synchronize: true,
      ssl: {
        rejectUnauthorized: false, // This option allows you to connect to a server with a self-signed certificate
      },
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
