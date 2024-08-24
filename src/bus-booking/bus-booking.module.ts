import { Module } from '@nestjs/common';
import { BusBookingService } from './bus-booking.service';
import { BusBookingController } from './bus-booking.controller';

@Module({
  controllers: [BusBookingController],
  providers: [BusBookingService],
})
export class BusBookingModule {}
