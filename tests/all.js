'use strict';
process.env.DEBUG = '*';
require('./config');  // Init config

describe('All Tests', function() {

  before(function(done) {
    this.timeout(0);  // Don't timeout anything
    done();
  });

  after(function() {});

  //require('./tests/actions/TestPluginCustom');
  //require('./tests/actions/TestDefaultActionHook');
  //require('./tests/actions/ProjectCreate');
  //require('./tests/actions/StageCreate');
  //require('./tests/actions/RegionCreate');
  //require('./tests/actions/ModuleInstall');
  require('./tests/actions/ModuleCreate');
  require('./tests/actions/FunctionCreate');
  //require('./tests/actions/EnvList');
  //require('./tests/actions/EnvGet');
  //require('./tests/actions/EnvSetUnset');
  //require('./tests/actions/ResourcesDeploy');
  //require('./tests/actions/FunctionRun');
  //require('./tests/actions/FunctionDeploy');
  //require('./tests/actions/EndpointDeploy');

});
