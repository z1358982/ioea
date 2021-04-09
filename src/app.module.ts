import { Module } from '@nestjs/common';
import { IoModule } from './io/io.module';

@Module({
  imports: [IoModule],
  providers: [],
})
export class AppModule {}
