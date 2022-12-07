import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import {CamionetaController} from './Carro/adapters/controllers/camioneta.controller';
import {CamionetaService} from './Carro/domain/services/camioneta.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [CamionetaController],
  providers: [CamionetaService],
})
export class AppModule {}
