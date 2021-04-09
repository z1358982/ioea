import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { DataState } from './data-state';

@Entity()
export class RecyclebinEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  state: DataState;

  @Column()
  objectPath: string;

  @Column()
  cascadeObject: string;

  @Column()
  creator: string;

  @Column()
  createTime: Date;
}
