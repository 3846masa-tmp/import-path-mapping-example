import { twice } from '@example/awesome-package';

import { $ } from '~/util';

$('#app').textContent = `10 * 2 = ${twice(20)}`;
