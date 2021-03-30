import {
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';

@Controller('api/v1/file')
export class FileController {
  @Get()
  getAll(
    @Query('search') search?: string | undefined,
    @Query('sortBy') sortBy?: number | undefined,
    @Query('page', ParseIntPipe) page?: number | undefined,
    @Query('pageSize', ParseIntPipe) pageSize?: number | undefined,
  ) {
    throw new Error('not implemented.');
  }

  @Get(':id')
  getById(@Param('id', ParseIntPipe) id: number) {
    throw new Error('not implemented.');
  }

  @Get(':id/manifest')
  getManifest(@Param('id', ParseIntPipe) id: number) {
    throw new Error('not implemented.');
  }

  @Get(':id/perview')
  perview(@Param('id', ParseIntPipe) id: number) {
    throw new Error('not implemented.');
  }

  @Get(':id/download')
  download(@Param('id', ParseIntPipe) id: number) {
    throw new Error('not implemented.');
  }

  @Get(':id/:type')
  export(@Param('id', ParseIntPipe) id: number, @Param('type') type: string) {
    throw new Error('not implemented.');
  }

  @Post()
  post() {
    throw new Error('not implemented.');
  }

  @Post('upload')
  upload() {
    throw new Error('not implemented.');
  }

  @Post(':id/clone')
  clone(@Param('id', ParseIntPipe) id: number) {
    throw new Error('not implemented.');
  }

  @Put(':id')
  put(@Param('id', ParseIntPipe) id: number) {
    throw new Error('not implemented.');
  }

  @Put(':id/move')
  move(
    @Param('id', ParseIntPipe) id: number,
    @Query('parentId') parentId?: number | undefined,
  ) {
    throw new Error('not implemented.');
  }

  @Put(':id/top')
  top(@Param('id', ParseIntPipe) id: number) {
    throw new Error('not implemented.');
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    throw new Error('not implemented.');
  }
}
