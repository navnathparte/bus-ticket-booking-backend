import { Controller } from '@nestjs/common';
import { BusBookingService } from './bus-booking.service';

@Controller('bus-booking')
export class BusBookingController {
  constructor(private readonly busBookingService: BusBookingService) {}
}
