import _ from 'lodash';

const data = [
  {
    username: 'carlos',
    role: 'seller'
  },
  {
    username: 'andres',
    role: 'admin'
  },
  {
    username: 'valentina',
    role: 'seller'
  },
  {
    username: 'felipe',
    role: 'customer'
  },
];

const rta = _.groupBy(data, (item) => item.username);
console.log(rta);
