import React from 'react';

import TestCaseListScreen from './screens/TestCase/List';
import TestCaseDetailScreen from './screens/TestCase/Detail';
import ModuleListScreen from './screens/Module/List';
import ModuleDetailScreen from './screens/Module/Detail';

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/test_case', exact: true, name: 'Test case', component: TestCaseListScreen },
  { path: '/test_case/by_path', exact: true, name: 'Test case', component: TestCaseDetailScreen },
  { path: '/module', exact: true, name: 'Module', component: ModuleListScreen },
  { path: '/module/by_path', exact: true, name: 'Module', component: ModuleDetailScreen },
];

export default routes;
