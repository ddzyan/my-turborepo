import { Provide } from '@midwayjs/decorator';
import { ClassroomEntity } from 'aleo-orm';

import { BaseMapping } from '../../core/baseMapping';

@Provide()
export class ClassroomMapping extends BaseMapping<ClassroomEntity> {
  getModel() {
    return ClassroomEntity;
  }
}
