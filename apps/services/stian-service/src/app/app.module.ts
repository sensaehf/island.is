import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'

import { AuthModule } from '@island.is/auth-nest-tools'
import { AuditModule } from '@island.is/nest/audit'

import { environment } from '../environments'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { SequelizeConfigService } from './sequelizeConfig.service'
import { MyResourceModule } from './my-resource/my-resource.module'

@Module({
  imports: [
    // AuthModule.register(environment.auth),
    // AuditModule.forRoot(environment.audit),
    SequelizeModule.forRootAsync({
      useClass: SequelizeConfigService,
    }),
    MyResourceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
