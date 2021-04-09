import {
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { FileDTO } from './dto/file.dto';
import { FILE_SERVICE, IFileService } from './services/file.service';

@ApiTags('文件服务')
@Controller('api/v1/file')
export class FileController {
  constructor(
    @Inject(FILE_SERVICE)
    private readonly fileService: IFileService,
  ) {}

  @ApiOperation({
    description: '获取所有文件',
    summary: '获取所有文件',
  })
  @ApiQuery({
    name: 'search',
    description: '查询关键字',
    type: String,
    required: false,
  })
  @ApiQuery({
    name: 'sortBy',
    description: '排序',
    type: String,
    required: false,
  })
  @ApiQuery({
    name: 'page',
    description: '页码',
    type: Number,
    required: false,
  })
  @ApiQuery({
    name: 'pageSize',
    description: '每页的大小',
    type: Number,
    required: false,
  })
  @ApiOkResponse({
    description: '返回文件列表',
    type: FileDTO,
  })
  @ApiBadRequestResponse({
    description: '模型验证失败',
  })
  @ApiUnauthorizedResponse({
    description: '鉴权失败',
  })
  @Get()
  async getAll(
    @Query('search') search?: string | undefined,
    @Query('sortBy') sortBy?: string | undefined,
    @Query('page') page?: number | undefined,
    @Query('pageSize') pageSize?: number | undefined,
  ): Promise<FileDTO[]> {
    return await this.fileService.getAll(search, sortBy, page, pageSize);
  }

  @ApiParam({
    name: 'id',
    type: Number,
  })
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
