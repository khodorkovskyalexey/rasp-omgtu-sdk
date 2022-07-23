import { HttpModule, Module } from '@nestjs/common';
import { RaspOmgtuSdkService } from './services';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  providers: [RaspOmgtuSdkService],
  exports: [RaspOmgtuSdkService],
})
export class RaspOmgtuSdkModule {}
