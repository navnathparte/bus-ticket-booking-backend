import { Test, TestingModule } from '@nestjs/testing';
import { BusBookingService } from './bus-booking.service';

describe('BusBookingService', () => {
  let service: BusBookingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BusBookingService],
    }).compile();

    service = module.get<BusBookingService>(BusBookingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
