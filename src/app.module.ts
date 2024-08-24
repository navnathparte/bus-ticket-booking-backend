import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BusBookingModule } from './bus-booking/bus-booking.module';

@Module({
  imports: [BusBookingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
